import React from 'react';
import styles from '../styles/NavButtons.module.css';
import { useNavigate } from "react-router-dom";


export const NavButtons = () => {



	const navigate = useNavigate();
	const dramaClass = window.location.toString().includes("drama") ? 'nav-button-active' : 'nav-button'
	const dreamClass = window.location.toString().includes("dreamscores") ? 'nav-button-active' : 'nav-button'


	return (
		<div className={styles['main-button-container']}>
			<button onClick={() => navigate("/dreamscores")} id='dreamscores' className={styles[dreamClass]}>Dreamscores</button>
			<button onClick={() => navigate("/drama")} id='drama' className={styles[dramaClass]}>Film / Dramaseries</button>
		</div>
	);
}
