import React from 'react'
import { Card } from './Card'

export const FilmCard = ({ text }) => {
	return (
		<Card>
			<img src="../assets/raymond-enoksen.jpg" />
			<p>{
				text}
			</p>
		</Card>
	)
}
