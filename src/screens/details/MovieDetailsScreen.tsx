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

const MovieDetails: FC = () => {
  const [isModalVisible, setIsModalVisble] = useState<boolean>(false);

  const {
    params: {id},
  } = useRoute();

  const movie = useMovieById(id);

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
    setIsModalVisble(true);
  };

  const handleCloseModal = () => {
    setIsModalVisble(false);
  };

  const formattedDate = formatDate(movie.releaseDate);
  return (
    <ScrollView style={styles.container}>
      <Image style={styles.backdrop} source={{uri: movie.backdrop}} />
      <Image style={styles.poster} source={{uri: movie.poster}} />
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
      <StarsButton rating={movie.rating} onPress={handleModalVisible} />
      <RatingModal
        visible={isModalVisible}
        onClose={handleCloseModal}
        id={id}
      />
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
