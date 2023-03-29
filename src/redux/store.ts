import {configureStore} from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import guestSessionReducer from './slices/guestUserSlice';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['guestSession'],
};

const persistedReducer = persistReducer(persistConfig, guestSessionReducer);

export const store = configureStore({
  reducer: {
    guestSession: persistedReducer,
  },
});

export const persistor = persistStore(store);
