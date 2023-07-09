import { identifier } from "@babel/types";
import React from "react";
import { useDispatch } from "react-redux";
import delete_btn from "Assets/images/delete.png";
import { deleteTodo } from "services/actions/actions";
import {
  ICON_DELETE,
  IALT_TEXT_DELETE,
  ALT_TEXT_DELETE,
} from "Common/constants";

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
        <img src={ICON_DELETE} alt={ALT_TEXT_DELETE} />
      </button>
    </div>
  );
}
