import React from 'react';
import * as styles from './Button.css';

interface ButtonProps {
	children?: React.ReactNode;
	variant?: styles.ButtonVariant;
	isPending?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ children, variant = 'green', isPending = false }: ButtonProps) => {
	return (
		<button className={`${styles.variants[variant]}`}>
			{isPending ? 'Loading...' : children}
		</button>
	);
};