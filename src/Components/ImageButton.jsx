import React from "react";
import PropTypes from "prop-types";

const ImageButton = ({ src, alt, onClick, hide }) => {
  if (hide) {
    return null;
  }

  return (
    <button onClick={onClick}>
      <img src={src} alt={alt} />
    </button>
  );
};

ImageButton.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  hide: PropTypes.bool,
};

export default ImageButton;
