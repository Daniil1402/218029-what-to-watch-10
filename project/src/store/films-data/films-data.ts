import { createSlice } from '@reduxjs/toolkit';
import { ALL_GENERES, NameSpace } from '../../const';
import { FilmsData } from '../../types/state';
import { setGenre } from '../action';
import { fetchFavoriteFilmsAction, fetchFilmsAction, fetchPromoFilmAction } from '../api-actions';

const initialState: FilmsData = {
  films: [],
  isDataLoaded: false,
  genre: ALL_GENERES,
  promoFilm: undefined,
  isPromoFilmLoaded: false,
  favoriteFilms: [],
  isfavoriteFilmsLoaded: false,
  favoriteFilmsQuantity: 0,
};

export const filmsData = createSlice({
  name: NameSpace.Films,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFilmsAction.pending, (state) => {
        state.isDataLoaded = true;
      })
      .addCase(fetchFilmsAction.fulfilled, (state, action) => {
        state.films = action.payload;
        state.isDataLoaded = false;
      })
      .addCase(setGenre, (state, action) => {
        state.genre = action.payload;
      })
      .addCase(fetchPromoFilmAction.pending, (state) => {
        state.isPromoFilmLoaded = true;
      })
      .addCase(fetchPromoFilmAction.fulfilled, (state, action) => {
        state.promoFilm = action.payload;
        state.isPromoFilmLoaded = false;
      })
      .addCase(fetchFavoriteFilmsAction.pending, (state) => {
        state.isfavoriteFilmsLoaded = true;
      })
      .addCase(fetchFavoriteFilmsAction.fulfilled, (state, action) => {
        state.favoriteFilms = action.payload;
        state.isfavoriteFilmsLoaded = false;
        state.favoriteFilmsQuantity = state.favoriteFilms.length;
      });
  }
});
