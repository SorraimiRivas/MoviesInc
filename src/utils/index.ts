import {BACKDROP_URL, POSTER_URL} from '../api';

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const options = {month: 'short', day: 'numeric', year: 'numeric'};
  return date.toLocaleDateString(undefined, options);
};

const formatDateString = (dateString: string): string => {
  const formattedDate = formatDate(dateString);
  return formattedDate;
};

export const formattedMovie = (movie: any) => {
  const genres = movie.genres.reduce(
    (obj: {[key: string]: string}, genre: string, index: number) => {
      obj[`genre${index + 1}`] = genre.name;
      return obj;
    },
    {},
  );

  return {
    id: movie.id,
    title: movie.title,
    poster: `${POSTER_URL}${movie.poster_path}`,
    backdrop: `${BACKDROP_URL}${movie.backdrop_path}`,
    releaseDate: movie.release_date,
    rating: movie.vote_average,
    overview: movie.overview,
    cast: movie.credits.cast,
    genres,
  };
};
