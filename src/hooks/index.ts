import {useState, useEffect} from 'react';
import axios from 'axios';
import Config from 'react-native-config';
import {TMovie} from '../types/MovieTypes';
import {formattedMovie} from '../utils';
import {BASE_URL} from '../api';

const useMovieById = (id: number) => {
  const [movie, setMovie] = useState<TMovie>({});
  const api_key = Config.API_KEY;

  useEffect(() => {
    const getMovieById = async () => {
      try {
        const response = await axios.request({
          url: `${BASE_URL}movie/${id}`,
          params: {
            api_key,
            append_to_response: 'credits,similar',
          },
        });
        // console.log(JSON.stringify(response.data, '', 2));
        const data = response ? response.data : {};
        // console.log(data);
        // console.log('data');
        const formatted = formattedMovie(data);
        // console.log(formatted);
        // console.log('formatted');
        setMovie(formatted);
      } catch (error) {
        console.log(error);
      }
    };

    getMovieById();
  }, []);
  // console.log(movie);
  // console.log('LOGGIN: ', JSON.stringify(movie, '', 2));
  return movie;
};

export default useMovieById;
