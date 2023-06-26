import React from 'react'

export default function Todo(props) {
  const {text, created_at} = props
  return (
    <div className="todo-card">
      <h1 className="todo-card-title">{text}</h1>
      <p className="todo-card-text">
        <strong>Created at: {created_at}</strong>
      </p>
    </div>
  );
};

