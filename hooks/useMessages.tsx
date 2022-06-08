import { useForm } from 'react-hook-form';
import { db } from '../config/firebase';
import { ref, set, get, child, remove } from 'firebase/database';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { v4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { messagesActions } from '../store/messagesSlice';
import { RoomType } from '../types/RoomType';
import { MessageType } from '../types/MessageType';

const MessageSchema = z.object({
	text: z.string().nonempty(),
	author: z.string().nonempty(),
	roomId: z.string().nonempty()
});

export type MessageSchemaType = z.infer<typeof MessageSchema>;

export const useMessages = () => {
	const dispatch = useDispatch();
	const { handleSubmit, ...form } = useForm<MessageType>({ resolver: zodResolver(MessageSchema) });

	const getMessages = async (roomId: string) => {
		try {
			const snapshot = await get(child(ref(db), 'rooms/' + roomId));
			const messages: MessageType[] = snapshot.val().messages ? Object.values(snapshot.val()?.messages) : [];
			const name = snapshot.val().name;

			const room = {
				name,
				roomId,
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
				id: v4(),
				text,
				author,
				roomId,
				timestamp: Date.now()
			};

			await set(ref(db, 'rooms/' + roomId + '/messages/' + message.id), message);
			await getMessages(roomId);
		} catch (err) {
			console.error(err);
		}
	};

	const handleRemoveMessage = async (roomId: string, id: string) => {
		try {
			await remove(ref(db, 'rooms/' + roomId + '/messages/' + id));
			await getMessages(roomId);
		} catch (err) {
			console.error(err);
		}
	};

	const handleRemoveAllMessages = async (roomId: string, author: string) => {
		try {
			const snapshot = await get(child(ref(db), 'rooms/' + roomId));
			const messages: MessageType[] = snapshot.val().messages ? Object.values(snapshot.val()?.messages) : [];

			messages.forEach(async (message) => {
				if (message.author === author) {
					await remove(ref(db, 'rooms/' + roomId + '/messages/' + message.id));
				}
			});

			await getMessages(roomId);
		} catch (err) {
			console.error(err);
		}
	};

	const getRooms = async () => {
		try {
			const snapshot = await get(child(ref(db), 'rooms'));
			const rooms: RoomType[] = snapshot.val() ? Object.values(snapshot.val()) : [];

			dispatch(messagesActions.saveRooms(rooms));
		} catch (err) {
			console.error(err);
		}
	};

	const handleCreateRoom = async (name: string) => {
		try {
			const roomId = v4();

			await set(ref(db, 'rooms/' + roomId), { roomId, name });

			const newRoom = {
				name,
				roomId,
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
			handleRemoveMessage,
			handleRemoveAllMessages,
			...form
		},
		rooms: {
			handleCreateRoom,
			getRooms
		}
	};
};
