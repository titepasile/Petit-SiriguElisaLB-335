import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TextInput, StyleSheet, Pressable, TouchableOpacity } from "react-native";
import { Link, router } from "expo-router";
import { useWatchlist } from './context/WatchListContext';

const SearchScreen = ({ navigation }) => {
  const { addToWatchlist } = useWatchlist();
};

const StockScreen = () => {
  const [searchText, setSearchText] = useState("");
  const [stocks, setStocks] = useState([]);

  const fetchStockData = async () => {
    try {
      const response = await fetch(
        "http://api.marketstack.com/v1/eod?access_key=b3fed8d4fda4a511151c7d628b94ce4c&symbols=ALC,LOGN,CFR,ROG,AAPL,MSFT,AMZN,FB,KO,DIS,NFLX,NKE,TSLA,DDAIF,MSFT"
      );
      const { data } = await response.json();

      const uniqueStocks = Array.from(
        new Set(data.map((stock) => stock.symbol))
      ).map((symbol) => {
        const stockData = data.find((stock) => stock.symbol === symbol);
        return {
          symbol: stockData.symbol,
          high: stockData.high,
          low: stockData.low,
        };
      });

      setStocks(uniqueStocks);
    } catch (error) {
      console.error("Error fetching stock data:", error);
    }
  };

  useEffect(() => {
    fetchStockData();
  }, []);

  const filteredStocks = stocks.filter((stock) =>
    stock.symbol.toLowerCase().includes(searchText.toLowerCase())
  );

  const renderStockItem = ({ item }) => (
    <TouchableOpacity onPress={() =>
      router.push({
        pathname: "/diagrams/[id]",
        params: { id: Symbol },
      })}>
      <View style={styles.stockItem}>
        <Text style={styles.stockSymbol}>{item.symbol}</Text>
        <Text>High: {item.high}</Text>
        <Text>Low: {item.low}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search stock symbol"
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
      />
      <FlatList
        data={filteredStocks}
        renderItem={renderStockItem}
        keyExtractor={(item) => item.symbol}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  searchInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
  },
  stockItem: {
    marginBottom: 16,
  },
  stockSymbol: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default StockScreen;
