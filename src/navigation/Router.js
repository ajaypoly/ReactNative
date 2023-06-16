import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import DestinationSearch from '../views/Destination';
import GuestScreen from '../views/Guests';
import HomeTabNavigator from './HomeTabNavigator';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name={'Home'}
          component={HomeTabNavigator}
        />
        <Stack.Screen
          options={{title: 'Search your Destination'}}
          name={'Destination'}
          component={DestinationSearch}
        />
        <Stack.Screen
          options={{title: 'How many people?'}}
          name={'Guests'}
          component={GuestScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
