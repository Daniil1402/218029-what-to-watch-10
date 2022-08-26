import {createReducer} from '@reduxjs/toolkit';
import { ALL_GENERES, AuthorizationStatus } from '../const';
import { Films, IFilm } from '../types/film';
import { setGenre, requireAuthorization, loadFilms, setError, setDataLoadedStatus, loadPromoFilm } from './action';

type InitialState = {
  promoFilm: IFilm | undefined;
  genre: string;
  films: Films;
  error: string | null;
  authorizationStatus: AuthorizationStatus;
  isDataLoaded: boolean;
  filteredFilms: Films;
}

const initialState: InitialState = {
  promoFilm: undefined,
  genre: ALL_GENERES,
  films: [],
  error: null,
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoaded: false,
  filteredFilms: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setGenre, (state, action) => {
      state.genre = action.payload;
      state.filteredFilms = state.films.filter((film) => film.genre === state.genre || state.genre === ALL_GENERES);
    })
    .addCase(loadPromoFilm, (state, action) => {
      state.promoFilm = action.payload;
    })
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload;
      state.filteredFilms = action.payload;
    })
    .addCase(setDataLoadedStatus, (state, action) => {
      state.isDataLoaded = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

export {reducer};
