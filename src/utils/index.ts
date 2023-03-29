import {BACKDROP_URL, POSTER_URL, PROFILE_URL} from '../api';

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const options = {month: 'short', day: 'numeric', year: 'numeric'};
  return date.toLocaleDateString(undefined, options);
};

export const formatMovie = (movie: any) => {
  return {
    id: movie.id,
    title: movie.title,
    poster: `${POSTER_URL}${movie.poster_path}`,
    backdrop: `${BACKDROP_URL}${movie.backdrop_path}`,
    releaseDate: movie.release_date,
    rating: movie.vote_average,
    overview: movie.overview,
    cast: movie.credits.cast,
    genres: movie.genres,
  };
};

export const roundNumber = (num: number) => {
  return Math.ceil(num * 10) / 10;
};

export const sortMoviesByTitle = (objects: any) => {
  return objects.sort((a, b) => a.title.localeCompare(b.title));
};
