import React, {useState} from 'react';
import NewTodo from './NewTodo';
import Todo from './Todo';
import { useSelector } from 'react-redux';


export default function Todos() {
  const todos = useSelector((state) => state.todos);

  // // eslint-disable-next-line no-debugger
  // debugger;

  const [showNewTodo, setShowNewTodo] = useState(false);

  const handleCreate = () => {
    console.log(todos);
    setShowNewTodo(true);
  };

  const handleNewSave = () => {
    setShowNewTodo(false);
  };

  return (
    <div>
      <button onClick={handleCreate}>Create</button>
      {showNewTodo && <NewTodo handleNewSave={handleNewSave} />}
      {todos.map((todo, index) => (
        <Todo key={index} text={todo.text} />
      ))}
      ;
    </div>
  );
}
