import React from 'react';
import { User, UserStatus } from '../types/User';
import { tableStyle, tableRow, tableCol } from './UsersList.css';

interface UsersListProps {
	users: User[];
	handleBanUser: (user: User) => void;
	handleUnbanUser: (user: User) => void;
}

export const UsersList: React.FC<UsersListProps> = ({ users, handleBanUser, handleUnbanUser }) => {
	return (
		<table className={tableStyle}>
			<thead>
				<tr>
					<th></th>
					<th>Email</th>
					<th>First name</th>
					<th>Last name</th>
					<th></th>
				</tr>
			</thead>
			<tbody>
				{users.map((u, index) => (
					<tr key={index} className={tableRow}>
						<td className={tableCol}>{index + 1}</td>
						<td className={tableCol}>{u.email}</td>
						<td className={tableCol}>{u.firstName}</td>
						<td className={tableCol}>{u.lastName}</td>
						<td className={tableCol}>
							<button onClick={() => u.status === UserStatus.USER ? handleBanUser(u) : handleUnbanUser(u)}>
								{u.status === UserStatus.USER ? 'Ban user' : 'Unban user'}
							</button>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};