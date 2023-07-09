import React, { Fragment, useState } from "react";
import NewTodo from "Components/NewTodo";
import Todo from "Components/Todo";
import { useSelector } from "react-redux";

export default function Todos() {
  const todos = useSelector((state) => state.todos);

  const [showNewTodoForm, setShowNewTodoForm] = useState(false);

  const handleCreate = () => {
    setShowNewTodoForm(true);
  };

  const onSave = () => {
    setShowNewTodoForm(false);
  };

  return (
    <Fragment>
      <h1 className="todos__title">Add Tasks</h1>
      <button
        className="todos__button todos__button--create"
        onClick={handleCreate}
      >
        Create
      </button>
      <div className="todos__container">
        <div className="todos__row">
          {showNewTodoForm && (
            <NewTodo className="todos__item" onSave={onSave} />
          )}
          {todos.map((todo) => (
            <Todo
              className="todos__item"
              key={todo.id}
              text={todo.text}
              createdAt={todo.createdAt}
            />
          ))}
        </div>
      </div>
    </Fragment>
  );
}
