import {View, Text, Pressable} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const BookMarkButton = ({size, style, onPress}) => {
  return (
    <Pressable style={style}>
      <Icon name="bookmark-o" size={size} color="white" onPress={onPress} />
    </Pressable>
  );
};

export default BookMarkButton;
