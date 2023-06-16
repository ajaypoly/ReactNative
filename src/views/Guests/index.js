import {View, Text, Pressable} from 'react-native';
import React, {useState} from 'react';
import styles from './style';
import {useNavigation} from '@react-navigation/native';

const GuestScreen = () => {
  const navigation = useNavigation();
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infant, setInfant] = useState(0);

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.row}>
          <View style={styles}>
            <Text style={{fontWeight: 'bold', color: 'black'}}>Adults</Text>
            <Text style={{color: '#8d8d8d'}}>ages 13 or above</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Pressable
              style={styles.button}
              onPress={() => {
                setAdults(Math.max(0, adults - 1));
              }}>
              <Text style={{fontSize: 20, color: 'black'}}>-</Text>
            </Pressable>
            <Text style={{marginHorizontal: 20, fontSize: 16, color: 'black'}}>
              {adults}
            </Text>
            <Pressable
              style={styles.button}
              onPress={() => {
                setAdults(adults + 1);
              }}>
              <Text style={{fontSize: 20, color: 'black'}}>+</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles}>
            <Text style={{fontWeight: 'bold', color: 'black'}}>Children</Text>
            <Text style={{color: '#8d8d8d'}}>Ages 2 to 12</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Pressable
              style={styles.button}
              onPress={() => {
                setChildren(Math.max(0, children - 1));
              }}>
              <Text style={{fontSize: 20, color: 'black'}}>-</Text>
            </Pressable>
            <Text style={{marginHorizontal: 20, fontSize: 16, color: 'black'}}>
              {children}
            </Text>
            <Pressable
              style={styles.button}
              onPress={() => {
                setChildren(children + 1);
              }}>
              <Text style={{fontSize: 20, color: 'black'}}>+</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles}>
            <Text style={{fontWeight: 'bold', color: 'black'}}>Infants</Text>
            <Text style={{color: '#8d8d8d'}}>Under 2</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Pressable
              style={styles.button}
              onPress={() => {
                setInfant(Math.max(0, infant - 1));
              }}>
              <Text style={{fontSize: 20, color: 'black'}}>-</Text>
            </Pressable>
            <Text style={{marginHorizontal: 20, fontSize: 16, color: 'black'}}>
              {infant}
            </Text>
            <Pressable
              style={styles.button}
              onPress={() => {
                setInfant(infant + 1);
              }}>
              <Text style={{fontSize: 20, color: 'black'}}>+</Text>
            </Pressable>
          </View>
        </View>
      </View>
      <View>
        <Pressable
          style={styles.submitButton}
          onPress={() => {
            navigation.navigate('');
          }}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}> Search</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default GuestScreen;
