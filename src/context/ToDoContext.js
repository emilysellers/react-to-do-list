import { createContext, useContext, useEffect, useState } from 'react';
import { getToDos } from '../services/todos.js';
import { useUser } from './UserContext.js';

const ToDoContext = createContext();

const ToDoProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [complete, setComplete] = useState(false);
  const [deleteTask, setDeleteTask] = useState(false);
  const { user } = useUser();

  useEffect(() => {
    const fetchToDos = async () => {
      try {
        const data = await getToDos();
        setTasks(data);
      } catch (e) {
        console.error(e.message);
      }
    };
    fetchToDos();
  }, [user, complete, deleteTask]);

  return (
    <ToDoContext.Provider
      value={{ tasks, setTasks, complete, setComplete, deleteTask, setDeleteTask }}
    >
      {children}
    </ToDoContext.Provider>
  );
};

const useToDos = () => {
  const data = useContext(ToDoContext);
  return data;
};

export { ToDoProvider, useToDos };
