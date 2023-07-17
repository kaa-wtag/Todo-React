import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { deleteTodo, markDone } from "services/actions/todo";
import {
  ICON_DELETE,
  ICON_CHECK,
  ALT_TEXT_DELETE,
  ALT_TEXT_CHECK,
} from "Common/constants";
import { formatDate } from "Helpers/dateFormatehelpers";
import ImageButton from "Components/ImageButton";

export default function Todo({ id, text, createdAt, isCompleted }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTodo(id));
  };

  const handleDone = () => {
    if (!isCompleted) {
      dispatch(markDone(id));
    }
  };

  return (
    <Fragment>
      <h1 style={isCompleted ? { textDecoration: "line-through", color: "green" } : {}}>
        {text}
      </h1>
      <p>
        <strong>Created at: {formatDate(createdAt)}</strong>
      </p>
      <ImageButton
        src={ICON_CHECK}
        alt={ALT_TEXT_CHECK}
        onClick={handleDone}
        hide={isCompleted}
      />
      <ImageButton
        src={ICON_DELETE}
        alt={ALT_TEXT_DELETE}
        onClick={handleDelete}
      />
    </Fragment>
  );
}

Todo.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  createdAt: PropTypes.instanceOf(Date).isRequired,
  isCompleted: PropTypes.bool.isRequired,
};
