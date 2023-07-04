import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from "services/actions/addTodo";

export default function NewTodo(props) {
  const { handleNewSave } = props;
  const [todoText, setTodoText] = useState("");

  const dispatch = useDispatch();

  const formatedDate = () => {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, "0");
    const month = String(today.getMonth() + 1).padStart(2, "0"); // Month is zero-based
    const year = today.getFullYear();
    return `${day}.${month}.${year}`;
  };


  const handleSubmit = (e) => {
    dispatch(
      addTodo({
        text: todoText,
        created_at: formatedDate(),
      })
    );
    e.preventDefault();
    handleNewSave(todoText);
    setTodoText("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}
