import React, { useEffect, useState } from 'react';
import { PageWithLayout } from '../types/PageWithLayout';
import { getBaseLayout } from '../layout/BaseLayout';
import { useMessages } from '../hooks/useMessages';
import { RoomTable } from '../components/rooms/RoomTable';



const Chat: PageWithLayout = () => {
	const { rooms: { handleCreateRoom }, } = useMessages();
	const [roomName, setRoomName] = useState('');




	return (
		<>
			<input value={roomName} onChange={(e) => setRoomName(e.target.value)} />
			<button onClick={() => handleCreateRoom(roomName)}>add room</button>



			<RoomTable />
		</>
	);
};

Chat.getLayout = getBaseLayout;

export default Chat;;