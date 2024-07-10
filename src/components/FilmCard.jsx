import React from 'react';
import { Card } from './Card';
import raymondImage from '../assets/raymond-enoksen.jpg';
import styles from '../styles/FilmCard.module.css'; // Import your CSS module for FilmCard styling

export const FilmCard = ({ text }) => {
	return (
		<Card >
			<div className={styles['film-card-content']}>
				<img src={raymondImage} alt="Raymond Enoksen" className={styles['film-card-image']} />

				<div className={styles['card-content']}>
					<h2 className={styles['card-title']}>Raymond Enoksen</h2>
					<p className={styles['card-text']}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
					</p>
				</div>
			</div>
		</Card>
	);
};
