import React from "react";

export default function Todo({ text, createdAt }) {
  return (
    <div className="todo-card">
      <h1 className="todo-card-title">{text}</h1>
      <p className="todo-card-text">
        <strong>Created at: {createdAt}</strong>
      </p>
    </div>
  );
}
