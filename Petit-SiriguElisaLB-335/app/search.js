import { StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";
import { State, TextInput, ScrollView } from "react-native-gesture-handler";

export default function Page() {
  const [state, setState] = useState({
    searchText: "",
    stocks: [],
  });

  useEffect(() => {
    fetch("http://api.marketstack.com/v1/eod?access_key=dcfbf46b058adba28731fe0693a93f63&symbols=ALC,LOGN,CFR,ROG,AAPL,MSFT,AMZN,FB,KO,DIS,NFLX,NKE,TSLA,DDAIF,MSFT")
      .then(res => res.json())
      .then(stockData => setState(prev => ({ ...prev, stocks: stockData})))
      .catch(err => console.error(err));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.hintText}>Type a company name or stock symbol:</Text>

      <View style={styles.searchSection}>
        <TextInput
          style={styles.serachInput}
          placeholder="Search"
          placeholderTextColor="#fff"
          defaultValue={state.searchText}
          onChangeText={(text) =>
            setState((prev) => ({ ...prev, searchText: text }))
          }
        />
      </View>

      <ScrollView>
        {state.stocks.map((stock) => (
          <View key={stock.symbol}>
            <Text style={styles.stockSymbol}>{stock.symbol}</Text>
            <Text style={styles.stockName}>{stock.name}</Text>
            <View style={styles.divider} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  stockSymbol: {
    paddingHorizontal: 10,
    paddingTop: 10,
    color: "#fff",
    fontSize: 20,
  },
  stockName: {
    paddingHorizontal: 10,
    color: "#fff",
  },
  divider: {
    marginTop: 10,
    borderBottomColor: "#2f2f2f",
    borderBottomWidth: 1,
  },

  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "black",
  },
  hintText: {
    color: "#fff",
    textAlign: "center",
    marginVertical: 5,
  },
  searchSection: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1f1f1f",
    height: 40,
  },
  serachInput: {
    flex: 1,
    color: "#fff",
  },
});
