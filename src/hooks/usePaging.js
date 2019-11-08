import { useState, useEffect } from 'react';

const usePaging = () => {
  const [page, updatePage] = useState();
  const [upDisable, updateUpDisable] = useState(true);
  const [downDisable, updateDownDisable] = useState(true);

  const handlePageUp = () => {
    updatePage(page + 1);
    updateDownDisable(false);
  };

  const handlePageDown = () => {
    updatePage(page - 1);
  };

  useEffect(() => {
    if(page >= 0) {
      updateUpDisable(false);
    }
    updateDownDisable(page ? false : true);
  }, [page]);

  return { page, updatePage, handlePageUp, handlePageDown, upDisable, downDisable };
};

export default usePaging;