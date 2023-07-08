import { identifier } from "@babel/types";
import React from "react";
import { useDispatch } from "react-redux";
import delete_btn from "Assets/images/delete.png";
import { deleteTodo } from "services/actions/addTodo";

export default function Todo({ id, text, createdAt }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className="todo-card">
      <h1 className="todo-card-title">{text}</h1>
      <p className="todo-card-text">
        <strong>Created at: {createdAt}</strong>
      </p>
      <button onClick={handleDelete}>
        <img src={delete_btn} alt="Delete" />
      </button>
    </div>
  );
}
