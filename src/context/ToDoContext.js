import { createContext, useContext, useState } from 'react';

const ToDoContext = createContext();

const ToDoProvider = ({ children }) => {
  const [tasks, setTasks] = useState([
    { id: 1, description: 'laundry', isComplete: false },
    { id: 2, description: 'groceries', isComplete: false },
  ]);
  return <ToDoContext.Provider value={{ tasks, setTasks }}>{children}</ToDoContext.Provider>;
};

const useToDos = () => {
  const data = useContext(ToDoContext);
  return data;
};

export { ToDoProvider, useToDos };
