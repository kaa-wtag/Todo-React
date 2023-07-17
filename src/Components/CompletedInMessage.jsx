import React from "react";
import PropTypes from "prop-types";

export default function CompletedInMessage({ completedIn }) {
  return <p>Completed in {completedIn}</p>;
}

CompletedInMessage.propTypes = {
  completedIn: PropTypes.string.isRequired,
};
