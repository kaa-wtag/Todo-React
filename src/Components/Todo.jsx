import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { formatDate } from "Helpers/dateFormatehelpers";

export default function Todo({ text, createdAt }) {
  return (
    <Fragment>
      <h1>{text}</h1>
      <p>
        <strong>Created at: {formatDate(createdAt)}</strong>
      </p>
    </Fragment>
  );
}

Todo.propTypes = {
  text: PropTypes.string.isRequired,
  createdAt: PropTypes.instanceOf(Date).isRequired,
};
