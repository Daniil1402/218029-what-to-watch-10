import {createAction} from '@reduxjs/toolkit';
import { Films, IFilm } from '../types/film';
import {AppRoute, AuthorizationStatus} from '../const';

export const setGenre = createAction('films/setGenre', (value) => ({payload: value}));

export const loadPromoFilm = createAction<IFilm>('data/loadPromoFilm');

export const loadFilms = createAction<Films>('data/loadFilms');

export const setDataLoadedStatus = createAction<boolean>('data/setDataLoadedStatus');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setError = createAction<string | null>('films/setError');

export const redirectToRoute = createAction<AppRoute>('films/redirectToRoute');
