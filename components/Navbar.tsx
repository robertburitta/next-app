import React from 'react';
import Link from 'next/link';
import * as styles from './Navbar.css';

interface NavbarProps {
	children?: React.ReactNode;
	variant?: styles.ButtonVariant;
}

export const Navbar: React.FC<NavbarProps> = ({ children, variant = 'primary' }) => {
	return (
		<nav className={`${styles.variants[variant]}`}>
			<Link href='/'>Next App</Link>
			{children}
		</nav>
	);
};