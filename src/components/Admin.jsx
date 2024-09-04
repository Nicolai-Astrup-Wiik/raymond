import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addProject, uploadImage } from '../firebase/firebase.js';
import { getAuth, signOut } from 'firebase/auth';
import styles from '../styles/Admin.module.css';

export const Admin = ({ isAuthenticated }) => {
	const navigate = useNavigate();
	const auth = getAuth();
	useEffect(() => {
		// Redirect to login if not authenticated
		if (!isAuthenticated) {
			navigate('/login');
		}
	}, [isAuthenticated, navigate]);

	const [selectedFile, setSelectedFile] = useState(null);
	const [errors, setErrors] = useState({
		category: '',
		title: '',
		description: '',
		year: '',
		videoLink: '',
		img: ''
	});
	const [projectValues, setProjectValues] = useState({
		category: '',
		title: '',
		description: '',
		year: '',
		filename: '',
		spotifyLink: '',
		videoLink: ''
	});
	const [successMessage, setSuccessMessage] = useState(''); // Add state for success message


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

	const validateForm = () => {
		const newErrors = { ...errors };

		// Validate category
		if (projectValues.category === '') {
			newErrors.category = 'You need to pick a category';
		} else {
			newErrors.category = '';
		}

		// Validate title
		if (!projectValues.title) {
			newErrors.title = 'Please enter a title';
		} else {
			newErrors.title = '';
		}

		// Validate year
		if (!projectValues.year) {
			newErrors.year = 'Please enter a year';
		} else {
			newErrors.year = '';
		}

		// Validate image and video link
		if (!selectedFile && !projectValues.videoLink) {
			newErrors.img = 'You need to provide either an image or a video link';
		} else if (selectedFile && projectValues.videoLink) {
			newErrors.img = 'You cannot provide both an image and a video link';
		} else {
			newErrors.img = '';
		}

		// Validate video link format
		const videoLink = projectValues.videoLink.trim();
		if (videoLink && !/^https?:\/\/(www\.)?(youtube\.com\/watch\?v=|vimeo\.com\/\d+)/.test(videoLink)) {
			newErrors.videoLink = 'Invalid YouTube or Vimeo link.';
		} else {
			newErrors.videoLink = '';
		}

		// Update state with the new errors
		setErrors(newErrors);

		// Return boolean indicating if there are errors
		return Object.values(newErrors).every(error => error === '');
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		// Validate form
		const isValid = validateForm();
		if (!isValid) {
			console.error('Form has validation errors:', errors);
			return; // Stop submission if there are errors
		}

		// Debugging output
		console.log('Form values before submission:', projectValues);

		try {
			// Upload image if selected
			if (selectedFile) {
				console.log('Uploading image:', selectedFile.name);
				await uploadImage(selectedFile, selectedFile.name);
			}

			// Add project
			console.log('Adding project with values:', { ...projectValues, filename: selectedFile ? selectedFile.name : '' });
			await addProject({ ...projectValues, filename: selectedFile ? selectedFile.name : '' });

			// Clear form state and file selection
			setProjectValues({ category: '', title: '', description: '', year: '', filename: '', spotifyLink: '', videoLink: "" });
			setSelectedFile(null);
			e.target.reset(); // This might not be necessary if state is properly managed

			// Set success message
			setSuccessMessage('Project submitted successfully!');

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
					{errors.category && <p className={styles.errorMessage}>{errors.category}</p>}
				</div>
				<div className={styles.InputWrapper}>
					<input placeholder="Title" name="title" onChange={handleInputChange} value={projectValues.title} type="text" />
					{errors.title && <p className={styles.errorMessage}>{errors.title}</p>}
				</div>
				<div className={styles.InputWrapper}>
					<input placeholder="Description" name="description" onChange={handleInputChange} value={projectValues.description} type="text" />
					{errors.description && <p className={styles.errorMessage}>{errors.description}</p>}
				</div>
				<div className={styles.InputWrapper}>
					<input name="year" onChange={handleInputChange} value={projectValues.year} type="date" />
					{errors.year && <p className={styles.errorMessage}>{errors.year}</p>}
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
					{errors.videoLink && <p className={styles.errorMessage}>{errors.videoLink}</p>}
				</div>
				<div className={styles.InputWrapper}>
					<input name="img" type="file" onChange={handleFileChange} />
					{errors.img && <p className={styles.errorMessage}>{errors.img}</p>}
				</div>
				<div className={styles.ButtonWrapper}>
					<button type="submit">Add Project</button>

				</div>
				{successMessage && <p className={styles.successMessage}>{successMessage}</p>} {/* Display success message */}
			</form>

		</div>
	);
};
