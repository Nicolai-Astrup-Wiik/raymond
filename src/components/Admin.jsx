import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addProject, uploadImage } from '../firebase/firebase.js';
import { getAuth, signOut } from 'firebase/auth';
import styles from '../styles/Admin.module.css';

export const Admin = ({ isAuthenticated }) => {
	const [selectedFile, setSelectedFile] = useState(null);
	const [projectValues, setProjectValues] = useState({
		category: '',
		title: "",
		description: "",
		year: "",
		filename: "",
		spotifyLink: ""
	});
	const navigate = useNavigate();
	const auth = getAuth();

	const handleLogout = async () => {
		try {
			await signOut(auth);
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
		setSelectedFile(null);
		e.target.reset();
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
						<option value="licensing">Licensing</option>
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
					{isAuthenticated && (
						<button type="button" onClick={handleLogout}>Log out</button>
					)}
				</div>
			</form>
		</div>
	);
};
