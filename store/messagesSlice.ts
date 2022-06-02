import { createSlice, current, PayloadAction } from '@reduxjs/toolkit';
import { RoomType } from '../types/RoomType';

interface InitialStateType {
	rooms: RoomType[];
}

export const messagesSlice = createSlice({
	name: 'messages',
	initialState: {
		rooms: []
	},
	reducers: {
		saveMessages(state: InitialStateType, action: PayloadAction<RoomType>) {
			// console.log(current(state.rooms));
			// state.rooms.map(room => room.id === action.payload.id ? room = { ...room, messages: [...action.payload.messages] } : room);
			state.rooms.map(room => room.roomId === action.payload.roomId ? room.messages = action.payload.messages : room);
			// console.log(current(state.rooms));
		},
		saveRoom(state: InitialStateType, action: PayloadAction<RoomType>) {
			state.rooms.push(action.payload);
		},
		saveRooms(state: InitialStateType, action: PayloadAction<RoomType[]>) {
			state.rooms = action.payload;
		}
	}
});

export const messagesActions = messagesSlice.actions;
export default messagesActions;