import React from 'react';
import * as styles from './Button.css';

interface ButtonProps {
	children?: React.ReactNode;
	variant?: styles.ButtonVariant;
}

export const Button: React.FC<ButtonProps> = ({ children, variant = 'green' }) => {
	return (
		<button className={`${styles.variants[variant]}`}>
			{children}
		</button>
	);
};