import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../types/User';

interface InitialStateType {
	isAdmin: boolean;
	isLoggedIn: boolean;
	user: User | null;
}

const initialState = {
	isAdmin: false,
	isLoggedIn: false,
	user: {} as User
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		loginUser: (state: InitialStateType, action: PayloadAction<User>) => {
			state.user = action.payload;
			state.isAdmin = action.payload.isAdmin;
			state.isLoggedIn = true;
		},
		logoutUser: (state: InitialStateType) => {
			state.user = null;
			state.isAdmin = false;
			state.isLoggedIn = false;
		}
	}
});

export const userActions = userSlice.actions;
export default userSlice;