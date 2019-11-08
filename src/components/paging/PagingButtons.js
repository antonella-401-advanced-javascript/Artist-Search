import React from 'react';
import PropTypes from 'prop-types';
import styles from './PagingButtons.css';

const PagingButtons = ({ handlePageUp, handlePageDown, upDisable, downDisable }) => {
  return (
    <section className={styles.PagingButtons} >
      <button disabled={downDisable} onClick={handlePageDown}>Previous Page</button>
      <button disabled={upDisable} onClick={handlePageUp}>Next Page</button>
    </section>
  );
};

PagingButtons.propTypes = {
  handlePageUp: PropTypes.func.isRequired,
  handlePageDown: PropTypes.func.isRequired,
  upDisable: PropTypes.bool.isRequired,
  downDisable: PropTypes.bool.isRequired
};

export default PagingButtons;
