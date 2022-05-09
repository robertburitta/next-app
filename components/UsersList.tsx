import React from 'react';
import { User, UserStatus } from '../types/User';
import { list, listItem, paragraph } from './UsersList.css';

interface UsersListProps {
	users: User[];
	handleBanUser: (id: string) => void;
	handleUnbanUser: (id: string) => void;
}

export const UsersList: React.FC<UsersListProps> = ({ users, handleBanUser, handleUnbanUser }) => {
	return (
		<ul className={list}>
			{users.map((u) =>
				<li key={u.id} className={listItem}>
					<p className={paragraph}>{u.email}</p>
					<button onClick={() => u.status === UserStatus.USER ? handleBanUser(u.id) : handleUnbanUser(u.id)}>
						{u.status === UserStatus.USER ? 'Ban user' : 'Unban user'}
					</button>
				</li>
			)}
		</ul>
	);
};