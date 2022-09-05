import { useEffect, useRef, useState } from 'react';
import { generatePath, Link, useParams } from 'react-router-dom';
import Loader from '../../components/loader/loader';
import { AppRoute } from '../../const';
import { useAppSelector } from '../../hooks';
import { store } from '../../store';
import { fetchFilmAction } from '../../store/api-actions';
import { getLoadedFilm, loadFilm } from '../../store/film-data/selectors';

function Player () {
  const { id } = useParams();
  const timerRef = useRef<number | null>(null);
  const film = useAppSelector(loadFilm);
  const isFilmLoaded = useAppSelector(getLoadedFilm);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [timeLeft, setTimeLeft] = useState('');

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
        changingTimeLeft();
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
        if (timerRef.current) {
          clearTimeout(timerRef.current);
        }
      }
    }
  };

  const convertTime = (time: number) => {
    if (time < 60) {
      console.log(`00:00:${time}`);
      setTimeLeft(`00:00:${time}`);
      // return `00:00:${time}`;
    } else if (time < 3600) {
      const minutes = Math.floor(time / 60);
      const secunds = time - (minutes * 60);
      console.log(`00:${minutes}:${secunds}`);
      setTimeLeft(`00:${minutes}:${secunds}`);
      // return `00:${minutes}:${secunds}`;
    }else {
      const hours = Math.floor(time / 60 / 60);
      const minutes = Math.floor(time / 60) - (hours * 60);
      const secunds = time % 60;
      console.log(`${hours}:${minutes}:${secunds}`);
      setTimeLeft(`${hours}:${minutes}:${secunds}`);
      // return `${hours}:${minutes}:${secunds}`;
    }
  };

  const getTimeLeft = () => {  
    console.log(132);
    if (videoRef.current) {
      if (videoRef.current.duration) {
        return convertTime(Math.floor(videoRef.current.duration));
      }
    }
  };

  const changingTimeLeft = () => {   
    timerRef.current = window.setTimeout(() => getTimeLeft(), 1000);
  };

  const toggleFullScreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  useEffect(() => {
    if (id) {
      store.dispatch(fetchFilmAction(id));
    }
  }, [id]);

  useEffect(() => {
    if (videoRef.current) {
      getTimeLeft();
    }
  }, [film]);

  if (!film || isFilmLoaded) {
    return (
      <Loader />
    );
  }

  return (
    <div className="player">
      <video ref={videoRef} src={film?.videoLink} className="player__video" poster={film?.previewImage}></video>

      <Link to={generatePath(AppRoute.Film, { id: film.id.toString() })} className="player__exit">Exit</Link>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="0" max="100"></progress>
            <div className="player__toggler" style={{ left: '0%' }}>Toggler</div>
          </div>
          <div className="player__time-value">{timeLeft}</div>
        </div>

        <div className="player__controls-row">
          {isPlaying ? (
            <button type="button" className="player__play" onClick={togglePlay}>
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#pause"></use>
              </svg>
              <span>Pause</span>
            </button>
          ) : (
            <button type="button" className="player__play" onClick={togglePlay}>
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"></use>
              </svg>
              <span>Play</span>
            </button>
          )}
          <div className="player__name">Transpotting</div>

          <button type="button" className="player__full-screen" onClick={toggleFullScreen}>
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
