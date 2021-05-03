import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	title: 'Sample Website',
	lang: 'en',
};

export const appSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		settitle: (state, action) => {
			console.log(action.payload);
			state.title = action.payload;
		},
		setlang: (state, action) => {
			console.log('L' + action.payload);
			state.lang = action.payload;
		},
	},
});

export const selectAppState = (state) => state.app;
export const { settitle, setlang } = appSlice.actions;
export default appSlice.reducer;
