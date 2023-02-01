import React from 'react';
import { Redirect } from 'react-router-dom';
import { useToDos } from '../../context/ToDoContext.js';
import { useUser } from '../../context/UserContext.js';
import { toggleComplete } from '../../services/todos.js';
import ToDoForm from './ToDoForm.js';
import './ToDos.css';

export default function ToDoList() {
  const { user } = useUser();
  const { tasks, setTasks } = useToDos();
  const handleCheck = async (task) => {
    try {
      const completedTask = await toggleComplete(task);
      setTasks((currentTask) => (currentTask.id === task.id ? completedTask : currentTask));
    } catch (e) {
      console.error(e.message);
    }
  };

  if (!user) {
    return <Redirect to="/auth/sign-in" />;
  }

  return (
    <div className="to-dos">
      <h2>To Do List</h2>
      <ToDoForm />
      <ul>
        {tasks.map((task) => (
          <div key={task.id} {...{ task }}>
            <input type="checkbox" checked={task.complete} onChange={() => handleCheck(task)} />
            {task.description}
          </div>
        ))}
      </ul>
    </div>
  );
}
