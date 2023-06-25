import React, {useState} from 'react'
import NewTodo from './NewTodo';
import Todo from './Todo'

export default function Todos() {

  const [demoTodos, setDemoTodos] = useState([
    { id: 1, text: 'Finish homework', completed: false },
    { id: 2, text: 'Go grocery shopping', completed: true }
  ]);

  
  const [showNewTodo, setShowNewTodo] = useState(false);

  const handleCreate = () => {
    setShowNewTodo(true);
  }

  const handleNewSave = (todoText) => {
    const newTodo = {
      id: demoTodos.length + 1,
      text: todoText,
      completed: false
    };
    setDemoTodos([...demoTodos, newTodo]);
    setShowNewTodo(false);
  };

  return (
    <div>
      <button onClick={handleCreate}>Create</button>
      {showNewTodo && <NewTodo handleNewSave={handleNewSave}/>}
      {demoTodos.map( todo => <Todo key = {todo.id} text={todo.text }/>)};
    </div>
  )
}
