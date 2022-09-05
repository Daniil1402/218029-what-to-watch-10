import { NameSpace } from '../../const';
import { Films, IReviews, IFilm } from '../../types/film';
import {State} from '../../types/state';

export const loadFilm = (state: State): IFilm | null => state[NameSpace.Film].film;
export const getLoadedFilm = (state: State): boolean => state[NameSpace.Film].isFilmLoaded;
export const loadSimilarFilms = (state: State): Films => state[NameSpace.Film].similarFilms;
export const getLoadedSimilarFilms = (state: State): boolean => state[NameSpace.Film].isSimilarFilmsLoaded;
export const getReviews = (state: State): IReviews => state[NameSpace.Film].reviews;
export const getLoadedReviews = (state: State): boolean => state[NameSpace.Film].isReviewsLoaded;
export const getIsCommentAdded = (state: State): boolean => state[NameSpace.Film].isCommentAdded;
export const getIsCommentPending = (state: State): boolean => state[NameSpace.Film].isCommentPending;
