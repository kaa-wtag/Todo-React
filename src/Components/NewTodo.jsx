import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "services/actions/addTodo";

export default function NewTodo(props) {
  const { handleNewSave } = props;
  const [todoText, setTodoText] = useState(null);

  const dispatch = useDispatch();

  const formatedDate = () => {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, "0");
    const month = String(today.getMonth() + 1).padStart(2, "0"); // Month is zero-based
    const year = today.getFullYear();
    return `${day}.${month}.${year}`;
  };

  const handleSubmit = (event) => {
    dispatch(
      addTodo({
        text: todoText,
        createdAt: formatedDate(),
      })
    );
    event.preventDefault();
    handleNewSave(todoText);
    setTodoText(null);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={todoText}
          onChange={(event) => setTodoText(event.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}
