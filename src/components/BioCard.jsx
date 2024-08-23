import React from 'react';
import styles from '../styles/BioCard.module.css'; // Adjust the path as necessary

export const BioCard = () => {
	return (
		<div className={styles['bio-card']}>
			<div className={styles['bio-card-content']}>
				<p>
					Raymond Enoksen has, for the past 20 years, been one of Scandinavia's most prolific composers for
					television, documentary, and drama across both the small and big screens. His growing international
					portfolio includes notable productions such as the International Emmy-winning series Atlantic Crossing,
					the TIFF-featured film Thale, the BCN-featured Scandinavian film Hammarskjöld, and the Prix Europa-winning
					documentary series The Snowball War. As an arranger, Raymond has worked with artists like Steven Tyler,
					Jennifer Hudson, James Blunt, Ne-Yo, Nico & Vinz, Seinabo Sey, and Emel Mathlouthi in relation to the
					Nobel Peace Prize Concerts.  In 2024, he was honored with the Castell de Peralada Festival Award for
					Best Music at the BCN International Film Festival.
				</p>
			</div>
		</div>
	);
};
