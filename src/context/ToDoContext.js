import { createContext, useContext, useEffect, useState } from 'react';
import { getToDos } from '../services/todos.js';
import { useUser } from './UserContext.js';

const ToDoContext = createContext();

const ToDoProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const { user } = useUser();

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const data = await getToDos();
        setTasks(data);
      } catch (e) {
        console.error(e.message);
      }
    };
    fetchItems();
  }, [user, tasks]);

  return <ToDoContext.Provider value={{ tasks, setTasks }}>{children}</ToDoContext.Provider>;
};

const useToDos = () => {
  const data = useContext(ToDoContext);
  return data;
};

export { ToDoProvider, useToDos };
