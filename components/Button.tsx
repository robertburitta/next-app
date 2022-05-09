import React from 'react';
import * as styles from './Button.css';

interface ButtonProps {
	children?: React.ReactNode;
	variant?: styles.ButtonVariant;
	isPending?: boolean;
	onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ children, variant = 'green', isPending = false, onClick }) => {
	return (
		<button className={`${styles.variants[variant]}`} onClick={onClick}>
			{isPending ? 'Loading...' : children}
		</button>
	);
};