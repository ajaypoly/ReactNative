import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeScreen from '../views/home';

import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import ExploreNavigator from './ExploreNavigator';

const Tab = createBottomTabNavigator();

const HomeTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#f15454',
      }}>
      <Tab.Screen
        name={'Explore'}
        component={ExploreNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Fontisto name="search" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={'Airbnb'}
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <FontAwesome5 name="airbnb" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={'Messages'}
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Feather name="message-square" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={'Profile'}
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <EvilIcons name="user" size={25} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTabNavigator;
