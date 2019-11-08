import { useState, useEffect } from 'react';
import getAlbums from '../components/services/getAlbums';

const useReleases = (id, page) => {
  const [albums, updateAlbums] = useState([]);

  useEffect(() => {
    getAlbums(id, page)
      .then(result => updateAlbums(result));
  }, [id, page]);

  return albums;
};

export default useReleases;