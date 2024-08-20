import React from 'react';
import { Card } from './Card';
import raymondImage from '../assets/raymond-enoksen.jpg';
import styles from '../styles/FilmCard.module.css';

export const FilmCard = ({ title, text }) => {
	return (
		<Card>
			<div className={styles['film-card-content']}>
				<img src={raymondImage} alt={title} className={styles['film-card-image']} />
				<div className={styles['card-content']}>
					<h2 className={styles['card-title']}>{title}</h2>
					<p className={styles['card-text']}>{text}</p>
				</div>
			</div>
		</Card>
	);
};
