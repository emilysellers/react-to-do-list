import React from 'react';
import { Redirect } from 'react-router-dom';
import { useUser } from '../../context/UserContext.js';
import './ToDos.css';

export default function ToDos() {
  const { user } = useUser();
  if (!user) {
    return <Redirect to="/auth/sign-in" />;
  }
  return (
    <div className="to-dos">
      <h2>ToDos placeholder</h2>
    </div>
  );
}
