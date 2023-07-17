import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { deleteTodo } from "services/actions/todo";
import { ICON_DELETE, ALT_TEXT_DELETE } from "Common/constants";
import { formatDate } from "Helpers/dateFormatehelpers";
import Button from "Components/Button";

export default function Todo({ id, text, createdAt }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTodo(id));
  };

  return (
    <Fragment>
      <h1>{text}</h1>
      <p>
        <strong>Created at: {formatDate(createdAt)}</strong>
      </p>
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
};
