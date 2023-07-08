import React, { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "services/actions/addTodo";
import PropTypes from "prop-types";
import { TYPE_SUBMIT, TYPE_TEXT } from "Common/constants";

export default function NewTodo({ onSave }) {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState(null);

  const handleFormSubmit = (event) => {
    dispatch(
      addTodo({
        text: todo,
      })
    );
    event.preventDefault();
    onSave(todo);
    setTodo(null);
  };

  return (
    <Fragment>
      <form onSubmit={handleFormSubmit}>
        <input
          type={TYPE_TEXT}
          value={todo}
          onChange={(event) => setTodo(event.target.value)}
        />
        <button type={TYPE_SUBMIT}>Add Task</button>
      </form>
    </Fragment>
  );
}

NewTodo.propTypes = {
  onNewSave: PropTypes.func.isRequired,
};
