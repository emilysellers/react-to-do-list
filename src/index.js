import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './context/UserContext.js';
import { ToDoProvider } from './context/ToDoContext.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
      <ToDoProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ToDoProvider>
    </UserProvider>
  </React.StrictMode>
);

reportWebVitals();
