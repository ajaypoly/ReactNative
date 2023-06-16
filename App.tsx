import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import "react-native-gesture-handler"
import HomeScreen from './src/views/home';
import Post from './src/components/Post';
import feed from './assets/data/feed';
import DestinationSearch from './src/views/Destination';
import GuestScreen from './src/views/Guests';
import Router from './src/navigation/Router';

function App(): JSX.Element {
  return (
    < >
      {/* <ScrollView>
        {feed.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </ScrollView> */}
      {/* <DestinationSearch/> */}
      {/* <GuestScreen/> */}
      <Router/>
    </>
  );
}

export default App;
