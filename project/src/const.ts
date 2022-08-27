export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  AddReview = '/films/:id/review',
  Player = '/player/:id',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const ALL_GENERES = 'All genres';

export const TIMEOUT_SHOW_ERROR = 5000;

export enum APIRoute {
  Promo = '/promo',
  Films = '/films',
  Film = '/films/{filmId}',
  Similar = '/films/{filmId}/similar',
  Login = '/login',
  Logout = '/logout',
}
