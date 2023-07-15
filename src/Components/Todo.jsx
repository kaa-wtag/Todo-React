import React, { Fragment } from "react";
import PropTypes from "prop-types";

export default function Todo({ text, createdAt }) {
  return (
    <Fragment>
      <h1>{text}</h1>
      <p>
        <strong>Created at: {createdAt}</strong>
      </p>
    </Fragment>
  );
}

Todo.propTypes = {
  text: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};
