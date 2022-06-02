import React, { useEffect } from 'react';
import { useMessages } from '../../hooks/useMessages';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { MessageType } from "../../types/MessageType";
interface RoomProps {
	id: string;
	messages: MessageType[];
	name: string;
}

export const Room: React.FC<RoomProps> = ({ id, messages, name }) => {
	const { messages: { setValue, handleSendMessage, register } } = useMessages();
	const user = useSelector((state: RootState) => state.user.user);
	useEffect(() => {
		setValue('roomId', id);
		setValue('author', user?.firstName);
	}, []);
	return (<div>
		{name}
		<ul>
			{messages?.sort((a, b) => a.timestamp - b.timestamp).map((message, i) =>
				<li key={i}>{message?.text} - {message.author}</li>
			)}
		</ul>
		<form onSubmit={handleSendMessage}>
			{/* Author: <input {...register('author')} /><br /> */}
			Text: <input type='text' {...register('text')} /><br />
			{/* Room: <input {...register('roomId')} /><br /> */}
			<input type='submit' />
		</form>
	</div>);
};
