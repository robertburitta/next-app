import React from 'react';
import { useUsers } from '../hooks/useUsers';
import { PageWithLayout } from '../types/PageWithLayout';
import { getAdminLayout } from '../layout/AdminLayout';
import { UsersList } from '../components/UsersList';

const AdminPage: PageWithLayout = () => {
	const { users, handleBanUser, handleUnbanUser } = useUsers();

	return (
		<React.Fragment>
			<h2>Users list</h2>
			<UsersList users={users} handleBanUser={handleBanUser} handleUnbanUser={handleUnbanUser} />
		</React.Fragment>
	);
};

AdminPage.getLayout = getAdminLayout;

export default AdminPage;