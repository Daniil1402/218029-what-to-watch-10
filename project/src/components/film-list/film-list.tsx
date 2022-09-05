import { memo, useCallback, useEffect, useState } from 'react';
import { Films, IFilm } from '../../types/film';
import FilmCard from '../film-card/film-card';
import ShowMore from '../show-more/show-more';

type Props = {
  films: Films;
  quantityShow?: number;
  isActiveShowMore?: boolean;
}

function FilmList ({ films, quantityShow, isActiveShowMore }: Props) {
  const [, setFilmActive] = useState<IFilm | null>(null);
  const [slicePosition, setSlicePosition] = useState(0);
  const [isShowMore, setIsShowMore] = useState(false);
  const [finalFilms, setFinalFilms] = useState(films);

  const mouseOverHandler = useCallback(
    (film: IFilm) => setFilmActive(film),
    []
  );

  const mouseOutHandler = useCallback(
    () => setFilmActive(null),
    []
  );

  useEffect(() => {
    setSlicePosition(8);
    if (films.length > 8) {
      setIsShowMore(true);
      setFinalFilms(films.slice(0, 8));
      setSlicePosition(16);
    } else {
      setIsShowMore(false);
    }
  }, [films]);

  const showMore = () => {
    setSlicePosition(slicePosition + 8);
    setFinalFilms(films.slice(0, slicePosition));
    if (slicePosition >= films.length) {
      setIsShowMore(false);
    }
  };

  if (isShowMore && isActiveShowMore) {
    return (
      <>
        <div className="catalog__films-list">
          {finalFilms.map((film, index) =>
            (quantityShow
              ?
              (index < quantityShow && (<FilmCard film={film} key={film.id} mouseOverHandler={mouseOverHandler} mouseOutHandler={mouseOutHandler} />)
              )
              :
              (<FilmCard film={film} key={film.id} mouseOverHandler={mouseOverHandler} mouseOutHandler={mouseOutHandler} />)
            )
          )}
        </div>
        <ShowMore onClickHandle={showMore}/>
      </>
    );
  }

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
