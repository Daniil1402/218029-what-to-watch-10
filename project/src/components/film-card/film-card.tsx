import { Link, generatePath } from 'react-router-dom';
import { AppRoute } from '../../const';
import { IFilm } from '../../types/film';

type Props = {
  film: IFilm;
  mouseOverHandler: (film: IFilm) => void;
  mouseOutHandler: () => void;
}

function FilmCard ({ film, mouseOverHandler, mouseOutHandler }: Props) {
  return (
    <article className="small-film-card catalog__films-card" onMouseOver={() => mouseOverHandler(film)} onMouseOut={() => mouseOutHandler()}>
      <div className="small-film-card__image">
        <img src={film.cover} alt={film.title} width="280" height="175" />
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
