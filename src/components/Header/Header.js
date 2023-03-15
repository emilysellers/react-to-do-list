import React from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../../context/UserContext.js';
import { signOut } from '../../services/auth.js';
import './Header.css';

export default function Header() {
  const { user, setUser } = useUser();

  const handleSignOut = async () => {
    try {
      await signOut();
      //set user to null
      setUser(null);
    } catch (e) {
      console.error(e.message);
    }
  };

  return (
    <div className="header">
      {!user && (
        <div>
          <Link to="/auth/sign-in">Sign in</Link>
          <Link to="/auth/sign-up">Sign up</Link>
        </div>
      )}
      {user && (
        <>
          <div>Hello {user.email}</div>
          <button onClick={handleSignOut}>Sign Out</button>
        </>
      )}
    </div>
  );
}
