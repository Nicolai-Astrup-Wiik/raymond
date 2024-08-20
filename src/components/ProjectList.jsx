import React, { useEffect, useState } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { FilmCard } from './FilmCard';

export const ProjectsList = () => {
	const [projects, setProjects] = useState([]);
	const db = getFirestore();

	useEffect(() => {
		const fetchProjects = async () => {
			try {
				const projectsCollection = collection(db, 'projects');
				const projectSnapshot = await getDocs(projectsCollection);
				const projectList = projectSnapshot.docs.map(doc => doc.data());
				setProjects(projectList);
				console.log(projectList);
			} catch (error) {
				console.error('Error fetching projects:', error);
			}
		};

		fetchProjects();
	}, [db]);

	return (
		<div>
			{projects.map((project, index) => (
				<FilmCard
					key={index}
					title={project.title}
					text={project.text}
				/>
			))}
		</div>
	);
};
