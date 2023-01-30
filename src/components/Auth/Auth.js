import React from 'react';
import { NavLink } from 'react-router-dom';
import './Auth.css';

export default function Auth() {
  //return navlinks for sign-in & sign-up, inputs for email & address, submit button
  return (
    <div className="auth">
      <div className="form-container">
        <p>To Dos Sign In</p>
        <div>
          <NavLink to="/auth/sign-in">Sign in</NavLink>
          <NavLink to="/auth/sign-up">Sign up</NavLink>
        </div>
        <div>
          <div>
            <label>Email</label>
            <input></input>
          </div>
          <div>
            <label>Password</label>
            <input></input>
          </div>
          {/* //on click call submitAuth() */}
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
}
