import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PagingButtons from '../paging/PagingButtons';
import Albums from '../music/Albums';
import getAlbums from '../services/getAlbums';

export default function Discography({ match }) {
  const [albums, updateAlbum] = useState([]);
  const [page, updatePage] = useState(0);
  const [upDisable, updateUpDisable] = useState(true);
  const [downDisable, updateDownDisable] = useState(true);

  useEffect(() => {
    getAlbums(match.params.id, page)
      .then(result => {
        updateAlbum(result);
        updateUpDisable(false);
      });
  }, [match.params.id, page]);

  const handlePageUp = () => {
    updatePage(prevPage => prevPage + 1);
    return getAlbums(match.params.id, page)
      .then(res => {
        updateAlbum(res);
        updateDownDisable(false);
      });
  };

  const handlePageDown = () => {
    updatePage(prevPage => prevPage - 1);
    return getAlbums(match.params.id, page)
      .then(res => {
        updateAlbum(res);
        updateDownDisable(page === 0 ? true : false);
      });
  };

  return (
    <>
      <PagingButtons 
        pageUpFunction={handlePageUp}
        pageDownFunction={handlePageDown}
        upDisable={upDisable}
        downDisable={downDisable}
      />
      <Albums items={albums} />
    </>
  );
}

Discography.propTypes = {
  match: PropTypes.object.isRequired
};