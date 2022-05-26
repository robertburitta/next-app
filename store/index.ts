import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice';
import { messagesSlice } from './messagesSlice';

const store = configureStore({
	reducer: {
		[userSlice.name]: userSlice.reducer,
		[messagesSlice.name]: messagesSlice.reducer,
	},
	devTools: true
});

export type RootState = ReturnType<typeof store.getState>;

export default store;