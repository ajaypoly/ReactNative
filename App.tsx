import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import HomeScreen from './src/views/home';
import Post from './src/components/Post';
import feed from './assets/data/feed';
import DestinationSearch from './src/views/Destination';

function App(): JSX.Element {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <ScrollView>
        {feed.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </ScrollView> */}
      <DestinationSearch/>
    </SafeAreaView>
  );
}

export default App;
