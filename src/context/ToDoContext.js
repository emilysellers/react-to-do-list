import { createContext, useContext, useState } from 'react';

const ToDoContext = createContext();

const ToDoProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  return <ToDoContext.Provider value={{ tasks, setTasks }}>{children}</ToDoContext.Provider>;
};

const useToDos = () => {
  const data = useContext(ToDoContext);
  return data;
};

export { ToDoProvider, useToDos };
