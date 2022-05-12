import React from 'react';
import { User } from '../types/User';
import { UsersDropdown } from './UsersDropdown';
import { tableStyle, tableRow, tableCol } from './UsersList.css';

interface UsersListProps {
	users: User[];
	handleBanUser: (user: User) => void;
	handleUnbanUser: (user: User) => void;
}

export const UsersList: React.FC<UsersListProps> = ({ users, ...props }) => {
	return (
		<table className={tableStyle}>
			<thead>
				<tr>
					<th></th>
					<th>Email</th>
					<th>First name</th>
					<th>Last name</th>
					<th>Status</th>
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
						<td className={tableCol}>{u.status}</td>
						<td className={tableCol}>
							<UsersDropdown user={u} {...props} />
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};