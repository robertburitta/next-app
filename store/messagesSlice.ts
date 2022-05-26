import { createSlice, current, PayloadAction } from '@reduxjs/toolkit';
import { MessageType } from '../hooks/useMessages';

// interface InitialStateType {
// 	rooms: MessageType[];
// }

// export const messagesSlice = createSlice({
// 	name: 'messages',
// 	initialState: {
// 		messages: []
// 	},
// 	reducers: {
// 		getMessages(state: InitialStateType, action: PayloadAction<MessageType[]>) {
// 			state.messages = action.payload;
// 		}
// 	}
// });

// export const messagesActions = messagesSlice.actions;

type Room = {
	id: string;
	messages: MessageType[];
};


export interface InitialStateType {
	rooms: Room[];
}

export const messagesSlice = createSlice({
	name: 'messages',
	initialState: {
		rooms: [{
			messages: [],
			id: ''
		}]
	},
	reducers: {
		saveMessages(state: InitialStateType, action: PayloadAction<Room>) {
			state.rooms.map(room => room.id === action.payload.id ? { ...room, messages: [...action.payload.messages] } : room);
		},
		saveRoom(state: InitialStateType, action: PayloadAction<Room>) {
			state.rooms.push(action.payload);
			console.log(current(state));
		},
	}
});

export const messagesActions = messagesSlice.actions;