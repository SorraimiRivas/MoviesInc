import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {FavoritesState} from '../../types/ReduxTypes';
import {TCardProps} from '../../types/CardTypes';

const initialState: FavoritesState = {
  favorites: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite(state, action: PayloadAction<TCardProps>) {
      console.log('Added');
      state.favorites.push(action.payload);
    },
    removeFavorite(state, action: PayloadAction<number>) {
      console.log('Removed');
      state.favorites = state.favorites.filter(
        favorite => favorite.id !== action.payload,
      );
    },
  },
});

export const {addFavorite, removeFavorite} = favoritesSlice.actions;
export default favoritesSlice.reducer;
