import React from 'react';
import {View, Text, TouchableHighlight, TouchableOpacity} from 'react-native';
import {styles} from './styles';

const Card = ({title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default Card;
