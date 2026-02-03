import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

export const Player = () => (
  <AudioPlayer
    autoPlay
    src="/songs/secretsslowed.mp3"
  />
);
