import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './transitions.css'; // Import your transition styles

const FadeTransition = ({ children, location }) => {
	return (
		<TransitionGroup>
			<CSSTransition
				key={location.key}
				timeout={300}
				classNames="fade"
			>
				{children}
			</CSSTransition>
		</TransitionGroup>
	);
};

export default FadeTransition;
