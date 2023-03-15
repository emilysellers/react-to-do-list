import React, { useState } from 'react';
import { NavLink, Redirect, useParams } from 'react-router-dom';
import { useUser } from '../../context/UserContext.js';
import { authUser } from '../../services/auth.js';

import './Auth.css';

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { type } = useParams();
  const { user, setUser } = useUser();
  if (user) {
    return <Redirect to="/todos" />;
  }
  //submitAuth function
  const submitAuth = async () => {
    //call authUser with email, password, type
    try {
      //if successful
      const newUser = await authUser(email, password, type);
      //setUser in context
      setUser(newUser);
      //redirect to items happens through re-render which triggers redirect to todos
    } catch (e) {
      console.error(e);
    }
  };

  //return navlinks for sign-in & sign-up, inputs for email & address, submit button
  return (
    <div className="auth">
      <div className="form-container">
        <p>Welcome! Please sign in or sign up.</p>
        <div>
          <NavLink to="/auth/sign-in">Sign in</NavLink>
          <NavLink to="/auth/sign-up">Sign up</NavLink>
        </div>
        <div>
          <div>
            <label>Email</label>
            <input
              type="email"
              placeholder="me@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {/* //on click call submitAuth() */}
          <button onClick={submitAuth}>Submit</button>
        </div>
      </div>
    </div>
  );
}
