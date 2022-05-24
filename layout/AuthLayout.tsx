import React from 'react';
import Link from 'next/link';
import { Container } from '../components/Container';
import { Navbar } from '../components/Navbar';
import { Routes } from '../router/Routes';

interface AuthLayoutProps { children: React.ReactNode; }

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
	return (
		<React.Fragment>
			<Navbar>
				<Link href={Routes.SIGNIN}>Sign in</Link>
				<Link href={Routes.SIGNUP}>Sign up</Link>
			</Navbar>
			<Container variant="center" size="xs">
				{children}
			</Container>
		</React.Fragment>
	);
};

export const getAuthLayout = (page: React.ReactNode) => <AuthLayout>{page}</AuthLayout>;