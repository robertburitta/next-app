import { useForm } from 'react-hook-form';
import { db } from '../config/firebase';
import { ref, set, get, child } from 'firebase/database';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { v4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { messagesActions } from '../store/messagesSlice';

const MessageSchema = z.object({
	text: z.string().nonempty(),
	author: z.string().nonempty(),
	roomId: z.string().nonempty(),
});

export type MessageType = z.infer<typeof MessageSchema>;

export const useMessages = () => {
	const dispatch = useDispatch();
	const { handleSubmit, ...form } = useForm<MessageType>({ resolver: zodResolver(MessageSchema) });

	const getMessages = async (roomId: string) => {
		try {
			const snapshot = await get(child(ref(db), 'rooms/' + roomId));
			const messages: MessageType[] = Object.values(snapshot.val()?.messages);

			const room = {
				id: roomId,
				messages
			};

			dispatch(messagesActions.saveMessages(room));
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

			await set(ref(db, 'rooms/' + roomId + '/messages/' + message.id), message);
			await getMessages(roomId);
		} catch (err) {
			console.error(err);
		}
	};

	const handleCreateRoom = async () => {
		try {
			const roomId = v4();

			await set(ref(db, 'rooms/' + roomId), { roomId });

			const newRoom = {
				id: roomId,
				messages: []
			};

			dispatch(messagesActions.saveRoom(newRoom));
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
