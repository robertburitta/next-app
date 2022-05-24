import React from 'react';
import Link from 'next/link';
import * as styles from './Navbar.css';
import { Routes } from '../router/Routes';

interface NavbarProps {
	children?: React.ReactNode;
	variant?: styles.ButtonVariant;
}

export const Navbar: React.FC<NavbarProps> = ({ children, variant = 'primary' }) => {
	return (
		<nav className={`${styles.variants[variant]}`}>
			<Link href={Routes.HOME}>Next App</Link>
			{children}
		</nav>
	);
};