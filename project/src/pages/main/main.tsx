import { Films, IFilm } from '../../types/film';
import FilmList from '../../components/film-list/film-list';
import GenreList from '../../components/genre-list/genre-list';
import { useAppSelector } from '../../hooks';
import UserBlock from '../../components/user-block/user-block';
import Logo from '../../components/logo/logo';
import { filterFilms } from '../../store/films-data/selectors';
import FilmButtons from '../../components/film-buttons/film-buttons';
import { store } from '../../store';
import { fetchFavoriteFilmsAction } from '../../store/api-actions';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { AuthorizationStatus } from '../../const';
import { useEffect } from 'react';

type Props = {
  promoFilm?: IFilm;
  films: Films;
}

function Main ({promoFilm, films}: Props) {
  const filteredFilms = useAppSelector(filterFilms);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  useEffect(() => {
    if (authorizationStatus === AuthorizationStatus.Auth) {store.dispatch(fetchFavoriteFilmsAction());}
  }, [promoFilm, authorizationStatus]);

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={promoFilm?.backgroundImage} alt={promoFilm?.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <Logo/>
          <UserBlock/>
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={promoFilm?.posterImage} alt={promoFilm?.name} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{promoFilm?.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{promoFilm?.genre}</span>
                <span className="film-card__year">{promoFilm?.released}</span>
              </p>
              <FilmButtons film={promoFilm} />
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenreList films={films}/>

          <FilmList films={filteredFilms}/>

          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>

        <footer className="page-footer">
          <Logo className='logo__link--light'/>
          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Main;
