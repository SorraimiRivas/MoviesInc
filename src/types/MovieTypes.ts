export interface IMovie {
  title: string;
  id: number;
  poster: string;
  releaseDate: string;
  rating: string;
  overview: string;
}

export interface IMovieDetails {
  id: number;
  title: string;
  poster: string;
  releaseDate: string;
  rating: number;
  overview: string;
}
