import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { addTodo } from "services/actions/addTodo";
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
    <form onSubmit={handleFormSubmit}>
      <input
        type={TYPE_TEXT}
        value={todo}
        onChange={(event) => setTodo(event.target.value)}
      />
      <button type={TYPE_SUBMIT}>Add Task</button>
    </form>
  );
}

NewTodo.propTypes = {
  onSave: PropTypes.func.isRequired,
};
