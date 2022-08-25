import {createReducer} from '@reduxjs/toolkit';
import { ALL_GENERES } from '../const';
import { films } from '../mocks/films';
import { IFilm } from '../types/film';
import { setGenre, setFilms } from './action';

type InitialState = {
  genre: string;
  films: IFilm[];
}

const initialState: InitialState = {
  genre: ALL_GENERES,
  films: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setGenre, (state, action) => {
      state.genre = action.payload;
      state.films = films.filter((film) => film.genre === state.genre || state.genre === ALL_GENERES);
    })
    .addCase(setFilms, (state, action) => {
      state.films = action.payload;
    });
});

export {reducer};
