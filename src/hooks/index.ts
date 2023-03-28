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
        const data = response ? response.data : {};
        const formatted = formattedMovie(data);
        setMovie(formatted);
      } catch (error) {
        console.log(error);
      }
    };

    getMovieById();
  }, [id]);

  return movie;
};

export default useMovieById;
