import React from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import * as styles from './Message.css';
import { useMessages } from '../../hooks/useMessages';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

interface MessageProps {
	children?: React.ReactNode;
	roomId: string;
	messageId: string;
	author: string;
}

export const Message: React.FC<MessageProps> = ({ children, messageId, roomId, author }) => {
	const { messages: { handleRemoveMessage, handleRemoveAllMessages } } = useMessages();
	const user = useSelector((state: RootState) => state.user.user);

	return (
		<React.Fragment>
			{user.isAdmin ?
				<DropdownMenu.Root modal={false}>
					<DropdownMenu.Trigger asChild>
						{children}
					</DropdownMenu.Trigger>
					<DropdownMenu.Content side='left' className={styles.contentStyle}>
						<DropdownMenu.Item className={styles.itemStyle} onSelect={() => handleRemoveMessage(roomId, messageId)}>
							Delete message
						</DropdownMenu.Item>
						<DropdownMenu.Item className={styles.itemStyle} onSelect={() => handleRemoveAllMessages(roomId, author)}>
							Delete all messages
						</DropdownMenu.Item>
						<DropdownMenu.Arrow className={styles.arrowStyle} />
					</DropdownMenu.Content>
				</DropdownMenu.Root>
				:
				children
			}
		</React.Fragment>
	);
};
