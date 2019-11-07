import React, { useState, useEffect } from 'react';
import Lyric from '../lyrics/Lyric';
import PropTypes from 'prop-types';
import getLyrics from '../services/getLyrics';

export default function LyricContainer({ match }) {
  const [lyrics, updateLyrics] = useState('');

  const parsedArtist = decodeURIComponent(match.params.artist);
  const parsedSong = decodeURIComponent(match.params.song);

  useEffect(() => {
    getLyrics(parsedArtist, parsedSong)
      .then(result => {
        updateLyrics(result.lyrics);
      });
  });

  return (
    <>
      <Lyric title={match.params.song} lyrics={lyrics} />
    </>
  );
}

LyricContainer.propTypes = {
  match: PropTypes.object.isRequired
};