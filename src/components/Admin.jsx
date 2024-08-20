import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addProject } from '../firebase/firebase.js';
import styles from '../styles/Admin.module.css'

export const Admin = () => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const navigate = useNavigate();
	const auth = getAuth();

	const [projectValues, setProjectValues] = useState({ category: '', title: "", description: "", year: "" });

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
		await addProject(projectValues);  // Call the addProject function with the form values
		setProjectValues({ category: '', title: '', description: '', year: '' });  // Reset form values if needed
	};


	console.log(projectValues)
	return (
		<>
			<form className={styles.AddForm} onSubmit={addProject}>
				<label>
					<select name="category" onChange={handleCategoryInput}>
						<option value="select value">select category</option>
						<option value="dreamscores">Dreamscores</option>
						<option value="big screen">Big Screen</option>
						<option value="small screen">Small Screen</option>
						<option value="stage">Stage</option>
						<option value="arrangements">Arrangements</option>
					</select>
				</label>
				<label>
					<input placeholder="Title" name="title" onChange={handleTitleInput} type="text" />
				</label>
				<label>
					<input placeholder='description' name="description" onChange={handleDescriptionInput} type="text" />
				</label>
				<label>
					<input name="year" onChange={handleYearInput} type="date" />
				</label>


				<button onClick={handleSubmit} type="submit">Add Project</button>
			</form>



			<button onClick={handleLogout}>
				Log out
			</button>
		</>
	);
};
