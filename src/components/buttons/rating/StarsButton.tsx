import React, {FC} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import {TStarsButtonProps} from '../../../types/ButtonTypes';
import {roundNumber} from '../../../utils';

const StarsButton: FC<TStarsButtonProps> = ({rating, onPress}) => {
  const rounded = roundNumber(rating);

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.starContainer}>
        <Icon name="star-o" size={16} color="#01b4e4" />
        <Icon name="star-o" size={16} color="#01b4e4" />
        <Icon name="star-o" size={16} color="#01b4e4" />
        <Icon name="star-o" size={16} color="#01b4e4" />
        <Icon name="star-o" size={16} color="#01b4e4" />
      </View>
      <Text style={styles.rating}>{rounded}</Text>
    </TouchableOpacity>
  );
};

export default StarsButton;
