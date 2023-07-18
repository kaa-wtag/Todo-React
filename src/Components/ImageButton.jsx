import React from "react";
import PropTypes from "prop-types";

const ImageButton = ({ src, alt, onClick, disabled }) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      <img src={src} alt={alt} />
    </button>
  );
};

ImageButton.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

export default ImageButton;
