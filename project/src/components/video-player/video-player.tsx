import { IFilm } from '../../types/film';

type Props = {
  film: IFilm;
}

function VideoPlayer ({ film }: Props) {
  return (
    <video src={film?.previewVideoLink} className="player__video" poster={film?.previewImage} muted autoPlay></video>
  );
}

export default VideoPlayer;
