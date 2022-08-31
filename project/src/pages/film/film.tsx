import React, { useEffect } from 'react';
import { generatePath, Link, useParams } from 'react-router-dom';
import { AppRoute, AuthorizationStatus, RatingLevel } from '../../const';
import FilmList from '../../components/film-list/film-list';
import UserBlock from '../../components/user-block/user-block';
import Logo from '../../components/logo/logo';
import { store } from '../../store';
import { fetchFilmAction, fetchSimilarFilmsAction } from '../../store/api-actions';
import { useAppSelector } from '../../hooks';
import Loader from '../../components/loader/loader';
import { getLoadedFilm, getLoadedSimilarFilms, loadFilm, loadSimilarFilms } from '../../store/film-data/selectors';
import { getAuthorizationStatus } from '../../store/user-process/selectors';

function Film () {
  const { id } = useParams();

  const film = useAppSelector(loadFilm);
  const isFilmLoaded = useAppSelector(getLoadedFilm);
  const similarFilms = useAppSelector(loadSimilarFilms);
  const isSimilarFilmLoaded = useAppSelector(getLoadedSimilarFilms);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  const generateRatingLevel = (rating: number) => {
    if (rating < 3) {
      return RatingLevel.Bad;
    }
    if (rating < 5) {
      return RatingLevel.Normal;
    }
    if (rating < 8) {
      return RatingLevel.Good;
    }
    if (rating < 10) {
      return RatingLevel.VeryGood;
    }
    return RatingLevel.Awesome;
  };

  useEffect(() => {
    if (id) {
      store.dispatch(fetchFilmAction(id));
      store.dispatch(fetchSimilarFilmsAction(`/${id}/similar`));
    }
  }, [id]);

  if (!film || isFilmLoaded || isSimilarFilmLoaded) {
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

              <div className="film-card__buttons">
                <Link to={generatePath(AppRoute.Player, { id: film?.id.toString()})} className="btn btn--play film-card__button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </Link>
                <Link to={AppRoute.MyList} className="btn btn--list film-card__button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </Link>
                {authorizationStatus === AuthorizationStatus.Auth
                &&
                  <Link to={generatePath(AppRoute.AddReview, { id: film?.id.toString()})} className="btn film-card__button">
                    Add review
                  </Link>}
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={film?.posterImage} alt={film?.name} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <nav className="film-nav film-card__nav">
                <ul className="film-nav__list">
                  <li className="film-nav__item film-nav__item--active">
                    <a href="#" className="film-nav__link">Overview</a>
                  </li>
                  <li className="film-nav__item">
                    <a href="#" className="film-nav__link">Details</a>
                  </li>
                  <li className="film-nav__item">
                    <a href="#" className="film-nav__link">Reviews</a>
                  </li>
                </ul>
              </nav>

              <div className="film-rating">
                <div className="film-rating__score">{film?.rating}</div>
                <p className="film-rating__meta">
                  <span className="film-rating__level">{generateRatingLevel(film?.rating)}</span>
                  <span className="film-rating__count">{film?.scoresCount}</span>
                </p>
              </div>

              <div className="film-card__text">
                <p>{film?.description}</p>

                <p className="film-card__director"><strong>Director: {film?.director}</strong></p>

                <p className="film-card__starring">
                  <strong>
                    Starring:
                    {' '}
                    {film?.starring.slice(0, 4).map((item, index) => <React.Fragment key={item}>{(index ? ', ' : '') + item}</React.Fragment>)}
                    {' '}
                    and other
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <div className="catalog__films-list">
            <FilmList films={similarFilms}/>
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

export default Film;
