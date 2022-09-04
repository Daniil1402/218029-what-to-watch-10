import { generatePath, Link, useParams } from 'react-router-dom';
import Loader from '../../components/loader/loader';
import { AppRoute } from '../../const';
import { IFilm } from '../../types/film';

type Props = {
  films: IFilm[];
}

function Player ({ films }:Props) {
  const { id } = useParams();

  const film: IFilm | undefined = films.find(
    (item) => item.id.toString() === id
  );

  if (!film) {return <Loader/>;}
  return (
    <div className="player">
      <video src={film?.videoLink} className="player__video" poster={film?.previewImage}></video>

      <Link to={generatePath(AppRoute.Film, { id: film.id.toString() })} className="player__exit">Exit</Link>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100"></progress>
            <div className="player__toggler" style={{ left: '30%' }}>Toggler</div>
          </div>
          <div className="player__time-value">1:30:29</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play">
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref="#play-s"></use>
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">Transpotting</div>

          <button type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Player;
