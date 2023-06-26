import React, { useState } from "react";
import NewTodo from "./NewTodo";
import Todo from "./Todo";
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
    <div>
      <button onClick={handleCreate}>Create</button>
      {showNewTodoForm && <NewTodo handleNewSave={handleNewSave} />}
      {todos.map((todo, index) => (
        <Todo key={index} text={todo.text} />
      ))}
      ;
    </div>
  );
}
