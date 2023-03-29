import {Pressable} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TBookmarkButtonProps} from '../../../types/ButtonTypes';

const BookmarkButton = ({
  size,
  style,
  onPress,
  color,
}: TBookmarkButtonProps) => {
  return (
    <Pressable style={style}>
      <Icon name="bookmark" size={size} color={color} onPress={onPress} />
    </Pressable>
  );
};

export default BookmarkButton;
