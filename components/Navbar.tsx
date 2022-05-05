import React from 'react';
import * as styles from './Navbar.css';

interface NavbarProps {
	children?: React.ReactNode;
	variant?: styles.ButtonVariant;
}

export const Navbar: React.FC<NavbarProps> = ({ children, variant = 'primary' }: NavbarProps) => {
	return (
		<nav className={`${styles.variants[variant]}`}>
			{children}
		</nav>
	);
};