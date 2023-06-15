import {View, Text, TextInput, FlatList} from 'react-native';
import React, {useState} from 'react';
import styles from './style';
import search from '../../../assets/data/search';
import Entypo from 'react-native-vector-icons/Entypo';

const DestinationSearch = () => {
  const [inputText, setInputText] = useState('');
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Where are you going?"
        value={inputText}
        onChangeText={setInputText}
      />
      <FlatList
        data={search}
        renderItem={item => {
          return (
            <>
              <View style={styles.row}>
                <View style={styles.iconContainer}>
                  <Entypo name={'location-pin'} size={30} color="black" />
                </View>
                <Text style={styles.locationText}>{item.item.description}</Text>
              </View>
            </>
          );
        }}
      />
    </View>
  );
};

export default DestinationSearch;
