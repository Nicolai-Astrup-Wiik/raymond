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
				setProjects(projectList);
				console.log(projectList);
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
			{projects.filter((project) => {
				return project.category === category
			}).map((project, index) => (
				<FilmCard
					key={index}
					title={project.title}
					text={project.text}
					filename={project.filename}
					date={project.date}

				/>
			))}
		</div>
	);
};
