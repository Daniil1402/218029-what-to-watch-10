import React from 'react';
import { memo } from 'react';
import { RatingLevel } from '../../const';
import { IFilm } from '../../types/film';

type Props = {
  film: IFilm;
}

function FilmOverview ({ film }: Props) {
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
  return (
    <>
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
    </>
  );
}

export default memo(FilmOverview);
