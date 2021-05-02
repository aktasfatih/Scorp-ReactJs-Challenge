import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	title: "Sample Website"
};

export const appSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		settitle: (state, action) => {
            console.log(action.payload);
			state.title = action.payload;
		}
	}
});

export const selectAppState = state => state.app;
export const { settitle } = appSlice.actions;
export default appSlice.reducer;
