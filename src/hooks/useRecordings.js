import { useState, useEffect } from 'react';
import getSongs from '../components/services/getSongs';

const useRecordings = (albumId) => {
  const [songs, updateSongs] = useState([]);

  useEffect(() => {
    getSongs(albumId)
      .then(result => updateSongs(result));
  }, []);

  return songs;
};

export default useRecordings;