import React from 'react';
import { PageWithLayout } from '../types/PageWithLayout';
import { getBaseLayout } from '../layout/BaseLayout';
import { MessageType, useMessages } from '../hooks/useMessages';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

export type RoomType = {
	id: string;
	messages: MessageType[];
};

const Chat: PageWithLayout = () => {
	const rooms = useSelector((state: RootState) => state.messages.rooms);
	const { rooms: { handleCreateRoom }, messages: { handleSendMessage, register } } = useMessages();

	return (
		<>
			<button onClick={handleCreateRoom}>add room</button>

			<form onSubmit={handleSendMessage}>
				Author: <input {...register('author')} /><br />
				Text: <input type='text' {...register('text')} /><br />
				Room: <input {...register('roomId')} /><br />
				<input type='submit' />
			</form>

			<div>
				{rooms?.map((room: RoomType) =>
					<div key={room?.id}>
						{room.id}
						<ul>
							{room.messages?.map((message: MessageType, i) =>
								<li key={i}>{message?.text}</li>
							)}
						</ul>
					</div>
				)}
			</div>
		</>
	);
};

Chat.getLayout = getBaseLayout;

export default Chat;