import React, { useEffect, useState } from 'react';
import { getFirestore, collection, getDocs, doc, deleteDoc } from 'firebase/firestore';
import { FilmCard } from './FilmCard';
import styles from '../styles/ProjectList.module.css'

export const ProjectsList = ({ category, user }) => {
	const [projects, setProjects] = useState([]);
	const db = getFirestore();

	useEffect(() => {
		const fetchProjects = async () => {
			try {
				const projectsCollection = collection(db, 'projects');
				const projectSnapshot = await getDocs(projectsCollection);
				const projectList = projectSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

				// Ensure 'year' is valid and sort
				const sortedProjects = projectList
					.filter(project => project.year) // Ensure 'year' exists
					.sort((a, b) => {
						const yearA = parseInt(a.year.split('-')[0], 10);
						const yearB = parseInt(b.year.split('-')[0], 10);
						return yearB - yearA; // Sort in descending order (latest year first)
					});

				setProjects(sortedProjects);
			} catch (error) {
				console.error('Error fetching projects:', error);
			}
		};

		fetchProjects();
	}, [db]);

	const handleDelete = async (id) => {
		try {
			await deleteDoc(doc(db, 'projects', id));
			setProjects(projects.filter(project => project.id !== id)); // Remove deleted project from state
		} catch (error) {
			console.error('Error deleting project:', error);
		}
	};

	return (
		<div className={styles['projectListContainer']} >
			{projects.filter((project) => project.category === category).map((project) => (
				<FilmCard
					key={project.id}
					title={project.title}
					text={project.description}
					filename={project.filename}
					year={project.year}
					spotifyLink={project.spotifyLink}
					onDelete={() => handleDelete(project.id)}
					isAuthenticated={!!user} // Pass the user state to FilmCard
				/>
			))}
		</div>
	);
};
