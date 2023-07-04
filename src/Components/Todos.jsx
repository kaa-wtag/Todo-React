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

  const handleNewSave = () => {
    setShowNewTodoForm(false);
  };

  return (
    <Fragment>
      <h1>Add Tasks</h1>
      <button onClick={handleCreate}>Create</button>
      <br />
      <br />
      <div className="todo-container">
        <div className="todos-row">
          {showNewTodoForm && (
            <NewTodo className="todo-item" handleNewSave={handleNewSave} />
          )}
          {todos.map((todo, index) => (
            <Todo
              className="todo-item"
              key={index}
              text={todo.text}
              createdAt={todo.createdAt}
            />
          ))}
        </div>
      </div>
    </Fragment>
  );
}
