import React from 'react';
import * as styles from './Input.css';

interface InputProps {
	type?: string;
	variant?: styles.InputVariant;
}

export const Input: React.FC<InputProps> = ({ type = 'text', variant = 'primary' }) => {
	return (
		<input type={type} className={`${styles.variants[variant]}`} />
	);
};