export type TMovie = {
  title: string;
  id: number;
  backdrop?: string;
  releaseDate: string;
  rating: number;
  overview?: string;
  cast?: [
    {
      name: string;
      profile_path: string;
      character: string;
      id: number;
    },
  ];
  genres?: [
    {
      name: string;
    },
  ];
  image?: string;
};
