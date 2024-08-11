import React from 'react';
import styles from '../styles/DreamscoresPage.module.css'; // Import the CSS module

export const DreamscoresPage = () => {
	return (
		<div className={styles.iframeContainer}>
			<div className={styles.blurOverlay}></div>
			<iframe
				className={styles.spotifyIframe}
				src="https://open.spotify.com/embed/playlist/37i9dQZF1EIXBdN1SP8EYA?utm_source=generator"
				width="100%"
				height="352"
				frameBorder="0"
				allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture; transparency;"
				loading="lazy" >

			</iframe>
		</div >
	);
};



