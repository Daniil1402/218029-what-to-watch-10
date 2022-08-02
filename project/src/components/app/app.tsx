import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import Player from '../../pages/player/player';
import AddReview from '../../pages/add-review/add-review';
import E404 from '../../pages/E404/E404';
import Film from '../../pages/film/film';
import Main from '../../pages/main/main';
import MyList from '../../pages/my-list/my-list';
import SignIn from '../../pages/sign-in/sign-in';
import PrivateRoute from '../private-route/private-route';

type PromoFilm = {
  title: string;
  genre: string;
  date: number;
};

function App({ title, genre, date }: PromoFilm) {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<Main title={title} genre={genre} date={date} />}
        />
        <Route
          path={AppRoute.SignIn}
          element={<SignIn />}
        />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
              <MyList />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Film}
          element={<Film />}
        />
        <Route
          path={AppRoute.AddReview}
          element={<AddReview />}
        />
        <Route
          path={AppRoute.Player}
          element={<Player/>}
        />
        <Route
          path="*"
          element={<E404 />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
