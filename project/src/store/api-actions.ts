import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state';
import {Films, IFilm, IReviews} from '../types/film';
import { Comment } from '../types/comment';
import {redirectToRoute} from './action';
import {APIRoute, AppRoute} from '../const';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { dropToken, saveToken } from '../services/token';

export const fetchPromoFilmAction = createAsyncThunk<IFilm, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchPromoFilm',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<IFilm>(APIRoute.Promo);
    return data;
  },
);

export const fetchFilmsAction = createAsyncThunk<Films, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchFilms',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Films>(APIRoute.Films);
    return data;
  },
);

export const fetchFavoriteFilmsAction = createAsyncThunk<Films, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchFavoriteFilms',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Films>(APIRoute.Favorite);
    return data;
  },
);

export const setFavoriteFilmAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/setFavoriteFilm',
  async (path: string, {dispatch, extra: api}) => {
    await api.post<Comment>(APIRoute.Favorite + path);
    dispatch(fetchFavoriteFilmsAction());
  },
);

export const fetchFilmAction = createAsyncThunk<IFilm, string, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchFilm',
  async (id: string, {dispatch, extra: api}) => {
    const {data} = await api.get<IFilm>(APIRoute.Film + id);
    return data;
  },
);

export const fetchSimilarFilmsAction = createAsyncThunk<Films, string, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchSimilarFilms',
  async (path: string, {dispatch, extra: api}) => {
    const {data} = await api.get<Films>(APIRoute.Films + path);
    return data;
  },
);

export const fetchCommentsAction = createAsyncThunk<IReviews, string, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'film/fetchComments',
  async (id: string, {dispatch, extra: api}) => {
    const {data} = await api.get<IReviews>(APIRoute.Comments + id);
    return data;
  },
);

export const addCommentAction = createAsyncThunk<void, Comment, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'film/addComment',
  async ({id, comment, rating}, {dispatch, extra: api}) => {
    await api.post<Comment>(APIRoute.Comments + id, {comment, rating});
    // dispatch(redirectToRoute('previous'));
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    await api.get(APIRoute.Login);
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(fetchFavoriteFilmsAction());
    dispatch(redirectToRoute(AppRoute.Main));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(redirectToRoute(AppRoute.Main));
  },
);
