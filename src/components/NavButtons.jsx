import React from 'react';
import styles from '../styles/NavButtons.module.css';
import { useNavigate } from "react-router-dom";


export const NavButtons = () => {



	const navigate = useNavigate();
	const dramaClass = window.location.toString().includes("drama") ? 'nav-button-active' : 'nav-button'
	const dreamClass = window.location.toString().includes("dreamscores") ? 'nav-button-active' : 'nav-button'
	//const backClass = window.location.toString().includes("back") ? 'nav-button-active' : 'nav-button'
	const bigClass = window.location.toString().includes("big screen") ? 'nav-button-active' : 'nav-button'
	const smallClass = window.location.toString().includes("small screen") ? 'nav-button-active' : 'nav-button'
	const stageClass = window.location.toString().includes("stage") ? 'nav-button-active' : 'nav-button'
	const arrClass = window.location.toString().includes("arrangements") ? 'nav-button-active' : 'nav-button'


	return (
		<div className={styles['main-button-container']}>
			<button onClick={() => navigate("/dreamscores")} id='dreamscores' className={styles[dreamClass]}>Dreamscores</button>
			{/*<button onClick={() => navigate("/drama")} id='drama' className={styles[dramaClass]}>Film / Dramaseries</button>*/}
			<button onClick={() => navigate("/bigscreen")} id='big' className={styles[bigClass]}>Big Screen</button>
			<button onClick={() => navigate("/smallscreen")} id='small' className={styles[smallClass]}>Small Screen</button>
			<button onClick={() => navigate("/stage")} id='stage' className={styles[stageClass]}>Stage</button>
			<button onClick={() => navigate("/arrangements")} id='arrangment' className={styles[arrClass]}>Arrangements</button>
			{/*<button onClick={() => navigate("/")} id='back' className={styles[backClass]}> Back </button>*/}
		</div>
	);
}
