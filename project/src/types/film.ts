export type IReviews = {
  score: string;
  level: string;
  list: string[];
};

export type IFilm = {
  id: string;
  title: string;
  genre: string;
  date: number;
  cover: string;
  bigPoster: string;
  poster: string;
  description: string;
  src: string;
  director: string;
  starring: string[];
  reviews: IReviews;
};