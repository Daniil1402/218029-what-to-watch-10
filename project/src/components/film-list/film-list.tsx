import { memo, useCallback, useState } from 'react';
import { Films, IFilm } from '../../types/film';
import FilmCard from '../film-card/film-card';

type Props = {
  films: Films;
  quantityShow?: number;
}

function FilmList ({ films, quantityShow }: Props) {
  const [, setFilmActive] = useState<IFilm | null>(null);

  const mouseOverHandler = useCallback(
    (film: IFilm) => setFilmActive(film),
    []
  );

  const mouseOutHandler = useCallback(
    () => setFilmActive(null),
    []
  );

  return (
    <div className="catalog__films-list">
      {films.map((film, index) =>
        (quantityShow
          ?
          (index < quantityShow && (<FilmCard film={film} key={film.id} mouseOverHandler={mouseOverHandler} mouseOutHandler={mouseOutHandler} />)
          )
          :
          (<FilmCard film={film} key={film.id} mouseOverHandler={mouseOverHandler} mouseOutHandler={mouseOutHandler} />)
        )
      )}
    </div>
  );
}

export default memo(FilmList);
