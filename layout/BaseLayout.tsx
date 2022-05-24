import React, { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { Container } from '../components/Container';
import { Navbar } from '../components/Navbar';
import { Routes } from '../router/Routes';

interface BaseLayoutProps { children: React.ReactNode; }

const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => {
	const router = useRouter();
	const { isLoggedIn, isAdmin } = useSelector((store: RootState) => store.user);

	useEffect(() => {
		isLoggedIn ? router.push('/') : router.push('/signin');
	}, []);

	return (
		<React.Fragment>
			<Navbar>
				{isAdmin && <Link href={Routes.ADMIN}>Admin panel</Link>}
			</Navbar>
			<Container size='sm'>
				{children}
			</Container>
		</React.Fragment>
	);
};

export const getBaseLayout = (page: React.ReactNode) => <BaseLayout>{page}</BaseLayout>;