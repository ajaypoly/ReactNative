import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './style';

const Post = ({post}) => {
  console.log(post, 'hiiii');
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: post.image,
        }}
      />
      <Text style={styles.bedroom}>
        {post.bed} bed {post.bedroom} bedroom{' '}
      </Text>

      <Text style={styles.description} numberOfLines={2}>
        {post.type},{post.title}
      </Text>
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}> ${post.oldPrice} </Text>
        <Text style={styles.price}> ${post.newPrice} </Text>
        /night
      </Text>
      <Text style={styles.totalPrice}>{post.totalPrice} total</Text>
    </View>
  );
};

export default Post;
