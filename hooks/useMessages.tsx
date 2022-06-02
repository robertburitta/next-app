import { useForm } from 'react-hook-form';
import { db } from '../config/firebase';
import { ref, set, get, child } from 'firebase/database';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { v4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { messagesActions } from '../store/messagesSlice';
import { RoomType } from "../types/RoomType";
import { MessageType } from '../types/MessageType';
const MessageSchema = z.object({
	text: z.string().nonempty(),
	author: z.string().nonempty(),
	roomId: z.string().nonempty(),
});

export type MessageSchemaType = z.infer<typeof MessageSchema>;

export const useMessages = () => {
	const dispatch = useDispatch();
	const { handleSubmit, ...form } = useForm<MessageType>({ resolver: zodResolver(MessageSchema) });

	const getMessages = async (roomId: string) => {
		try {
			const snapshot = await get(child(ref(db), 'rooms/' + roomId));
			const messages: MessageType[] = Object.values(snapshot.val()?.messages);
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
				author,
				text,
				id: v4(),
				timestamp: Date.now()
			};

			await set(ref(db, 'rooms/' + roomId + '/messages/' + message.id), message);
			await getMessages(roomId);
		} catch (err) {
			console.error(err);
		}
	};

	const getRooms = async () => {
		try {
			const snapshot = await get(child(ref(db), 'rooms'));
			const rooms: RoomType[] = Object.values(snapshot.val());
			console.log(rooms);
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
			...form
		},
		rooms: {
			handleCreateRoom,
			getRooms
		}
	};
};
