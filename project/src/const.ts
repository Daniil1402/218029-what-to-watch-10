export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  AddReview = '/films/:id/review',
  Player = '/player/:id',
  NOTFOUND = '/404',
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
  Film = '/films/',
  Login = '/login',
  Logout = '/logout',
  Comments = '/comments/',
  Favorite = '/favorite',
}

export enum NameSpace {
  Films = 'FILMS',
  Film = 'FILM',
  User = 'USER',
  Error = 'ERROR',
}

export enum RatingLevel {
  Awesome = 'Awesome',
  VeryGood = 'Very good',
  Good = 'Good',
  Normal = 'Normal',
  Bad = 'Bad',
}
