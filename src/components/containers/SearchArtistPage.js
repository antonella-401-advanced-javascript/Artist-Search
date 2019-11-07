import React, { useState } from 'react';
import Search from '../searches/Search';
import PagingButtons from '../paging/PagingButtons';
import Artists from '../artists/Artists';
import getArtists from '../services/getArtists';

export default function SearchArtistPage() {
  const [searchInput, updateSearchInput] = useState('');
  const [artists, updateArtist] = useState([]);
  const [page, updatePage] = useState(0);
  const [upDisable, updateUpDisable] = useState(true);
  const [downDisable, updateDownDisable] = useState(true);

  const handleChange = ({ target }) => updateSearchInput(target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    getArtists(searchInput, 0)
      .then(res => {
        updateArtist(res);
        updateUpDisable(false);
      });
  };

  const handlePageUp = () => {
    updatePage(prevPage => prevPage + 1);
    return getArtists(searchInput, page)
      .then(res => {
        updateArtist(res);
        updateDownDisable(false);
      });
  };

  const handlePageDown = () => {
    updatePage(prevPage => prevPage - 1);
    return getArtists(searchInput, page)
      .then(res => {
        updateArtist(res);
        updateDownDisable(page === 0 ? true : false);
      });
  };

  return (
    <>
      <Search
        searchInput={searchInput}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <PagingButtons 
        pageUpFunction={handlePageUp}
        pageDownFunction={handlePageDown}
        upDisable={upDisable}
        downDisable={downDisable}
      />
      <Artists items={artists}/>
    </>
  );
}