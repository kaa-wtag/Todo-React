import React, { useState } from 'react';

export default function NewTodo(props) {
  const { handleNewSave } = props;
  const [todoText, setTodoText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleNewSave(todoText);
    setTodoText('');
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
