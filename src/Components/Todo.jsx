import React from "react";
import PropTypes from "prop-types";

export default function Todo({ text, createdAt }) {
  return (
    <div className="todo-card">
      <h1 className="todo-card-title">{text}</h1>
      <p className="todo-card-text">
        <strong>Created at: {createdAt}</strong>
      </p>
    </div>
  );
}

Todo.propTypes = {
  text: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};
