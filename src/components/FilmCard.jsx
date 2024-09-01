// src/components/FilmCard.jsx
import React, { useEffect, useState } from 'react';
import { Card } from './Card';
import raymondImage from '../assets/raymond-enoksen.jpg';
import styles from '../styles/FilmCard.module.css';
import { getDownloadURL, ref } from 'firebase/storage';
import { storage } from '../firebase/firebase';

export const FilmCard = ({ title, filename, text, year, spotifyLink, onDelete, isAuthenticated }) => {
	const [url, setUrl] = useState(undefined);

	useEffect(() => {
		if (filename) {
			getDownloadURL(ref(storage, `images/${filename}`)).then(
				(urlResult) => {
					setUrl(urlResult);
				}
			);
		}
	}, [filename]);

	const extractedYear = year ? year.split('-')[0] : '';

	return (
		<Card>
			<div className={styles['film-card-content']}>
				<img style={{ objectFit: "cover" }} src={url ?? raymondImage} alt={title} className={styles['film-card-image']} />
				<div className={styles['card-content']}>
					<h2 className={styles['card-title']}>{title} - {extractedYear}</h2>
					<p className={styles['card-text']}>{text}</p>
					{spotifyLink && (
						<a href={spotifyLink} target="_blank" rel="noopener noreferrer" className={styles['spotify-button']}>
							<i className="fab fa-spotify"></i> Listen on Spotify
						</a>
					)}
					{isAuthenticated && (
						<button className={styles['delete-button']} onClick={onDelete}>
							<i className="fas fa-trash"></i> Delete
						</button>
					)}
				</div>
			</div>
		</Card>
	);
};
