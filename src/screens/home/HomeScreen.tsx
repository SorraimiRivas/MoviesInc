import React, {FC, useEffect, useState} from 'react';
import {StatusBar, SafeAreaView, StyleSheet, FlatList} from 'react-native';
import Config from 'react-native-config';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import {TNavProps} from '../../types/NavigationProps';
import {TMovie} from '../../types/MovieTypes';
import {BACKDROP_URL, BASE_URL, POSTER_URL} from '../../api';
import Card from '../../components/cards/movie/Card';
import styles from '../../theme';

const HomeScreen: FC<TNavProps> = () => {
  const navigation = useNavigation();
  const [movies, setMovies] = useState<TMovie[]>([]);

  const api_key = Config.API_KEY;

  const getMovies = async () => {
    try {
      const response = await axios.request({
        url: `${BASE_URL}movie/now_playing`,
        params: {
          api_key,
          page: 1,
        },
      });
      const formattedMovies = response.data.results.map((movie: any) => {
        return {
          id: movie.id,
          title: movie.title,
          poster: `${POSTER_URL}${movie.poster_path}`,
          backdrop: `${BACKDROP_URL}${movie.backdrop_path}`,
          releaseDate: movie.release_date,
          rating: movie.vote_average,
          overview: movie.overview,
        };
      });
      setMovies(formattedMovies);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'auto'} />
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={movies}
        keyExtractor={movie => movie.id.toString()}
        renderItem={({item}) => (
          <Card
            onPress={() => navigation.navigate('Details', {id: item.id})}
            title={item.title}
            image={item.poster}
            releaseDate={item.releaseDate}
            rating={item.rating}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
