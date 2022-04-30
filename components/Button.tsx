import React from 'react';
import * as styles from "./Button.css";


interface ButtonProps {
	children?: React.ReactNode;
	color?: styles.ColorType;
	variant?: styles.ButtonVariant;
}

export const Button: React.FC<ButtonProps> = ({ children, color = 'base', variant = 'primary' }) => {

	return <button className={`${styles.variants[variant]} ${styles.colors[color]}`}>{children}</button>;
};