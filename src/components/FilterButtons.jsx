import React from 'react';
import styles from '../styles/FilterButtons.module.css';

export const FilterButtons = () => {
	return (
		<div className={styles.filterButtonDiv}>
			<button className={styles.filterButton}>feature film</button>
			<button className={styles.filterButton}>tv-drama</button>
			<button className={styles.filterButton}>stage</button>
		</div>
	);
};