import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addProject } from '../firebase/firebase.js';
import styles from '../styles/Admin.module.css';
import { uploadImage } from '../firebase/firebase.js';

export const Admin = () => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [selectedFile, setSelectedFile] = useState(null);
	const navigate = useNavigate();
	const auth = getAuth();

	const [projectValues, setProjectValues] = useState({
		category: '',
		title: "",
		description: "",
		year: "",
		filename: "",
		spotifyLink: ""
	});

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				setIsAuthenticated(true);
			} else {
				navigate('/login');
			}
		});

		return () => unsubscribe();
	}, [auth, navigate]);

	const handleLogout = async () => {
		try {
			await signOut(auth);
			console.log("User signed out successfully");
			navigate("/login");
		} catch (error) {
			console.error("Error signing out:", error);
		}
	};

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setProjectValues((prev) => ({ ...prev, [name]: value }));
	};

	const handleFileChange = (event) => {
		const file = event.target.files[0];
		setSelectedFile(file);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		await uploadImage(selectedFile, selectedFile.name);
		await addProject({ ...projectValues, filename: selectedFile.name });
		setProjectValues({ category: '', title: '', description: '', year: '', filename: '', spotifyLink: '' });
		// Reset the form fields and selected file
		setProjectValues({ category: '', title: '', description: '', year: '', filename: '', spotifyLink: '' });
		setSelectedFile(null);

		// Reset the file input value
		e.target.reset(); // This resets the entire form including file input
	};

	return (
		<div className={styles.container}>
			<form className={styles.AddForm} onSubmit={handleSubmit}>
				<div className={styles.InputWrapper}>
					<select name="category" onChange={handleInputChange} value={projectValues.category}>
						<option value="">Select category</option>
						<option value="dreamscores">Dreamscores</option>
						<option value="big screen">Big Screen</option>
						<option value="small screen">Small Screen</option>
						<option value="stage">Stage</option>
						<option value="arrangements">Arrangements</option>
					</select>
				</div>
				<div className={styles.InputWrapper}>
					<input placeholder="Title" name="title" onChange={handleInputChange} value={projectValues.title} type="text" />
				</div>
				<div className={styles.InputWrapper}>
					<input placeholder="Description" name="description" onChange={handleInputChange} value={projectValues.description} type="text" />
				</div>
				<div className={styles.InputWrapper}>
					<input name="year" onChange={handleInputChange} value={projectValues.year} type="date" />
				</div>
				<div className={styles.InputWrapper}>
					<input placeholder="Spotify link" name="spotifyLink" onChange={handleInputChange} value={projectValues.spotifyLink} type="text" />
				</div>
				<div className={styles.InputWrapper}>
					<input name="img" type="file" onChange={handleFileChange} />
				</div>
				<div className={styles.ButtonWrapper}>
					<button type="submit">Add Project</button>
					<button type="button" onClick={handleLogout}>Log out</button>
				</div>
			</form>
		</div>
	);
};
