import {View, Text, Image, FlatList} from 'react-native';
import React, {FC, useState} from 'react';
import {useRoute} from '@react-navigation/native';
import {formatDate} from '../../utils';
import styles from './styles';
import Profile from '../../components/cards/cast/Profile';
import {ScrollView} from 'react-native-gesture-handler';
import {useMovieById} from '../../hooks';
import Icon from 'react-native-vector-icons/FontAwesome';
import StarsButton from '../../components/buttons/rating/StarsButton';
import RatingModal from '../../components/modal/ratingModal/RatingModal';
import BookmarkButton from '../../components/buttons/favorite/BookmarkButton';
import {useFavorites} from '../../hooks/useFavorites';
import {RouteParams} from '../../types/NavigationTypes';

const MovieDetails: FC = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const {isFavorite, handleFavorites} = useFavorites();
  const {
    params: {
      item: {id},
    },
  } = useRoute<RouteParams>();

  const movie = useMovieById(id);
  const {title, rating, releaseDate, poster: image} = movie;
  const favoriteInfo = {title, rating, releaseDate, image, id};
  const renderGenres = ({item}: any) => {
    return (
      <Text
        style={{
          marginHorizontal: 4,
          fontSize: 12,
          color: '#ffffffdf',
          fontWeight: 'bold',
        }}>
        {item.name}
      </Text>
    );
  };

  const handleModalVisible = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  const handleOnPress = () => {
    handleFavorites(favoriteInfo);
  };

  const iconColor = isFavorite(id) ? '#01b4e4' : 'gray';
  const formattedDate = formatDate(movie.releaseDate);

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <Image style={styles.backdrop} source={{uri: movie.backdrop}} />
      <Image style={styles.poster} source={{uri: movie.poster}} />
      <BookmarkButton
        size={40}
        style={styles.bookmark}
        color={iconColor}
        onPress={handleOnPress}
      />
      <StarsButton rating={movie.rating} onPress={handleModalVisible} />
      <RatingModal
        visible={isModalVisible}
        onClose={handleCloseModal}
        id={id}
      />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{movie.title}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Icon
          style={styles.calendar}
          name="calendar"
          size={12}
          color="#ffffffdf"
        />
        <Text style={styles.release}>{formattedDate}</Text>
      </View>
      <View style={styles.genres}>
        <Icon name="film" size={12} color="#ffffffdf" />
        <View>
          <FlatList
            data={movie.genres}
            horizontal
            keyExtractor={(item: any, index) => `${item.id + index.toString()}`}
            renderItem={renderGenres}
            scrollEnabled={false}
          />
        </View>
      </View>
      <View style={styles.overviewContainer}>
        <Text style={styles.subtitle}>Overview</Text>
        <Text style={styles.overview}>{movie.overview}</Text>
      </View>
      <View style={styles.cast}>
        <Text style={styles.subtitle}>Cast</Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => `${item.id + index.toString()}`}
          data={movie.cast}
          renderItem={({item}) => (
            <Profile
              name={item.name}
              profile_path={item.profile_path}
              character={item.character}
            />
          )}
        />
      </View>
    </ScrollView>
  );
};

export default MovieDetails;
