import { useEffect, useRef, useState } from 'react';
import { Link, generatePath } from 'react-router-dom';
import { AppRoute } from '../../const';
import { IFilm } from '../../types/film';
import VideoPlayer from '../video-player/video-player';

type Props = {
  film: IFilm;
  mouseOverHandler: (film: IFilm) => void;
  mouseOutHandler: () => void;
}

function FilmCard ({ film, mouseOverHandler, mouseOutHandler }: Props) {
  const [isActiveFilm, setIsActiveFilm] = useState(false);

  const timerRef = useRef<number | null>(null);
  const switchMediaVideo = function () {
    mouseOverHandler(film);
    timerRef.current = window.setTimeout(() => setIsActiveFilm(true), 1000);
  };

  const switchMediaImage = function () {
    mouseOutHandler();
    setIsActiveFilm(false);
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
  };

  useEffect(() => {timerRef.current && clearTimeout(timerRef.current);}, [isActiveFilm]);

  return (
    <article className="small-film-card catalog__films-card" onMouseOver={() => switchMediaVideo()} onMouseOut={() => switchMediaImage()}>
      <div className="small-film-card__image">
        {isActiveFilm ? (
          <VideoPlayer film={film}/>
        ) : (
          <img src={film.cover} alt={film.title} width="280" height="175" />
        )}
      </div>
      <h3 className="small-film-card__title">
        <Link to={generatePath(AppRoute.Film, { id: film.id })} className="small-film-card__link">
          {film.title}
        </Link>
      </h3>
    </article>
  );
}

export default FilmCard;
