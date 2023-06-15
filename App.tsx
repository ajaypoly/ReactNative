/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import HomeScreen from './src/views/home';

function App(): JSX.Element {
  return <>
  
  <SafeAreaView>
    <HomeScreen/>
  </SafeAreaView>
  </>;
}

export default App;
