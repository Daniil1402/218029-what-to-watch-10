import {createSlice} from '@reduxjs/toolkit';
import {ALL_GENERES, NameSpace} from '../../const';
import {FilmsData} from '../../types/state';
import { setGenre } from '../action';
import {fetchFilmsAction, fetchPromoFilmAction} from '../api-actions';

const initialState: FilmsData = {
  films: [],
  isDataLoaded: false,
  genre: ALL_GENERES,
  promoFilm: undefined,
};

export const filmsData = createSlice({
  name: NameSpace.Data,
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
      .addCase(fetchPromoFilmAction.pending, (state, action) => {
        state.promoFilm = action.payload;
      })
      .addCase(fetchPromoFilmAction.fulfilled, (state, action) => {
        state.promoFilm = action.payload;
      });
  }
});
