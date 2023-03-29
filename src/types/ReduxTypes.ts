import {TMovie} from './MovieTypes';

export type TGuestSession = {
  success: boolean;
  sessionId: string;
  expiresAt: string;
};

export type FavoritesState = {
  favorites: TMovie[];
};
