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
import Button from "Components/Button";

export default function Todo({ id, text, createdAt, isCompleted }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTodo(id));
  };

  const handleDone = () => {
    console.log(isCompleted)
    if (!isCompleted) {
      dispatch(markDone(id));
    }
  };

  return (
    <Fragment>
      <h1 style={isCompleted && { textDecoration: "line-through", color: "green" } }>
        {text}
      </h1>
      <p>
        <strong>Created at: {formatDate(createdAt)}</strong>
      </p>
      {!isCompleted && (
        <Button onClick={handleDone}>
          <img src={ICON_CHECK} alt={ALT_TEXT_CHECK} />
        </Button>
      )}
      <Button onClick={handleDelete}>
        <img src={ICON_DELETE} alt={ALT_TEXT_DELETE} />
      </Button>
    </Fragment>
  );
}

Todo.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  createdAt: PropTypes.instanceOf(Date).isRequired,
  isCompleted: PropTypes.bool.isRequired,
};
