import React from "react";
import { useDispatch } from "react-redux";
import delete_btn from "../assets/delete.png";
import { deleteTodo } from "../services/actions/addTodo";

export default function Todo(props) {
  const { text, created_at, key } = props;
  // eslint-disable-next-line no-debugger
  debugger;
  console.log(key)
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTodo(key));
  };

  return (
    <div className="todo-card">
      <h1 className="todo-card-title">{text}</h1>
      <p className="todo-card-text">
        <strong>Created at: {created_at}</strong>
      </p>
      <button onClick={handleDelete}>
        <img src={delete_btn} alt="Delete" />
      </button>
    </div>
  );
}
