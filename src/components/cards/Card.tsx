import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {styles} from './styles';
import {POSTER_URL} from '../../api';

const Card = ({title, onPress, image}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: `${POSTER_URL}${image}`,
          }}
        />
      </View>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default Card;
