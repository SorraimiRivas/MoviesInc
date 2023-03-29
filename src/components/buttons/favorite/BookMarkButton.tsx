import {View, Text, Pressable} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useFavorites} from '../../../hooks/useFavorites';

const BookMarkButton = ({size, style, onPress, color}) => {
  return (
    <Pressable style={style}>
      <Icon name="bookmark" size={size} color={color} onPress={onPress} />
    </Pressable>
  );
};

export default BookMarkButton;
