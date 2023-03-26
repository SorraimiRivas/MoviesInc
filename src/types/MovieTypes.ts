export interface IMovie {
  id: number;
  title: string;
  posterUrl: string;
  releaseDate: string;
}

export interface IMovieDetails {
  id: number;
  title: string;
  posterUrl: string;
  releaseDate: string;
  rating: number;
  details: string;
}
