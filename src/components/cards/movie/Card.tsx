import React, {FC} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {styles} from './styles';
import {TCardProps} from '../../../types/CardTypes';
import {formatDate} from '../../../utils';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useFavorites} from '../../../hooks/useFavorites';
import BookmarkButton from '../../buttons/favorite/BookmarkButton';

const Card: FC<TCardProps> = ({
  title,
  onPress,
  image,
  releaseDate,
  rating,
  id,
}) => {
  const {addFavoriteMovie, isFavorite} = useFavorites();
  const formattedDate = formatDate(releaseDate);
  const iconColor = isFavorite(id) ? '#01b4e4' : 'gray';

  const handleOnPress = () => {
    addFavoriteMovie({title, image, releaseDate, rating, id});
  };

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: image,
          }}
        />
        <BookmarkButton
          size={25}
          style={styles.bookmark}
          onPress={handleOnPress}
          color={iconColor}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.releaseRatingContainer}>
          <Text style={styles.text}>{formattedDate}</Text>
          <View style={styles.ratingContentContainer}>
            <Icon style={styles.star} name="star-o" size={13} color="white" />
            <Text style={(styles.text, styles.rating)}>{rating}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
