import { memo, useState } from 'react';
import { Link, generatePath } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setFavoriteFilmAction } from '../../store/api-actions';
import { getFavoriteFilmsQuantity } from '../../store/films-data/selectors';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { IFilm } from '../../types/film';

type Props = {
  film?: IFilm;
  isReview?: boolean;
}

function FilmButtons ({ film, isReview }: Props) {
  const [isAddedToList, setIsAddedToList] = useState(film?.isFavorite);
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const favoriteFilmsQuantity = useAppSelector(getFavoriteFilmsQuantity);

  const stringId = film?.id.toString();

  const toggleButton = () => {
    if (film) {
      dispatch(setFavoriteFilmAction(`/${film?.id}/${+!isAddedToList}`));
      setIsAddedToList(!isAddedToList);
    }
  };

  return (
    <div className="film-card__buttons">
      <Link to={generatePath(AppRoute.Player, { id: stringId})} className="btn btn--play film-card__button">
        <svg viewBox="0 0 19 19" width="19" height="19">
          <use xlinkHref="#play-s"></use>
        </svg>
        <span>Play</span>
      </Link>
      {authorizationStatus === AuthorizationStatus.Auth
        ? (
          <button className="btn btn--list film-card__button" type="button" onClick={() => toggleButton()}>
            {isAddedToList ?
              <svg viewBox="0 0 18 14" width="18" height="14">
                <use xlinkHref="#in-list"></use>
              </svg> :
              <svg viewBox="0 0 19 20" width="19" height="20">
                <use xlinkHref="#add"></use>
              </svg>}
            <span>My list</span>
            {authorizationStatus === AuthorizationStatus.Auth &&
              <span className="film-card__count">{favoriteFilmsQuantity}</span>}
          </button>
        ) : (
          <Link to={AppRoute.SignIn} className="btn btn--list film-card__button">
            <svg viewBox="0 0 19 20" width="19" height="20">
              <use xlinkHref="#add"></use>
            </svg>
            <span>My list</span>
          </Link>
        )}
      {authorizationStatus === AuthorizationStatus.Auth && isReview &&
        <Link to={generatePath(AppRoute.AddReview, { id: stringId})} className="btn film-card__button">
          Add review
        </Link>}
    </div>
  );
}

export default memo(FilmButtons);
