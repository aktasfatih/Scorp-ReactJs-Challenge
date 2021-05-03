import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	localization: 'en',
};

export const localSlice = createSlice({
	name: 'localization',
	initialState,
	reducers: {
		changelocalto: (state, action) => {
			state.status = action.payload;
		},
	},
});

export const selectLogState = (state) => state.login;
export const { loguserin, loguserout, setusername } = localSlice.actions;
export default localSlice.reducer;
