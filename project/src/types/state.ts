import { store } from '../store/index.js';
import {AuthorizationStatus} from '../const';
import { Films, IFilm } from './film';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
};

export type FilmsData = {
  films: Films;
  isDataLoaded: boolean;
  genre: string;
  promoFilm: IFilm | undefined; 
};

export type ErrorProcess = {
  error: string | null;
}
