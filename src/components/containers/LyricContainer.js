import React from 'react';
import Lyric from '../lyrics/Lyric';
import PropTypes from 'prop-types';
import useLyrics from '../../hooks/useLyrics';

export default function LyricContainer({ match }) {
  const parsedArtist = decodeURIComponent(match.params.artist);
  const parsedSong = decodeURIComponent(match.params.song);
  const lyrics = useLyrics(parsedArtist, parsedSong);

  return (
    <>
      <Lyric title={match.params.song} lyrics={lyrics} />
    </>
  );
}

LyricContainer.propTypes = {
  match: PropTypes.object.isRequired
};