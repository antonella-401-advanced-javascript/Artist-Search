import React, { useState } from 'react';
import Search from '../searches/Search';
import PagingButtons from '../paging/PagingButtons';
import Artists from '../artists/Artists';
import useArtists from '../../hooks/useArtists';
import usePaging from '../../hooks/usePaging';

export default function SearchArtistPage() {
  const [searchInput, updateSearchInput] = useState('');
  const { page, updatePage, upDisable, downDisable, handlePageUp, handlePageDown } = usePaging();
  const artists = useArtists(searchInput, page);

  const handleChange = ({ target }) => updateSearchInput(target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    updatePage(0);
  };

  return (
    <>
      <Search
        searchInput={searchInput}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <PagingButtons 
        handlePageUp={handlePageUp}
        handlePageDown={handlePageDown}
        upDisable={upDisable}
        downDisable={downDisable}
      />
      <Artists items={artists}/>
    </>
  );
}