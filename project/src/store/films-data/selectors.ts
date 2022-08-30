import { createSelector } from '@reduxjs/toolkit';
import {ALL_GENERES, NameSpace} from '../../const';
import { Films, IFilm } from '../../types/film';
import {State} from '../../types/state';

export const getFilms = (state: State): Films => state[NameSpace.Data].films;
export const loadPromoFilm = (state: State): IFilm => state[NameSpace.Data].promoFilm;
export const getLoadedDataStatus = (state: State): boolean => state[NameSpace.Data].isDataLoaded;
export const getGenre = (state: State): string => state[NameSpace.Data].genre;

export const filterFilms = createSelector(
  [getFilms, getGenre],
  (films, genre) => films.filter((film) => film.genre === genre || genre === ALL_GENERES)
);