import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MessageType } from '../hooks/useMessages';

interface InitialStateType {
	messages: MessageType[];
}

export const messagesSlice = createSlice({
	name: 'messages',
	initialState: { messages: [] },
	reducers: {
		getMessages(state: InitialStateType, action: PayloadAction<MessageType[]>) {
			state.messages = action.payload;
		}
	}
});

export const messagesActions = messagesSlice.actions;

// interface InitialStateType {
// 	rooms: {
// 		messages: MessageType[];
// 		id: string;
// 	}[];
// }

// export const messagesSlice = createSlice({
// 	name: 'messages',
// 	initialState: {
// 		rooms: {
// 			messages: [],
// 			id: ''
// 		}
// 	},
// 	reducers: {
// 		getMessages(state: InitialStateType, action: PayloadAction<MessageType[]>) {
// 			state.messages = action.payload;
// 		}
// 	}
// });

// export const messagesActions = messagesSlice.actions;