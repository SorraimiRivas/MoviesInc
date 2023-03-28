import {View, Text, Image, FlatList} from 'react-native';
import React, {FC} from 'react';
import {useRoute} from '@react-navigation/native';
import {TNavProps} from '../../types/NavigationProps';
import {formatDate} from '../../utils';
import styles from './styles';
import Profile from '../../components/cards/cast/Profile';
import {ScrollView} from 'react-native-gesture-handler';
import useMovieById from '../../hooks';
import {Star} from 'react-native-feather';

const MovieDetails: FC<TNavProps> = () => {
  const {
    params: {id},
  } = useRoute();

  const movie = useMovieById(id);

  const renderGenres = ({item}) => {
    return <Text style={{marginHorizontal: 4, fontSize: 12}}>{item.name}</Text>;
  };

  return (
    <ScrollView style={styles.container}>
      <Image style={styles.backdrop} source={{uri: movie.backdrop}} />
      <Image style={styles.poster} source={{uri: movie.poster}} />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{movie.title}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.release}>{formatDate(movie.releaseDate)}</Text>
      </View>
      <View style={styles.genres}>
        <FlatList
          data={movie.genres}
          horizontal
          keyExtractor={(item, index) => `${item.id + index.toString()}`}
          renderItem={renderGenres}
          scrollEnabled={false}
        />
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
