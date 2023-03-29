import {useState, useEffect} from 'react';
import axios from 'axios';
import Config from 'react-native-config';
import {TMovie} from '../types/MovieTypes';
import {formattedMovie} from '../utils';
import {BASE_URL} from '../api';
import {Alert} from 'react-native';

const api_key = Config.API_KEY;
export const useMovieById = (id: number) => {
  const [movie, setMovie] = useState<TMovie>({});

  useEffect(() => {
    const getMovieById = async () => {
      try {
        const response = await axios.request({
          method: 'get',
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

export const usePostRating = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  const [sessionId, setSessionId] = useState<string>('');

  if (sessionId == '') {
    const getSessionId = async () => {
      try {
        const response = await axios.request({
          method: 'get',
          url: `${BASE_URL}authentication/guest_session/new`,
          params: {
            api_key,
          },
        });
        setSessionId(response.data.guest_session_id);
      } catch (err) {
        console.log('Error at sessionId', err);
      }
    };
    getSessionId();
  }
  const postRatingRequest = async (id: number, rating: {}, sessionId: any) => {
    try {
      console.log(rating);
      await axios.request({
        method: 'post',
        url: `${BASE_URL}movie/${id}/rating`,
        params: {
          guest_session_id: sessionId,
          api_key,
        },
        data: {value: rating},
      });
      Alert.alert('Rated');
    } catch (err: any) {
      Alert.alert('Oops! Something went wrong... Please try again later');
    }
  };

  return {error, loading, postRatingRequest, sessionId};
};
