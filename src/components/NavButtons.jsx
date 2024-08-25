import React, { useRef, useEffect, useState } from 'react';
import styles from '../styles/NavButtons.module.css';
import { useNavigate } from "react-router-dom";

export const NavButtons = () => {
	const navigate = useNavigate();
	const carouselRef = useRef(null);
	const buttonRefs = useRef([]);
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		// Function to check screen width
		const checkScreenWidth = () => {
			setIsMobile(window.innerWidth <= 768); // Set to true if screen width is less than or equal to 768px
		};

		checkScreenWidth(); // Initial check on load
		window.addEventListener('resize', checkScreenWidth); // Add event listener on resize

		return () => {
			window.removeEventListener('resize', checkScreenWidth); // Clean up event listener on unmount
		};
	}, []);

	useEffect(() => {
		if (isMobile) {
			const observer = new IntersectionObserver(
				(entries) => {
					entries.forEach((entry) => {
						if (entry.isIntersecting) {
							const buttonId = entry.target.id;
							handleNavigation(buttonId);
						}
					});
				},
				{
					root: carouselRef.current,
					threshold: 0.5, // Adjust this value to define when the button is "centered"
				}
			);

			buttonRefs.current.forEach((button) => {
				observer.observe(button);
			});

			return () => {
				if (buttonRefs.current) {
					buttonRefs.current.forEach((button) => observer.unobserve(button));
				}
			};
		}
	}, [isMobile]);

	const handleNavigation = (buttonId) => {
		const routeMap = {
			dreamscores: "/dreamscores",
			big: "/bigscreen",
			small: "/smallscreen",
			stage: "/stage",
			arrangment: "/arrangements",
		};
		navigate(routeMap[buttonId]);
	};

	const handleClick = (buttonId) => {
		handleNavigation(buttonId);
	};

	const dreamClass = window.location.toString().includes("dreamscores") ? 'nav-button-active' : 'nav-button';
	const bigClass = window.location.toString().includes("big screen") ? 'nav-button-active' : 'nav-button';
	const smallClass = window.location.toString().includes("small screen") ? 'nav-button-active' : 'nav-button';
	const stageClass = window.location.toString().includes("stage") ? 'nav-button-active' : 'nav-button';
	const arrClass = window.location.toString().includes("arrangements") ? 'nav-button-active' : 'nav-button';

	return (
		<div className={styles['carousel-container']}>
			<div className={`${styles['main-button-container']} ${isMobile ? styles['carousel'] : ''}`} ref={carouselRef}>
				<button
					ref={(el) => (buttonRefs.current[0] = el)}
					id='dreamscores'
					className={styles[dreamClass]}
					onClick={() => handleClick('dreamscores')} // Add onClick handler
				>
					Dreamscores
				</button>
				<button
					ref={(el) => (buttonRefs.current[1] = el)}
					id='big'
					className={styles[bigClass]}
					onClick={() => handleClick('big')} // Add onClick handler
				>
					Big Screen
				</button>
				<button
					ref={(el) => (buttonRefs.current[2] = el)}
					id='small'
					className={styles[smallClass]}
					onClick={() => handleClick('small')} // Add onClick handler
				>
					Small Screen
				</button>
				<button
					ref={(el) => (buttonRefs.current[3] = el)}
					id='stage'
					className={styles[stageClass]}
					onClick={() => handleClick('stage')} // Add onClick handler
				>
					Stage
				</button>
				<button
					ref={(el) => (buttonRefs.current[4] = el)}
					id='arrangment'
					className={styles[arrClass]}
					onClick={() => handleClick('arrangment')} // Add onClick handler
				>
					Arrangements
				</button>
			</div>
		</div>
	);
};
