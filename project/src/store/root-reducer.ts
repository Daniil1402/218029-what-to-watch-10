import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../const';
import { errorProcess } from './error-process/error-process';
import { filmData } from './film-data/film-data';
import { filmsData } from './films-data/films-data';
import {userProcess} from './user-process/user-process';

export const rootReducer = combineReducers({
  [NameSpace.Films]: filmsData.reducer,
  [NameSpace.Film]: filmData.reducer,
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.Error]: errorProcess.reducer,
});
