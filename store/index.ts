import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice';

const store = configureStore({
	reducer: {
		[userSlice.name]: userSlice.reducer
	}
});

export type RootState = ReturnType<typeof store.getState>;

export default store;