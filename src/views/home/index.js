import React from 'react';
import {ImageBackground, Pressable, Text, View} from 'react-native';
import styles from './style';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Pressable
        style={styles.searchButton}
        onPress={() => {
          navigation.navigate('Destination');
        }}>
        <Fontisto name="search" size={25} color={'#f15454'} />
        <Text style={styles.searchButtonText}>Where are you going?</Text>
      </Pressable>
      <ImageBackground
        source={require('../../../assets/images/img-5.jpg')}
        style={styles.image}>
        <Text style={styles.title}>Go Near</Text>

        <Pressable style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonText}>Explore Nearby stays</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
