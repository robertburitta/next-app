import React from 'react';
import Link from 'next/link';
import { Container } from '../components/Container';
import { Navbar } from '../components/Navbar';

interface BaseLayoutProps { children: React.ReactNode; }

const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => {
	return (
		<React.Fragment>
			<Navbar>
				<Link href='/'>Next App</Link>
			</Navbar>
			<Container>
				{children}
				<footer>footer</footer>
			</Container>
		</React.Fragment>
	);
};

export const getBaseLayout = (page: React.ReactNode) => <BaseLayout>{page}</BaseLayout>;