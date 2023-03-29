import {useDispatch, useSelector} from 'react-redux';
import {addFavorite, removeFavorite} from '../redux/slices/favoritesSlice';
import {TCardProps} from '../types/CardTypes';

export const useFavorites = () => {
  const favorites = useSelector(state => state.favorites);
  const dispatch = useDispatch();

  const isFavorite = (movieId: number) => {
    return favorites.favorites.some(
      (favorites: TCardProps) => favorites.id === movieId,
    );
  };

  const addFavoriteMovie = (movie: TCardProps) => {
    isFavorite(movie.id)
      ? dispatch(removeFavorite(movie.id))
      : dispatch(addFavorite(movie));
  };

  return {
    favorites,
    isFavorite,
    addFavoriteMovie,
  };
};
