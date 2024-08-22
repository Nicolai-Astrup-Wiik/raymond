import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addProject } from '../firebase/firebase.js';
import styles from '../styles/Admin.module.css'
import { uploadImage } from '../firebase/firebase.js';

export const Admin = () => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [selectedFile, setSelectedFile] = useState(null);

	const navigate = useNavigate();
	const auth = getAuth();

	const [projectValues, setProjectValues] = useState({ category: '', title: "", description: "", year: "", filename: "", });

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {

				setIsAuthenticated(true);
			} else {

				navigate('/login');
			}
		});

		// Cleanup subscription on unmount
		return () => unsubscribe();
	}, [auth, navigate]);

	const handleLogout = async () => {
		try {
			await signOut(auth);
			console.log("User signed out successfully");
			navigate("/login");  // Redirect to the login page or any other page
		} catch (error) {
			console.error("Error signing out:", error);
		}
	};

	const handleCategoryInput = (e) => {
		setProjectValues((prev) => ({ ...prev, category: e.target.value }));
	};
	const handleTitleInput = (e) => {
		setProjectValues((prev) => ({ ...prev, title: e.target.value }));
	};
	const handleDescriptionInput = (e) => {
		setProjectValues((prev) => ({ ...prev, description: e.target.value }));
	};
	const handleYearInput = (e) => {
		setProjectValues((prev) => ({ ...prev, year: e.target.value }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		await uploadImage(selectedFile, selectedFile.name)
		await addProject({ ...projectValues, filename: selectedFile.name });  // Call the addProject function with the form values
		setProjectValues({ category: '', title: '', description: '', year: '', filename: '', });
	};

	const handleFileChange = (event) => {
		// Access the file(s) from the input element
		const file = event.target.files[0];
		setSelectedFile(file);
	};


	console.log(projectValues)
	return (
		<>
			<form className={styles.AddForm} onSubmit={addProject}>
				<div style={{
					display: "flex",
					flexDirection: "column",
					gap: "10px",
					alignItems: 'center',
					width: "300px"
				}}>



					<select name="category" onChange={handleCategoryInput}>
						<option value="select value">select category</option>
						<option value="dreamscores">Dreamscores</option>
						<option value="big screen">Big Screen</option>
						<option value="small screen">Small Screen</option>
						<option value="stage">Stage</option>
						<option value="arrangements">Arrangements</option>
					</select>


					<input placeholder="Title" name="title" onChange={handleTitleInput} type="text" />


					<input placeholder='description' name="description" onChange={handleDescriptionInput} type="text" />


					<input name="year" onChange={handleYearInput} type="date" />

					<input name="img" type="file" onChange={handleFileChange} />

					<button onClick={handleSubmit} type="submit">Add Project</button>



					<button onClick={handleLogout}>
						Log out
					</button>
				</div>
			</form>
		</>
	);
};
