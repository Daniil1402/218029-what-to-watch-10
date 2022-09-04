import React, { memo } from 'react';
import { IFilm } from '../../types/film';

type Props = {
  film: IFilm;
}

function FilmDetails ({ film }: Props) {
  const convertTime = (time: number) => {
    if (time < 60) {
      return `${time}m`;
    } else {
      const hours = Math.floor(time / 60);
      const minutes = time - (hours * 60);
      return `${hours}h ${minutes}m`;
    }
  };
  return (
    <div className="film-card__text film-card__row">
      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Director</strong>
          <span className="film-card__details-value">{film.director}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Starring</strong>
          <span className="film-card__details-value">
            {film.starring.map((item, index) => (
              <React.Fragment key={item}>
                {item}
                {index < film.starring.length - 1
                &&
                <>{','}{<br />}</>}
              </React.Fragment>
            ))}
          </span>
        </p>
      </div>

      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Run Time</strong>
          <span className="film-card__details-value">{convertTime(film.runTime)}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Genre</strong>
          <span className="film-card__details-value">{film.genre}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Released</strong>
          <span className="film-card__details-value">{film.released}</span>
        </p>
      </div>
    </div>
  );
}

export default memo(FilmDetails);
