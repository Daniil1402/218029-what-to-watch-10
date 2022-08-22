import { IFilm } from '../../types/film';

type Props = {
  film: IFilm;
}

function VideoPlayer ({ film }: Props) {
  return (
    <video src={film?.src} className="player__video" poster={film?.cover} muted autoPlay></video>
  );
}

export default VideoPlayer;
