import React from 'react';
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
      {user && (
        <>
          <div>Hello {user.email}</div>
          <button onClick={handleSignOut}>Sign Out</button>
        </>
      )}
    </div>
  );
}
