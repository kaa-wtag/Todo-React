import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { addTodo } from "services/actions/todo";
import { TYPE_SUBMIT, TYPE_TEXT } from "Common/constants";
import { generateTodoObject } from "Helpers/todoObjectHelpers";

export default function NewTodo({ onSave }) {
  const dispatch = useDispatch();
  const [todoText, setTodoText] = useState(null);

  const handleFormSubmit = (event) => {
    dispatch(addTodo(generateTodoObject(todoText)));
    event.preventDefault();
    onSave(todoText);
    setTodoText(null);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type={TYPE_TEXT}
        value={todoText}
        onChange={(event) => setTodoText(event.target.value)}
      />
      <button type={TYPE_SUBMIT}>Add Task</button>
    </form>
  );
}

NewTodo.propTypes = {
  onSave: PropTypes.func.isRequired,
};
