// Components/PaginationButtons.js
import React from "react";
import PropTypes from "prop-types";

const PaginationButtons = ({ showLoadMore, showShowLess, onLoadMore, onShowLess }) => {
  return (
    <div>
      {showLoadMore && <button onClick={onLoadMore}>Load More</button>}
      {showShowLess && <button onClick={onShowLess}>Show Less</button>}
    </div>
  );
};

PaginationButtons.propTypes = {
  showLoadMore: PropTypes.bool,
  showShowLess: PropTypes.bool,
  onLoadMore: PropTypes.func,
  onShowLess: PropTypes.func,
};

export default PaginationButtons;
