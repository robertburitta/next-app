import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Container } from '../components/Container';

interface AuthLayoutProps { children: React.ReactNode; }

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
	return (
		<Container variant="center" size="xs">
			{children}
			<ToastContainer />
		</Container>
	);
};

export const getAuthLayout = (page: React.ReactNode) => <AuthLayout>{page}</AuthLayout>;