// src/components/BioCard.jsx
import React from 'react';
import styles from '../styles/BioCard.module.css'; // Adjust the path as necessary

export const BioCard = ({ children }) => {
	return (
		<div className={styles['bio-card']}>
			<div className={styles['bio-card-content']}>
				<p>{children}</p>
			</div>
		</div>
	);
};
