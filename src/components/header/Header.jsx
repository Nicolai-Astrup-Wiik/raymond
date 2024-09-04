import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import styles from '../../styles/Header.module.css';

export const Header = ({ isAuthenticated }) => {
  const navigate = useNavigate();
  const auth = getAuth();

  const handleClick = () => {
    navigate('/');
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div className={styles['header-container']}>
      <div className={styles['header-overlay']} onClick={handleClick}>
        <h1>Raymond Enoksen</h1>
      </div>
      {isAuthenticated && (
        <button className={styles['logout-button']} onClick={handleLogout}>
          Logout
        </button>
      )}
    </div>
  );
};
