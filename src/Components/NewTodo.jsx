import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../services/actions/addTodo';

export default function NewTodo(props) {
  const { handleNewSave } = props;
  const [todoText, setTodoText] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    dispatch(
      addTodo({
        text: todoText,
      })
    );
    e.preventDefault();
    handleNewSave(todoText);
    setTodoText("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={todoText} onChange={(e) => setTodoText(e.target.value)} />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
