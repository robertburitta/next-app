import React from 'react';
import Link from 'next/link';
import { Container } from '../components/Container';
import { Navbar } from '../components/Navbar';

interface AuthLayoutProps { children: React.ReactNode; }

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
	return (
		<React.Fragment>
			<Navbar>
				<Link href='/signin'>Sign in</Link>
				<Link href='/signup'>Sign up</Link>
			</Navbar>
			<Container variant="center" size="xs">
				{children}
			</Container>
		</React.Fragment>
	);
};

export const getAuthLayout = (page: React.ReactNode) => <AuthLayout>{page}</AuthLayout>;