import React, { useEffect, useState } from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import * as styles from './RoomTable.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { Room } from './Room';
import { RoomType } from '../../types/RoomType';
import { useMessages } from '../../hooks/useMessages';

export const RoomTable = () => {
	const rooms: RoomType[] = useSelector((state: RootState) => state.messages.rooms);
	const { rooms: { getRooms } } = useMessages();
	const [openTab, setOpenTab] = useState('');

	useEffect(() => {
		getRooms();
		setOpenTab(rooms[0]?.roomId);
	}, []);

	return (
		<Tabs.Root className={styles.root} value={openTab} onValueChange={(e) => setOpenTab(e)}>
			<Tabs.List className={styles.list}>
				{rooms?.map((room: RoomType) =>
					<Tabs.Trigger className={`${styles.trigger} ${room.roomId === openTab ? 'selectedTab' : ''}`} key={`trigger-${room.roomId}`} value={room.roomId}>{room.name}</Tabs.Trigger>
				)}
			</Tabs.List>
			{rooms?.map((room: RoomType) =>
				<Tabs.Content className={styles.content} key={`content-${room.roomId}`} value={room.roomId}>
					<Room id={room.roomId} messages={room.messages} name={room.name} />
				</Tabs.Content>
			)}
		</Tabs.Root>
	);
};
