//Code from: https://www.youtube.com/watch?v=Z20nUdAUGmM&ab_channel=CosdenSolutions Minute 13.30
import { Stack } from "expo-router";

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index"/>
      <Stack.Screen name="diagrams/[id]"/>
    </Stack>
  );
};

export default RootLayout;