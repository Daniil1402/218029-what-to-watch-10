import {createAction} from '@reduxjs/toolkit';

export const setGenre = createAction('films/setGenre', (value) => ({payload: value}));

export const setFilms = createAction('films/setFilms', (value) => ({payload: value}));
