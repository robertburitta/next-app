import { MessageType } from './MessageType';

export type RoomType = {
	name: string;
	roomId: string;
	messages: MessageType[];
};