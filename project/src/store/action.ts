import {createAction} from '@reduxjs/toolkit';
import {AppRoute} from '../const';

export const setGenre = createAction('films/setGenre', (value) => ({payload: value}));

export const setError = createAction<string | null>('films/setError');

export const redirectToRoute = createAction<AppRoute | string>('films/redirectToRoute');
