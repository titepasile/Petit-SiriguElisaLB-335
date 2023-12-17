/*
app/index.js matches /
app/home.js matches /home
app/settings/index.js matches /settings
app/[user].js matches dynamic paths like /expo or /evanbacon
*/

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from "expo-router";

const IndexPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.subtitle}>Watchlist</Text>
        <View style={styles.nav}>
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
    justifyContent: 'center',
    maxWidth: 'auto',
  },
  subtitle: {
    fontSize: 20,
    textAlign: 'center',
    color: '#38434D',
  },
  nav: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: "relative",
    top: 300,
  },
  navigationIndex: {
    backgroundColor: 'grey',
    padding: 10,
    borderRadius: 5,
  },
  navigationSearch: {
    padding: 10,
    borderRadius: 5,
  },
  navigationText: {
    fontSize: 15,
    color: 'black',
  },
});

export default IndexPage; 
