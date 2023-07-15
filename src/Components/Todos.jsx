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
      <h1>Add Tasks</h1>
      <button onClick={handleCreate}>Create</button>
      <div>
        {showNewTodoForm && <NewTodo onSave={onSave} />}
        {todos.map((todo) => (
          <Todo key={todo.id} text={todo.text} createdAt={todo.createdAt} />
        ))}
      </div>
    </Fragment>
  );
}
