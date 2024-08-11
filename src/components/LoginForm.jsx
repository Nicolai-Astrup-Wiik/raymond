import React from 'react'
import styles from '../styles/LoginForm.module.css'
import { useState } from "react";
import { firebaseLogin } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";

export function LoginForm({ onLoginSuccess }) {
	const navigate = useNavigate();
	const [loginValues, setLoginValues] = useState({ password: "", email: "" });

	const handleEmailInput = (e) => {
		setLoginValues((prev) => ({ ...prev, email: e.target.value }));
	};

	const handlePasswordInput = (e) => {
		setLoginValues((prev) => ({ ...prev, password: e.target.value }));
	};

	const handleLogin = async (e) => {
		e.preventDefault(); // Prevent default form submission
		const result = await firebaseLogin(loginValues.email, loginValues.password);
		if (result.type !== "error") {
			onLoginSuccess(result.user);
			navigate("/admin");
		}
	};

	return (
		<div>
			<form className={styles.LoginForm} onSubmit={handleLogin}>
				<label> e-mail
					<input name="email" onChange={handleEmailInput} type="email" />
				</label>
				<label> Password
					<input name="password" type="password" onChange={handlePasswordInput} />
				</label>
				<button type="submit">Log in</button>
			</form>
		</div>
	)
}
