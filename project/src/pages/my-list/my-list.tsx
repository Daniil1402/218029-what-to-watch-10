import FilmList from '../../components/film-list/film-list';
import UserBlock from '../../components/user-block/user-block';
import Logo from '../../components/logo/logo';
import { useEffect } from 'react';
import { store } from '../../store';
import { fetchFavoriteFilmsAction } from '../../store/api-actions';
import { useAppSelector } from '../../hooks';
import { getFavoriteFilms, getFavoriteFilmsQuantity, getLoadedFavoriteFilms } from '../../store/films-data/selectors';
import Loader from '../../components/loader/loader';

function MyList () {

  const films = useAppSelector(getFavoriteFilms);
  const isfilmsLoaded = useAppSelector(getLoadedFavoriteFilms);
  const favoriteFilmsQuantity = useAppSelector(getFavoriteFilmsQuantity);

  useEffect(() => {
    store.dispatch(fetchFavoriteFilmsAction());
  }, []);

  if (isfilmsLoaded) {
    return (
      <Loader />
    );
  }

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo/>
        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">{favoriteFilmsQuantity}</span></h1>
        <UserBlock/>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <FilmList films={films}/>
      </section>

      <footer className="page-footer">
        <Logo className='logo__link--light'/>
        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
}

export default MyList;
