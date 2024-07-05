import React from 'react';
import styles from '../styles/Header.module.css';  
import { useNavigate } from "react-router-dom";




export const Header = () => {
	const navigate = useNavigate();

	
  return (
    <div className="header-overlay">
      <h1>Raymond Enoksen</h1>
    </div>
  );
}
