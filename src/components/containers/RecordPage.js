import React from 'react';
import PropTypes from 'prop-types';
import Recordings from '../recordings/Recordings';
import useRecordings from '../../hooks/useRecordings';

export default function RecordPage({ match }) {
  const songs = useRecordings(match.params.albumId);

  return (
    <>
      <Recordings items={songs} />
    </>
  );
}

RecordPage.propTypes = {
  match: PropTypes.object.isRequired
};