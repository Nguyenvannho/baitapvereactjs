import React, { useState } from 'react';
import axios from 'axios';

const TodoForm = ({ onAddTodo }) => {
  const [todo, setTodo] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/todos', {
        title: todo,
        completed: false
      });

      onAddTodo(response.data);
      alert('Successfully added new todo!');
    } catch (error) {
      alert(`Failed to add new todo: ${error.message}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={todo} onChange={(event) => setTodo(event.target.value)} />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;
