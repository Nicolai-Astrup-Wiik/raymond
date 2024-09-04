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
		spotifyLink: "",
		videoLink: ""
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

		try {
			// Debugging output
			console.log('Form values before submission:', projectValues);

			// Validate video link if necessary
			const videoLink = projectValues.videoLink.trim();
			if (videoLink && !/^https?:\/\/(www\.)?(youtube\.com\/watch\?v=|vimeo\.com\/\d+)/.test(videoLink)) {
				console.error('Invalid YouTube or Vimeo link');
				return;
			}

			// Upload image if selected
			if (selectedFile) {
				await uploadImage(selectedFile, selectedFile.name);
			}

			// Add project
			await addProject({ ...projectValues, filename: selectedFile ? selectedFile.name : '' });

			// Clear form state and file selection
			setProjectValues({ category: '', title: '', description: '', year: '', filename: '', spotifyLink: '', videoLink: "" });
			setSelectedFile(null);
			e.target.reset();

			console.log('Project added successfully!');
		} catch (error) {
			console.error('Error adding project:', error);
		}
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
					<input
						placeholder="YouTube/Vimeo link"
						name="videoLink"
						onChange={handleInputChange}
						value={projectValues.videoLink}
						type="text"
					/>
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
