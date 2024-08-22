import React, { useEffect, useState } from 'react';
import { Card } from './Card';
import raymondImage from '../assets/raymond-enoksen.jpg';
import styles from '../styles/FilmCard.module.css';
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { storage } from '../firebase/firebase';



export const FilmCard = ({ title, filename, text, date }) => {

	const [url, setUrl] = useState(undefined)

	useEffect(() => {
		filename && getDownloadURL(ref(storage, `images/${filename}`)).then(
			(urlResult) => {
				setUrl(urlResult)
			}
		)
	}, [filename])

	return (
		<Card>
			<div className={styles['film-card-content']}>
				<img style={{ displa: "cover" }} src={url ?? raymondImage} alt={title} className={styles['film-card-image']} />
				<div className={styles['card-content']}>
					<h2 className={styles['card-title']}>{title}</h2>
					<p className={styles['card-text']}>{text}</p>
				</div>
			</div>
		</Card>
	);
};
