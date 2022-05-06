import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { useUsers } from '../hooks/useUsers';
import { RootState } from '../store';

const AdminPage = () => {
	const { users, handleBanUser } = useUsers();
	const router = useRouter();
	const isAdmin = useSelector((store: RootState) => store.user?.isAdmin);

	useEffect(() => {
		// checks if the user is authenticated
		isAdmin ? router.push('/') : router.push('/signin');
	}, []);

	return (
		<div>{users.map(u => <li key={u.id}>{u.email}<button onClick={() => handleBanUser(u.id)}></button></li>)}</div>
	);
};

export default AdminPage;