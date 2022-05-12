import React from 'react';
import { useForm } from 'react-hook-form';
import { auth, db } from '../config/firebase';
import { ref, set, get, child } from 'firebase/database';
import { ResultHandler } from '../types/ResultHandler';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { v4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { messagesActions } from "../store/messagesSlice";
const MessageSchema = z.object({
	text: z.string().nonempty(),
	author: z.string().nonempty(),
	roomId: z.string().nonempty(),
});

export type MessageType = z.infer<typeof MessageSchema>;





export const useMessages = () => {
	const { handleSubmit, ...form } = useForm<MessageType>({ resolver: zodResolver(MessageSchema) });
	const dispatch = useDispatch();
	const getMessages = async (roomId: string) => {
		try {
			const snapshot = await get(child(ref(db), 'rooms/' + roomId));
			const messages: MessageType[] = Object.values(snapshot.val()
			);
			dispatch(messagesActions.getMessages(messages));
		} catch (err) {
			console.error(err);
		}
	};
	const handleSendMessage = async ({ roomId, author, text }: MessageType) => {
		try {
			const message = {
				author,
				text,
				id: v4()
			};
			await set(ref(db), 'rooms/' + roomId + '/messages/' + message.id);
			await getMessages(roomId);
			// onSuccess?.('')

		} catch (err) {
			console.error(err);
		}
	};
	const handleCreateRoom = async () => {
		try {
			await set(ref(db, 'rooms/' + v4()), { messages: {} });
		} catch (err) {
			console.error(err);
		}
	};



	return {
		messages: {
			handleSendMessage: handleSubmit(handleSendMessage),
			...form
		},
		rooms: {
			handleCreateRoom
		}
	};
};
