import { NameSpace } from '../../const';
import { Films, IFilm } from '../../types/film';
import {State} from '../../types/state';

export const loadFilm = (state: State): IFilm | null => state[NameSpace.Film].film;
export const getLoadedFilm = (state: State): boolean => state[NameSpace.Film].isFilmLoaded;
export const loadSimilarFilms = (state: State): Films => state[NameSpace.Film].similarFilms;
export const getLoadedSimilarFilms = (state: State): boolean => state[NameSpace.Film].isSimilarFilmsLoaded;
