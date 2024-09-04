import React, { useRef, useEffect, useState } from 'react';
import styles from '../../styles/NavButtons.module.css';
import { useNavigate, useLocation } from 'react-router-dom';

export const NavButtons = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const carouselRef = useRef(null);
	const buttonRefs = useRef([]);
	const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
	const [activeButton, setActiveButton] = useState(() => {
		const path = location.pathname;
		return path.substring(1) || '/';
	});
	const [isScrolling, setIsScrolling] = useState(false);
	const [observer, setObserver] = useState(null);

	const buttonMapping = {
		'Home': '/',
		'Dreamscores': 'dreamscores',
		'Big Screen': 'bigScreen',
		'Small Screen': 'smallScreen',
		'Stage': 'stage',
		'Licensing': 'licensing'
	};


	useEffect(() => {
		const checkScreenWidth = () => {
			const isCurrentMobile = window.innerWidth <= 768;
			setIsMobile(isCurrentMobile);

			// If switching from mobile to desktop, handle re-initialization
			if (!isCurrentMobile && observer) {
				observer.disconnect();
				setObserver(null);
			}
		};

		checkScreenWidth();
		window.addEventListener('resize', checkScreenWidth);

		return () => {
			window.removeEventListener('resize', checkScreenWidth);
			if (observer) {
				observer.disconnect();
			}
		};
	}, [observer]);

	useEffect(() => {
		// Update active state based on the current path
		setActiveButton(location.pathname.substring(1) || '/');
	}, [location.pathname]);

	useEffect(() => {
		if (isMobile) {
			const newObserver = new IntersectionObserver(
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
				if (button) newObserver.observe(button);
			});

			setObserver(newObserver);

			return () => {
				newObserver.disconnect();
			};
		}
	}, [isMobile, activeButton]);

	useEffect(() => {
		if (!isMobile) {
			// Center the active button on desktop view
			const activeButtonElement = buttonRefs.current.find(button => button.id === activeButton);
			if (activeButtonElement && carouselRef.current) {
				carouselRef.current.scrollTo({
					left: activeButtonElement.offsetLeft - (carouselRef.current.offsetWidth / 2) + (activeButtonElement.offsetWidth / 2),
					behavior: 'smooth'
				});
			}
		}
	}, [isMobile, activeButton]);

	const handleNavigation = (buttonId) => {
		// Check if buttonId is '/' to handle the "Home" button separately
		const path = buttonId === '/' ? '/' : `/${buttonId}`;

		// Only navigate if the path is different from the current location
		if (path !== location.pathname) {
			setActiveButton(buttonId);
			navigate(path);
		}
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
					(isMobile || id !== '/') ? (
						<button
							key={id}
							id={id}
							ref={el => {
								if (el) {
									buttonRefs.current.push(el);
									buttonRefs.current = Array.from(new Set(buttonRefs.current)); // Remove duplicates
								}
							}}
							className={getButtonClass(id)}
							onClick={() => handleClick(id)}
							disabled={isScrolling}
						>
							{label}
						</button>
					) : null
				))}

			</div>
		</div>
	);
};
