import React, { useEffect, useState } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { FilmCard } from './FilmCard';

export const ProjectsList = ({ category }) => {
	const [projects, setProjects] = useState([]);
	const db = getFirestore();

	useEffect(() => {
		const fetchProjects = async () => {
			try {
				const projectsCollection = collection(db, 'projects');
				const projectSnapshot = await getDocs(projectsCollection);
				const projectList = projectSnapshot.docs.map(doc => doc.data());

				// Debugging: Log fetched data
				console.log('Fetched Projects:', projectList);

				// Ensure 'year' is valid and sort
				const sortedProjects = projectList
					.filter(project => project.year) // Ensure 'year' exists
					.sort((a, b) => {
						// Extract the year as a number
						const yearA = parseInt(a.year.split('-')[0], 10);
						const yearB = parseInt(b.year.split('-')[0], 10);

						// Compare the years numerically
						return yearB - yearA; // Sort in descending order (latest year first)
					});

				// Debugging: Log sorted data
				console.log('Sorted Projects:', sortedProjects);

				setProjects(sortedProjects);
			} catch (error) {
				console.error('Error fetching projects:', error);
			}
		};

		fetchProjects();
	}, [db]);

	return (
		<div style={{
			display: "flex",
			flexDirection: "column",
			gap: "10px"
		}}>
			{projects.filter((project) => project.category === category).map((project, index) => (
				<FilmCard
					key={index}
					title={project.title}
					text={project.description}
					filename={project.filename}
					year={project.year}
					spotifyLink={project.spotifyLink}
				/>
			))}
		</div>
	);
};
