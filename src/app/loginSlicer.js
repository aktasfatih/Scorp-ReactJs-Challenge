import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	status: 0,
	username: null,
	email: null,
	visModal: false,
};

export const loginSlice = createSlice({
	name: 'login',
	initialState,
	reducers: {
		loguserin: (state, action) => {
			state.status = 1;
			state.username = action.payload.name;
			state.email = action.payload.email;
			console.log(action);
		},
		loguserout: (state) => {
			state.status = 0;
			state.username = '';
			state.email = '';
		},
		setvis: (state) => {
			state.visModal = !state.visModal;
		},
	},
});

export const selectLogState = (state) => state.login;
export const {
	loguserin,
	loguserout,
	setusername,
	setvis,
} = loginSlice.actions;
export default loginSlice.reducer;
