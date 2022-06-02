import React, { useEffect } from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { Room } from "./Room";
import { RoomType } from "../../types/RoomType";
import { useMessages } from "../../hooks/useMessages";



export const RoomTable = () => {
	const rooms = useSelector((state: RootState) => state.messages.rooms);
	const { rooms: { getRooms } } = useMessages();
	console.log(rooms);
	useEffect(() => { getRooms(); }, []);
	return (
		<Tabs.Root>
			<Tabs.List>
				{rooms?.map((room: RoomType) => <Tabs.Trigger value={room.roomId} key={`trigger-${room.roomId}`}>{room.name}</Tabs.Trigger>)}
			</Tabs.List>
			{rooms?.map((room: RoomType) => <Tabs.Content key={`content-${room.roomId}`} value={room.roomId}><Room id={room.roomId} messages={room.messages} name={room.name} /></Tabs.Content>)}
		</Tabs.Root>
	);
};
