import React from 'react';
import { Redirect } from 'react-router-dom';
import { useToDos } from '../../context/ToDoContext.js';
import { useUser } from '../../context/UserContext.js';
import { deleteToDo, toggleComplete } from '../../services/todos.js';
import ToDoForm from './ToDoForm.js';
import './ToDos.css';

export default function ToDoList() {
  const { user } = useUser();
  const { tasks, setTasks, complete, setComplete, deleteTask, setDeleteTask } = useToDos();

  const handleCheck = async (task) => {
    try {
      const updatedTask = await toggleComplete(task);
      setTasks((currentTask) => (currentTask.id === task.id ? updatedTask : currentTask));
      setComplete(!complete);
    } catch (e) {
      console.error(e.message);
    }
  };

  const handleDelete = async (task) => {
    try {
      const deletedTask = await deleteToDo(task);
      setTasks((currentTask) => (currentTask.id === task.id ? deletedTask : currentTask));
      setDeleteTask(!deleteTask);
    } catch (e) {
      console.error(e.message);
    }
  };

  if (!user) {
    return <Redirect to="/auth/sign-in" />;
  }

  return (
    <div className="to-dos">
      <h2>Get stuff done!</h2>
      <ToDoForm />
      <div className="task-list">
        {tasks.map((task) => (
          <div key={task.id}>
            <input type="checkbox" checked={task.complete} onChange={() => handleCheck(task)} />
            {task.description}
            <button onClick={() => handleDelete(task)}>delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}
