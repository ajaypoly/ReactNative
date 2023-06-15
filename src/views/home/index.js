import React from 'react';
import {ImageBackground, Pressable, Text, View} from 'react-native';
import styles from './style';

const HomeScreen = () => {
  return (
    <View>
      <ImageBackground
        source={require('../../../assets/images/img-5.jpg')}
        style={styles.image}>
        <Text style={styles.title}>Go Near</Text>

        <Pressable
          style={styles.button}
          onPress={() => {
            console.log('hiii');
          }}>
          <Text style={styles.buttonText}>Explore Nearby stays</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
