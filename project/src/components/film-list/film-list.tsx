import { useState } from 'react';
import { IFilm } from '../../types/film';
import FilmCard from '../film-card/film-card';

type Props = {
  films: IFilm[];
}

function FilmList ({ films }: Props) {
  const [, setFilmActive] = useState<IFilm | null>(null);

  const mouseOverHandler = (film: IFilm) => {
    setFilmActive(film);
  };

  const mouseOutHandler = () => {
    setFilmActive(null);
  };

  return (
    <>
      {films.map((film) => <FilmCard film={film} key={film.id} mouseOverHandler={mouseOverHandler} mouseOutHandler={mouseOutHandler} /> )}
    </>
  );
}

export default FilmList;
