import React, {FC, useEffect, useState} from 'react';
import {
  Text,
  StatusBar,
  Button,
  SafeAreaView,
  StyleSheet,
  FlatList,
} from 'react-native';
import Config from 'react-native-config';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import {TProps} from '../../types/NavigationProps';
import {IMovie} from '../../types/MovieTypes';
import useMovieList from '../../hooks';
import {BASE_URL} from '../../api';
import Card from '../../components/cards/Card';

const HomeScreen: FC<TProps> = () => {
  const navigation = useNavigation();
  const [movies, setMovies] = useState<IMovie[]>([]);

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
      setMovies([...response.data.results]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  // console.log('data', JSON.stringify(movies[0], '  ', 1));

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'teal'} />
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={movies}
        keyExtractor={movie => movie.id.toString()}
        renderItem={({item}) => (
          <Card
            onPress={() => navigation.navigate('Details', {id: item.id})}
            title={item.title}
          />
        )}
      />
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default HomeScreen;
