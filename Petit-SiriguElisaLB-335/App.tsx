import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { WatchlistProvider } from './app/context/WatchListContext';
import SearchScreen from './app/search';
import DiagramScreen from './app/diagrams/diagram';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <WatchlistProvider>
        <Stack.Navigator initialRouteName="SearchScreen">
          <Stack.Screen name="SearchScreen" component={SearchScreen} />
          <Stack.Screen name="DiagramScreen" component={DiagramScreen} />
        </Stack.Navigator>
      </WatchlistProvider>
    </NavigationContainer>
  );
};

export default App;
