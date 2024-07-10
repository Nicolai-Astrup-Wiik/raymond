import React from 'react'
import styles from '../styles/FilmCard.module.css'

export const Card = ({ children }) => {
	return (
		<div className={styles['film-card']}>
			{children}
		</div>
	)
}

