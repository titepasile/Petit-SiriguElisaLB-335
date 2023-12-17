/*
app/index.js matches /
app/home.js matches /home
app/settings/index.js matches /settings
app/[user].js matches dynamic paths like /expo or /evanbacon
*/

import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Link } from "expo-router";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SearchScreen from "./search";
import diagram from "./diagrams/diagram";
import { WatchlistProvider } from "./context/WatchListContext";
import { useWatchlist } from "./context/WatchListContext";

export default function IndexPage() {
  const Stack = createNativeStackNavigator();

  const IndexScreen = ({ navigation }) => {
    const { watchlist, removeFromWatchlist } = useWatchlist();
    return (
      <View>
        <NavigationContainer>
          <WatchlistProvider>
            <Stack.Navigator initialRouteName="SearchScreen">
              <Stack.Screen name="SearchScreen" component={SearchScreen} />
              <Stack.Screen name="diagram" component={diagram} />
            </Stack.Navigator>
          </WatchlistProvider>
        </NavigationContainer>

        <View style={styles.container}>
          <Text>Watchlist</Text>
          <FlatList
            data={watchlist}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.stockItem}
                onPress={() =>
                  navigation.navigate("DiagramScreen", { id: item })
                }
              >
                <Text>{item}</Text>
                <TouchableOpacity onPress={() => removeFromWatchlist(item)}>
                  <Text style={styles.deleteButton}>Delete</Text>
                </TouchableOpacity>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item}
          />
        </View>

        <View style={styles.navigation}>
          <View style={styles.navigationIndex}>
            <Link href="/">
              <Text style={styles.navigationText}>index</Text>
            </Link>
          </View>

          <View style={styles.navigationSearch}>
            <Link href="/search">
              <Text style={styles.navigationText}>search</Text>
            </Link>
          </View>
        </View>
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
    },
    main: {
      flex: 1,
      justifyContent: "center",
      maxWidth: "auto",
    },
    /*title: {
    fontSize: 43,
    fontWeight: "bold",
    position: "relative",
    bottom: 300,
  },*/
    subtitle: {
      fontSize: 20,
      textAlign: "center",
      color: "#38434D",
    },
    navigation: {},
    navigationIndex: {
      position: "relative",
      left: 60,
      backgroundColor: "grey",
      width: 40,
      height: "auto",
    },
    navigationSearch: {
      textAlign: "right",
      position: "relative",
      bottom: 18,
      left: 250,
    },
    navigationText: {
      fontSize: 15,
    },
    stockItem: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      padding: 10,
      borderWidth: 1,
      borderColor: "lightgray",
      borderRadius: 5,
      marginBottom: 8,
    },
    deleteButton: {
      color: "red",
    },
  });
}
