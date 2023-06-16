import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import HomeScreen from '../views/home';
import Post from '../components/Post';
import SearchResultsScreen from '../views/SearchResults';
import SearchResultsTabNavigator from './SearchResultsTabNavigator';

const Stack = createStackNavigator();

const ExploreNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'Welcome'}
        component={HomeScreen}
        options={{
          headerShown: false,
        }}></Stack.Screen>
      <Stack.Screen
        name={'SearchResults'}
        component={SearchResultsTabNavigator}
        options={{
          headerShown: false,
        }}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default ExploreNavigator;
