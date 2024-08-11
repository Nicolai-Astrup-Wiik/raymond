import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Admin = () => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const navigate = useNavigate();
	const auth = getAuth();

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				// User is signed in, set the authenticated state to true
				setIsAuthenticated(true);
			} else {
				// User is signed out, redirect to login page
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

	return (
		<>
			<form className={styles.LoginForm} onSubmit={handleLogin}>
				<label> e-mail
					<input name="email" onChange={handleEmailInput} type="email" />
				</label>
				<label> Password
					<input name="password" type="password" onChange={handlePasswordInput} />
				</label>
				<button type="submit">Log in</button>
			</form>



			<button onClick={handleLogout}>
				Log out
			</button>
		</>
	);
};
