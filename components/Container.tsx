import React from 'react';
import * as styles from './Container.css';

interface ContainerProps {
	children?: React.ReactNode;
	variant?: styles.ContainerVariant;
	size?: styles.ContainerSizes;
}

export const Container: React.FC<ContainerProps> = ({ children, variant = 'normal', size = 'lg' }) => {
	return (
		<div className={`${styles.variants[variant]} ${styles.sizes[size]}`}>
			{children}
		</div>
	);
};