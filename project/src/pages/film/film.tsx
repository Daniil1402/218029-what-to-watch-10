import React from 'react';
import { generatePath, Link, useParams } from 'react-router-dom';
import { IFilm } from '../../types/film';
import { AppRoute } from '../../const';
import FilmList from '../../components/film-list/film-list';
import UserBlock from '../../components/user-block/user-block';

type Props = {
  films: IFilm[];
}

function Film ({films}:Props) {
  const { id } = useParams();

  const film: IFilm | undefined = films.find(
    (item) => item.id.toString() === id
  );

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film?.backgroundImage} alt={film?.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <div className="logo">
              <Link to={AppRoute.Main} className='logo__link'>
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </Link>
            </div>

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
                <Link to={generatePath(AppRoute.AddReview, { id: film?.id.toString()})} className="btn film-card__button">
                  Add review
                </Link>
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
                  {/* <span className="film-rating__level">{film?.reviews.level}</span>
                  <span className="film-rating__count">{film?.reviews.list.length} ratings</span> */}
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
            <FilmList films={films}/>
          </div>
        </section>

        <footer className="page-footer">
          <div className="logo">
            <Link to={AppRoute.Main} className='logo__link logo__link--light'>
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Film;
