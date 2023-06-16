import {View, Text, TextInput, FlatList, Pressable} from 'react-native';
import React, {useState} from 'react';
import styles from './style';
import search from '../../../assets/data/search';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';

const DestinationSearch = () => {
  const navigate = useNavigation();
  const [inputText, setInputText] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = text => {
    setInputText(text);

    // Perform the search logic here
    const filteredResults = search.filter(item =>
      item.description.toLowerCase().includes(text.toLowerCase()),
    );
    setSearchResults(filteredResults);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Where are you going?"
        placeholderTextColor="black"
        value={inputText}
        onChangeText={handleSearch} // Call handleSearch when text input changes
      />
      <FlatList
        data={searchResults}
        renderItem={({item}) => {
          return (
            <>
              <Pressable
                onPress={() => {
                  navigate.navigate('Guests');
                }}
                style={styles.row}>
                <View style={styles.iconContainer}>
                  <Entypo name={'location-pin'} size={30} color="black" />
                </View>
                <Text style={styles.locationText}>{item.description}</Text>
              </Pressable>
            </>
          );
        }}
      />
    </View>
  );
};

export default DestinationSearch;
