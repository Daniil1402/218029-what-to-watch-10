import { store } from '../store/index.js';
import {AuthorizationStatus} from '../const';
import { Films, IReviews, IFilm } from './film';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
};

export type FilmsData = {
  films: Films;
  isDataLoaded: boolean;
  genre: string;
  promoFilm: IFilm | undefined;
  isPromoFilmLoaded: boolean;
  favoriteFilms: Films;
  isfavoriteFilmsLoaded: boolean;
  favoriteFilmsQuantity: number;
};

export type FilmData = {
  film: IFilm | null;
  isFilmLoaded: boolean;
  similarFilms: Films;
  isSimilarFilmsLoaded: boolean;
  reviews: IReviews;
  isReviewsLoaded: boolean;
  isCommentAdded: boolean,
  isCommentPending: boolean,
  isCommentError: boolean,
};

export type ErrorProcess = {
  error: string | null;
}
