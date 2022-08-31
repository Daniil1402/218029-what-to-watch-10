import { Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import Player from '../../pages/player/player';
import AddReview from '../../pages/add-review/add-review';
import E404 from '../../pages/E404/E404';
import Film from '../../pages/film/film';
import Main from '../../pages/main/main';
import MyList from '../../pages/my-list/my-list';
import SignIn from '../../pages/sign-in/sign-in';
import PrivateRoute from '../private-route/private-route';
import Loader from '../loader/loader';
import { useAppSelector } from '../../hooks';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { getFilms, getLoadedDataStatus, getLoadedPromoFilm, loadPromoFilm } from '../../store/films-data/selectors';

export const isCheckedAuth = (authorizationStatus: AuthorizationStatus): boolean =>
  authorizationStatus === AuthorizationStatus.Unknown;

function App() {
  const films = useAppSelector(getFilms);
  const promoFilm = useAppSelector(loadPromoFilm);
  const isDataLoaded = useAppSelector(getLoadedDataStatus);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isPromoFilmLoaded = useAppSelector(getLoadedPromoFilm);

  if (isCheckedAuth(authorizationStatus) || isDataLoaded || isPromoFilmLoaded) {
    return (
      <Loader />
    );
  }

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<Main promoFilm={promoFilm} films={films} />}
        />
        <Route
          path={AppRoute.SignIn}
          element={<SignIn />}
        />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute
              authorizationStatus={authorizationStatus}
            >
              <MyList films={films} />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Film}
          element={<Film films={films} />}
        />
        <Route
          path={AppRoute.AddReview}
          element={<AddReview films={films} />}
        />
        <Route
          path={AppRoute.Player}
          element={<Player films={films} />}
        />
        <Route
          path="*"
          element={<E404 />}
        />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
