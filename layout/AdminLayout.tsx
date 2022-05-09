import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { Container } from '../components/Container';
import { Navbar } from '../components/Navbar';

interface AdminLayoutProps { children: React.ReactNode; }

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
	const router = useRouter();
	const isAdmin = useSelector((store: RootState) => store.user?.isAdmin);

	useEffect(() => {
		isAdmin ? router.push('/admin') : router.push('/signin');
	}, [isAdmin, router]);

	return (
		<React.Fragment>
			<Navbar />
			<Container size="md">
				{children}
			</Container>
		</React.Fragment>
	);
};

export const getAdminLayout = (page: React.ReactNode) => <AdminLayout>{page}</AdminLayout>;