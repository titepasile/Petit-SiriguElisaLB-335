/*
app/index.js matches /
app/home.js matches /home
app/settings/index.js matches /settings
app/[user].js matches dynamic paths like /expo or /evanbacon
*/

import React from 'react';
import { StyleSheet, Text, View, Link } from 'react-native';

const IndexPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.subtitle}>Watchlist</Text>
        <View style={styles.navigation}>
          <View style={styles.navigationIndex}>
            <Link href="/">
              <Text style={styles.navigationText}>index</Text>
            </Link>
          </View>

          <View style={styles.navigationMotion}>
            <Link href="/motion">
              <Text style={styles.navigationText}>motion</Text>
            </Link>
          </View>

          <View style={styles.navigationSearch}>
            <Link href="/search">
              <Text style={styles.navigationText}>search</Text>
            </Link>
          </View>
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
    flex: 9,
    justifyContent: "center",
    maxWidth: "auto",
  },
  /*title: {
    fontSize: 43,
    fontWeight: "bold",
    position: "relative",
    bottom: 300,
  },
  */
  subtitle: {
    fontSize: 20,
    textAlign: "center",
    color: "#38434D",
  },
  navigation: {
    flex: 1,
  },
  navigationIndex: {
    backgroundColor: "grey",
    width: 40,
    height: "auto",
    position: "relative",
    left: 80,
  },
  navigationSearch: {
    textAlign: "right",
    position: "relative",
    bottom: 17,
    left: 250,
  },
  navigationText: {
    fontSize: 15,
    color: "black",
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

export default IndexPage; 
