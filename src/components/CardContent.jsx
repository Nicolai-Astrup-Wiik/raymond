import React from 'react'
import raymondImage from './assets/raymond-enoksen.jpg';
import styles from '../styles/CardContent.module.css'

export const CardContent = () => {
	return (
		<div>
			<img src={raymondImage} alt="Raymond Enoksen" className="card-image" />
			<div className="card-content">
				<h2 className="card-title">Raymond Enoksen</h2>
				<p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.</p>
			</div>
		</div>
	)
}
