import React from 'react';
import styled from '@emotion/styled';

interface ButtonProps {
	children?: React.ReactNode;
	color: string;
}

export const Button: React.FC<ButtonProps> = (props) => {
	const Button = styled.button`
		width: 100px;
		height: 100px;	
	`;

	return (
		<Button />
	);
};