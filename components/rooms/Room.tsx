import React, { useEffect } from 'react';
import { useMessages } from '../../hooks/useMessages';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { MessageType } from '../../types/MessageType';
import FormInput from '../Input';
import * as styles from './Room.css';
import { Message } from './Message';
import { PaperPlaneIcon } from '@radix-ui/react-icons';

interface RoomProps {
	id: string;
	messages: MessageType[];
	name: string;
}

export const Room: React.FC<RoomProps> = ({ id, messages, name }) => {
	const { messages: { setValue, handleSendMessage, register, formState: { errors } } } = useMessages();
	const user = useSelector((state: RootState) => state.user.user);

	useEffect(() => {
		setValue('roomId', id);
		setValue('author', user?.email);
	}, []);

	return (
		<>
			<strong>Room name: {name}</strong>
			<ul className={styles.list}>
				{messages && Object.values(messages)?.sort((a, b) => a.timestamp - b.timestamp).map((message, i) =>
					<Message key={i} roomId={id} messageId={message.id} author={message.author}>
						<li className={styles.message}><span className={styles.author}>{message.author}</span>: {message.text}</li>
					</Message>
				)}
			</ul>
			<div className={styles.sendMessage}>
				<FormInput type='text' {...register('text')} placeholder='Enter message...' error={errors.text?.message} rounded />
				<PaperPlaneIcon className={styles.button} onClick={handleSendMessage} />
			</div>
		</>
	);
};
