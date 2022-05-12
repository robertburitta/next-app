import React from 'react';
import { useUsers } from '../hooks/useUsers';
import { PageWithLayout } from '../types/PageWithLayout';
import { getAdminLayout } from '../layout/AdminLayout';
import { UsersList } from '../components/UsersList';
import { toast } from 'react-toastify';

const AdminPage: PageWithLayout = () => {
	const { users, handleBanUser, handleUnbanUser, getUsers } = useUsers({
		onSuccess: (msg) => {
			toast.success(msg);
		},
		onError: (err) => {
			toast.error(`${err}`);
		}
	});

	return (
		<React.Fragment>
			<h2>Users list</h2>
			<UsersList users={users} handleBanUser={handleBanUser} handleUnbanUser={handleUnbanUser} />
		</React.Fragment>
	);
};

AdminPage.getLayout = getAdminLayout;

export default AdminPage;