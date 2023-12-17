/*
app/index.js matches /
app/home.js matches /home
app/settings/index.js matches /settings
app/[user].js matches dynamic paths like /expo or /evanbacon
*/

import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import search from "./search";
import diagram from "./diagrams/diagram";
import { WatchlistProvider } from "./context/WatchListContext";

const Stack = createNativeStackNavigator();

const Page = () => {
  return (
    <View>
      <NavigationContainer>
        <WatchlistProvider>
          <Stack.Navigator initialRouteName="SearchScreen">
            <Stack.Screen name="search" component={search} />
            <Stack.Screen name="diagram" component={diagram} />
          </Stack.Navigator>
        </WatchlistProvider>
      </NavigationContainer>

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

export default Page;

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
});
