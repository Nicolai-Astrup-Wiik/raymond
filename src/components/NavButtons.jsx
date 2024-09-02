import React, { useRef, useEffect, useState } from 'react';
import styles from '../styles/NavButtons.module.css';
import { useNavigate, useLocation } from 'react-router-dom';

export const NavButtons = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const carouselRef = useRef(null);
	const buttonRefs = useRef([]);
	const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
	const [activeButton, setActiveButton] = useState(() => {
		const path = location.pathname;
		return path.substring(1) || 'dreamscores';
	});
	const [isScrolling, setIsScrolling] = useState(false);

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

		checkScreenWidth();
		window.addEventListener('resize', checkScreenWidth);

		return () => {
			window.removeEventListener('resize', checkScreenWidth);
		};
	}, []);

	useEffect(() => {
		// Update active state based on the current path
		setActiveButton(location.pathname.substring(1) || 'dreamscores');

		if (isMobile) {
			const observer = new IntersectionObserver(
				(entries) => {
					let mostVisible = null;
					let maxIntersectionRatio = 0;

					entries.forEach(entry => {
						if (entry.isIntersecting && entry.intersectionRatio > maxIntersectionRatio) {
							maxIntersectionRatio = entry.intersectionRatio;
							mostVisible = entry.target;
						}
					});

					if (mostVisible && mostVisible.id !== activeButton) {
						handleNavigation(mostVisible.id);
					}
				},
				{
					root: carouselRef.current,
					threshold: [0.5]
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
		setActiveButton(buttonId);
		navigate(`/${buttonId}`);
	};

	const handleClick = (buttonId) => {
		if (!isScrolling) {
			handleNavigation(buttonId);
		}
	};

	useEffect(() => {
		let scrollTimeout;

		const handleScroll = () => {
			setIsScrolling(true);
			clearTimeout(scrollTimeout);
			scrollTimeout = setTimeout(() => setIsScrolling(false), 300);
		};

		const carousel = carouselRef.current;

		if (carousel) {
			carousel.addEventListener('scroll', handleScroll);
		}

		return () => {
			if (carousel) {
				carousel.removeEventListener('scroll', handleScroll);
			}
		};
	}, []);

	const getButtonClass = (buttonId) => {
		return buttonId === activeButton ? styles['nav-button-active'] : styles['nav-button'];
	};

	return (
		<div className={styles['carousel-container']}>
			<div className={`${styles['main-button-container']} ${isMobile ? styles['carousel-active'] : ''}`} ref={carouselRef}>
				{Object.entries(buttonMapping).map(([label, id]) => (
					<button
						key={id}
						id={id}
						ref={el => {
							if (el) {
								buttonRefs.current.push(el);
								buttonRefs.current = Array.from(new Set(buttonRefs.current));
							}
						}}
						className={getButtonClass(id)}
						onClick={() => handleClick(id)}
						disabled={isScrolling}
					>
						{label}
					</button>
				))}
			</div>
		</div>
	);
};

