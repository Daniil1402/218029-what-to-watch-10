import { memo, useCallback, useState } from 'react';
import { Films, IFilm } from '../../types/film';
import FilmCard from '../film-card/film-card';

type Props = {
  films: Films;
}

function FilmList ({ films }: Props) {
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
    <>
      {films.map((film) => <FilmCard film={film} key={film.id} mouseOverHandler={mouseOverHandler} mouseOutHandler={mouseOutHandler} /> )}
    </>
  );
}

export default memo(FilmList);
