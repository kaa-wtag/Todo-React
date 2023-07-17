import React, { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import NewTodo from "Components/NewTodo";
import Todo from "Components/Todo";

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
      <h1>Add Tasks</h1>
      <button onClick={handleCreate}>Create</button>
      <div>
        {showNewTodoForm && <NewTodo onSave={onSave} />}
        {todos.map((todo) => (
            <Todo
              key={todo.id}
              id={todo.id}
              text={todo.text}
              createdAt={todo.createdAt}
              isCompleted={todo.isCompleted}
            />
          ))}
      </div>
    </Fragment>
  );
}
