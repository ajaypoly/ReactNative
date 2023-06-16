import {View, Text} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import SearchResultsScreen from '../views/SearchResults';

const Tab = createMaterialTopTabNavigator();
const SearchResultsTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#f15454',
        indicatorStyle: {
          backgroundColor: '#f15454',
        },
      }}>
      <Tab.Screen name={'list'} component={SearchResultsScreen}></Tab.Screen>
      <Tab.Screen name={'map'} component={SearchResultsScreen}></Tab.Screen>
    </Tab.Navigator>
  );
};

export default SearchResultsTabNavigator;
