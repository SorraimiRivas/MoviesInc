import React, {FC} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {styles} from './styles';
import {BACKDROP_URL, POSTER_URL} from '../../../api';
import {TCardProps} from '../../../types/CardTypes';
import {formatDate} from '../../../utils';

const Card: FC<TCardProps> = ({title, onPress, image, releaseDate, rating}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: image,
          }}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={((styles.title, styles.text), {color: 'black'})}>
          {title}
        </Text>
        <View style={styles.titleRatingContainer}>
          <Text style={(styles.release, styles.text)}>
            {formatDate(releaseDate)}
          </Text>
          <Text style={(styles.text, styles.rating)}>{rating}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
