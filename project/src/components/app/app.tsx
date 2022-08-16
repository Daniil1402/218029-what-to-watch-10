import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { IFilm } from '../../types/film';
import Player from '../../pages/player/player';
import AddReview from '../../pages/add-review/add-review';
import E404 from '../../pages/E404/E404';
import Film from '../../pages/film/film';
import Main from '../../pages/main/main';
import MyList from '../../pages/my-list/my-list';
import SignIn from '../../pages/sign-in/sign-in';
import PrivateRoute from '../private-route/private-route';


type PromoFilm = {
  id: string;
  title: string;
  genre: string;
  date: number;
};

type Props = {
  promoFilm: PromoFilm;
  films: IFilm[];
}

function App({ promoFilm, films }: Props) {
  return (
    <BrowserRouter>
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
              authorizationStatus={AuthorizationStatus.NoAuth}
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
    </BrowserRouter>
  );
}

export default App;
