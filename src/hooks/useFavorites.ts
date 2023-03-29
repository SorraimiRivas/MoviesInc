import {useDispatch, useSelector} from 'react-redux';
import {addFavorite, removeFavorite} from '../redux/slices/favoritesSlice';
import {TCardProps} from '../types/CardTypes';
import { TMovie } from '../types/MovieTypes';

export const useFavorites = () => {
  const favorites = useSelector(state => state.favorites);
  const dispatch = useDispatch();

  const isFavorite = (movieId: number) => {
    return favorites.favorites.some(
      (favorites: TCardProps) => favorites.id === movieId,
    );
  };

  // Takes in a movie object and adds or removes from favorite array depending on validation
  const handleFavorites = (movie: TMovie) => {
    isFavorite(movie.id)
      ? dispatch(removeFavorite(movie.id))
      : dispatch(addFavorite(movie));
  };

  return {
    favorites,
    isFavorite,
    handleFavorites,
  };
};
