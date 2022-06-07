import { createSlice, PayloadAction } from '@reduxjs/toolkit';
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
			state.rooms.map(room => room.roomId === action.payload.roomId ? room.messages = action.payload.messages : room);
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