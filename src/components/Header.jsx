import React from 'react';
import styles from '../styles/Header.module.css';
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <div
      className={styles['header-overlay']}
      onClick={handleClick}
      style={{ cursor: 'pointer' }} // Add cursor style to indicate it's clickable
    >
      <h1>Raymond Enoksen</h1>
    </div>
  );
};
