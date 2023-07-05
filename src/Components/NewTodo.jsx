import React, { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "services/actions/addTodo";

export default function NewTodo(props) {
  const { onNewSave } = props;
  const [todoText, setTodoText] = useState(null);

  const dispatch = useDispatch();

  const formatDate = () => {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, "0");
    const month = String(today.getMonth() + 1).padStart(2, "0"); // Month is zero-based
    const year = today.getFullYear();
    return `${day}.${month}.${year}`;
  };

  const handleFormSubmit = (event) => {
    dispatch(
      addTodo({
        text: todoText,
        createdAt: formatDate(),
      })
    );
    event.preventDefault();
    onNewSave(todoText);
    setTodoText(null);
  };

  return (
    <Fragment>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={todoText}
          onChange={(event) => setTodoText(event.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>
    </Fragment>
  );
}
