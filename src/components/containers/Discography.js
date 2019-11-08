import React from 'react';
import PropTypes from 'prop-types';
import PagingButtons from '../paging/PagingButtons';
import Albums from '../music/Albums';
import usePaging from '../../hooks/usePaging';
import useReleases from '../../hooks/useReleases';

export default function Discography({ match }) {
  const { page, updatePage, upDisable, downDisable, handlePageUp, handlePageDown } = usePaging();
  const albums = useReleases(match.params.id, page);

  if(page === undefined) {
    updatePage(1);
  }
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