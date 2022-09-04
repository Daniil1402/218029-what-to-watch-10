import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { FilmData } from '../../types/state';
import { fetchCommentsAction, fetchFilmAction, fetchSimilarFilmsAction } from '../api-actions';

const initialState: FilmData = {
  film: null,
  isFilmLoaded: false,
  similarFilms: [],
  isSimilarFilmsLoaded: false,
  reviews: [],
  isReviewsLoaded: false,
};

export const filmData = createSlice({
  name: NameSpace.Film,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFilmAction.pending, (state) => {
        state.isFilmLoaded = true;
      })
      .addCase(fetchFilmAction.fulfilled, (state, action) => {
        state.film = action.payload;
        state.isFilmLoaded = false;
      })
      .addCase(fetchSimilarFilmsAction.pending, (state) => {
        state.isSimilarFilmsLoaded = true;
      })
      .addCase(fetchSimilarFilmsAction.fulfilled, (state, action) => {
        state.similarFilms = action.payload;
        state.isSimilarFilmsLoaded = false;
      })
      .addCase(fetchCommentsAction.pending, (state) => {
        state.isReviewsLoaded = true;
      })
      .addCase(fetchCommentsAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
        state.isReviewsLoaded = false;
      });
  }
});
