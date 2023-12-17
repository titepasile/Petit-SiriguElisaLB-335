import { StyleSheet, Text, View } from "react-native";
import { Link, useLocalSearchParams } from 'expo-router';

export default function Page() {
  const {id} = useLocalSearchParams<{id: string}>();

  return (
    <View>
        <Text>Diagram:</Text>
        <Text>Coming soon</Text>
    </View>
  );
}