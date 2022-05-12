import React from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import { arrowStyle, buttonStyle, contentStyle, itemStyle } from './UsersDropdown.css';
import { User, UserStatus } from '../types/User';

interface UsersDropdownProps {
	user: User;
	handleBanUser: (user: User) => void;
	handleUnbanUser: (user: User) => void;
}

export const UsersDropdown: React.FC<UsersDropdownProps> = ({ user, handleBanUser, handleUnbanUser }) => {
	return (
		<DropdownMenu.Root>
			<DropdownMenu.Trigger className={buttonStyle}>
				<HamburgerMenuIcon />
			</DropdownMenu.Trigger>

			<DropdownMenu.Content className={contentStyle} portalled={false}>
				<DropdownMenu.Item className={itemStyle} onSelect={() => handleBanUser(user)} disabled={user.status === UserStatus.BANNED}>
					Ban user
				</DropdownMenu.Item>
				<DropdownMenu.Item className={itemStyle} onSelect={() => handleUnbanUser(user)} disabled={user.status === UserStatus.USER}>
					Unban user
				</DropdownMenu.Item>
				<DropdownMenu.Arrow className={arrowStyle} />
			</DropdownMenu.Content>
		</DropdownMenu.Root>
	);
};