import React, { useState } from 'react';
import { useToDos } from '../../context/ToDoContext.js';
import { createToDo } from '../../services/todos.js';

export default function ToDoForm() {
  const [description, setDescription] = useState('');
  const { setTasks } = useToDos();
  const handleNewTask = async () => {
    try {
      const newTask = await createToDo(description);
      setTasks((current) => [...current, newTask]);
      setDescription('');
    } catch (e) {
      console.error(e.message);
    }
  };
  return (
    <div>
      Add a task to your list:
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></input>
      <button onClick={handleNewTask}>Add</button>
    </div>
  );
}
