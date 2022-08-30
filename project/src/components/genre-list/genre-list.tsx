import { IFilm } from '../../types/film';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {setGenre} from '../../store/action';
import { ALL_GENERES, NameSpace } from '../../const';

type Props = {
  films: IFilm[];
}

function GenreList ({ films }: Props) {
  const dispatch = useAppDispatch();
  const activeGenre = useAppSelector((state) => state[NameSpace.Data].genre);
  // const activeGenre = useAppSelector(setGenre);

  const genreList = new Set<string>();
  genreList.add(ALL_GENERES);

  films.map((film) => genreList.add(film.genre));
  return (
    <ul className="catalog__genres-list">
      {genreList && [...genreList].map((genre) => (
        <li className={`catalog__genres-item ${genre === activeGenre && 'catalog__genres-item--active'}`} key={genre} onClick={() => dispatch(setGenre(genre))}>
          <a className="catalog__genres-link">{genre}</a>
        </li>
      ))}
    </ul>
  );
}

export default GenreList;
