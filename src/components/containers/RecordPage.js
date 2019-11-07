import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Recordings from '../recordings/Recordings';
import getSongs from '../services/getSongs';

export default function RecordPage({ match }) {
  const [songs, updateSongs] = useState([]);

  useEffect(() => {
    getSongs(match.params.albumId)
      .then(result => {
        updateSongs(result);
      });
  });

  return (
    <>
      <Recordings items={songs} />
    </>
  );
}

RecordPage.propTypes = {
  match: PropTypes.object.isRequired
};