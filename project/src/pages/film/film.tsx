import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import FilmList from '../../components/film-list/film-list';
import UserBlock from '../../components/user-block/user-block';
import Logo from '../../components/logo/logo';
import { store } from '../../store';
import { fetchCommentsAction, fetchFilmAction, fetchSimilarFilmsAction } from '../../store/api-actions';
import { useAppSelector } from '../../hooks';
import Loader from '../../components/loader/loader';
import { getLoadedFilm, getLoadedReviews, getLoadedSimilarFilms, getReviews, loadFilm, loadSimilarFilms } from '../../store/film-data/selectors';
import FilmButtons from '../../components/film-buttons/film-buttons';
import Tabs from '../../components/tabs/tabs';

function Film () {
  const { id } = useParams();

  const film = useAppSelector(loadFilm);
  const isFilmLoaded = useAppSelector(getLoadedFilm);
  const similarFilms = useAppSelector(loadSimilarFilms);
  const isSimilarFilmLoaded = useAppSelector(getLoadedSimilarFilms);
  const reviews = useAppSelector(getReviews);
  const isReviewsLoaded = useAppSelector(getLoadedReviews);

  useEffect(() => {
    if (id) {
      store.dispatch(fetchFilmAction(id));
      store.dispatch(fetchCommentsAction(id));
      store.dispatch(fetchSimilarFilmsAction(`/${id}/similar`));
    }
  }, [id]);

  if (!film || isFilmLoaded || isSimilarFilmLoaded || isReviewsLoaded) {
    return (
      <Loader />
    );
  }

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film?.backgroundImage} alt={film?.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <Logo/>
            <UserBlock/>
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film?.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film?.genre}</span>
                <span className="film-card__year">{film?.released}</span>
              </p>

              <FilmButtons film={film} isReview/>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={film?.posterImage} alt={film?.name} width="218" height="327" />
            </div>
            <Tabs film={film} reviews={reviews}/>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <FilmList films={similarFilms} quantityShow={4} />
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

export default Film;
