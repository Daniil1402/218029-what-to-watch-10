import { createSelector } from '@reduxjs/toolkit';
import {ALL_GENERES, NameSpace} from '../../const';
import { Films, IFilm } from '../../types/film';
import {State} from '../../types/state';

export const getFilms = (state: State): Films => state[NameSpace.Films].films;
export const getLoadedDataStatus = (state: State): boolean => state[NameSpace.Films].isDataLoaded;
export const getGenre = (state: State): string => state[NameSpace.Films].genre;
export const loadPromoFilm = (state: State): IFilm | undefined => state[NameSpace.Films].promoFilm;
export const getLoadedPromoFilm = (state: State): boolean => state[NameSpace.Films].isPromoFilmLoaded;

export const filterFilms = createSelector(
  [getFilms, getGenre],
  (films, genre) => films.filter((film) => film.genre === genre || genre === ALL_GENERES)
);
