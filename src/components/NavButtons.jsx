import React, { useRef, useEffect, useState } from 'react';
import styles from '../styles/NavButtons.module.css';
import { useNavigate, useLocation } from 'react-router-dom';

export const NavButtons = () => {
	const navigate = useNavigate();
	const location = useLocation(); // Use location to track pathname
	const carouselRef = useRef(null);
	const buttonRefs = useRef([]);
	const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
	const [activeButton, setActiveButton] = useState(() => {
		const path = location.pathname;
		return path.substring(1) || 'dreamscores';
	});

	// Mapping between button display names and their IDs
	const buttonMapping = {
		'Dreamscores': 'dreamscores',
		'Big Screen': 'bigScreen',
		'Small Screen': 'smallScreen',
		'Stage': 'stage',
		'Licensing': 'licensing'
	};

	useEffect(() => {
		const checkScreenWidth = () => {
			setIsMobile(window.innerWidth <= 768);
		};

		checkScreenWidth(); // Initial check on load
		window.addEventListener('resize', checkScreenWidth); // Add event listener on resize

		return () => {
			window.removeEventListener('resize', checkScreenWidth); // Clean up event listener on unmount
		};
	}, []);

	useEffect(() => {
		// Update active state based on the current path
		setActiveButton(location.pathname.substring(1) || 'dreamscores');

		if (isMobile) {
			const observer = new IntersectionObserver(
				(entries) => {
					entries.forEach(entry => {
						if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
							// Ensure navigation only if the button is not already active
							if (entry.target.id !== activeButton) {
								handleNavigation(entry.target.id);
							}
						}
					});
				},
				{
					root: carouselRef.current,
					threshold: 0.5
				}
			);

			buttonRefs.current.forEach(button => {
				if (button) observer.observe(button);
			});

			return () => {
				buttonRefs.current.forEach(button => {
					if (button) observer.unobserve(button);
				});
			};
		}
	}, [isMobile, location.pathname, activeButton]);

	const handleNavigation = (buttonId) => {
		setActiveButton(buttonId); // Update active button
		navigate(`/${buttonId}`);
	};

	const handleClick = (buttonId) => {
		handleNavigation(buttonId);
	};

	// Determine the active class based on the activeButton state
	const getButtonClass = (buttonId) => {
		return buttonId === activeButton ? styles['nav-button-active'] : styles['nav-button'];
	};

	return (
		<div className={styles['carousel-container']}>
			<div className={`${styles['main-button-container']} ${isMobile ? styles['carousel'] : ''}`} ref={carouselRef}>
				{Object.entries(buttonMapping).map(([label, id]) => (
					<button
						key={id}
						id={id}
						ref={el => {
							if (el) {
								buttonRefs.current.push(el);
								// Ensure that each button is only added once
								buttonRefs.current = Array.from(new Set(buttonRefs.current));
							}
						}}
						className={getButtonClass(id)}
						onClick={() => handleClick(id)}
					>
						{label} {/* Display label with spaces */}
					</button>
				))}
			</div>
		</div>
	);
};
