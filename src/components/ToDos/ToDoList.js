import React from 'react';
import { Redirect } from 'react-router-dom';
import { useToDos } from '../../context/ToDoContext.js';
import { useUser } from '../../context/UserContext.js';
import ToDoForm from './ToDoForm.js';
import './ToDos.css';

export default function ToDoList() {
  const { user } = useUser();
  const { tasks } = useToDos();
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
            {task.description}
          </div>
        ))}
      </ul>
    </div>
  );
}
