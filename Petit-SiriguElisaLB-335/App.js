import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchScreen from './app/search';
import DiagramScreen from './app/diagrams/diagram';
import { WatchListProvider } from './app/context/WatchListContext';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <WatchListProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SearchScreen">
          <Stack.Screen name="SearchScreen" component={SearchScreen} />
          <Stack.Screen name="DiagramScreen" component={DiagramScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </WatchListProvider>
  );
};

export default App;
