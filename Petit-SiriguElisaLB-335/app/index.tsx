/*
app/index.js matches /
app/home.js matches /home
app/settings/index.js matches /settings
app/[user].js matches dynamic paths like /expo or /evanbacon
*/

import { Pressable, StyleSheet, Text, View } from "react-native";
import { Link, router } from "expo-router";

export default function Page() {
  return (
    <View style={styles.container}>
      
      <View style={styles.main}>
        <Text style={styles.subtitle}>Your list is empty!</Text>
      </View>

      <View style={styles.navigation}>
        <View style={styles.navigationDiagrams}>
          <Pressable
            onPress={() =>
              router.push({
                pathname: "/diagrams/[id]",
                params: { id: 1 },
              })
            }
          >
            <Text style={styles.navigationText}>diagram</Text>
          </Pressable>
        </View>
        <View style={styles.navigationSearch}>
          <Link href="/search">
            <Text style={styles.navigationText}>search</Text>
          </Link>
        </View>
      </View>
    </View>
  );
}

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
  navigationDiagrams: {
    position: "relative",
    left: 60,
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
