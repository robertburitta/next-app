import React from 'react';

interface ButtonProps {
	children: React.ReactNode;
	color: string;
}

export const Button: React.FC<ButtonProps> = (props) => {
	return (
		<div>Button</div>
	);
};