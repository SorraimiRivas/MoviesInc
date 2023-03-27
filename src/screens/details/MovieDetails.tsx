import {View, Text, Image, FlatList, useWindowDimensions} from 'react-native';
import React, {FC, useEffect, useState} from 'react';
import {useRoute} from '@react-navigation/native';
import {TNavProps} from '../../types/NavigationProps';
import {BASE_URL} from '../../api';
import Config from 'react-native-config';
import axios from 'axios';
import {TMovie} from '../../types/MovieTypes';
import {formatDate, formattedMovie} from '../../utils';
import styles from './styles';

const MovieDetails: FC<TNavProps> = () => {
  const [movie, setMovie] = useState<TMovie>({});
  const {
    params: {id},
  } = useRoute();

  const api_key = Config.API_KEY;

  const getMovieById = async () => {
    try {
      const response = await axios.request({
        url: `${BASE_URL}movie/${id}`,
        params: {
          api_key,
          append_to_response: 'credits,similar',
        },
      });
      setMovie(formattedMovie(response.data));
    } catch (error) {
      console.log(error);
    }
  };

  console.log(JSON.stringify(movie, '', 2));

  useEffect(() => {
    getMovieById();
  }, []);

  return (
    <View style={styles.container}>
      <Image style={styles.backdrop} source={{uri: movie.backdrop}} />
      <Image style={styles.poster} source={{uri: movie.poster}} />
      <Text style={styles.title}>{movie.title}</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.release}>{formatDate(movie.releaseDate)}</Text>
        <View style={styles.separator} />
        <Text>{movie.genres.genre1}</Text>
        <View style={styles.separator} />
      </View>
      <View style={styles.overviewContainer}>
        <Text>Overview</Text>
        <Text>{movie.overview}</Text>
      </View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => `${item.id + index.toString()}`}
        data={movie.cast}
        renderItem={({item}) => (
          <View>
            <Text>{item.name}</Text>
            <Text>{item.character}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default MovieDetails;
