import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	status: 0 // 0: Logged out  
};

export const loginSlice = createSlice({
	name: 'login',
	initialState,
	reducers: {
		loguserin: (state) => {
			state.status = 1;
		},
		loguserout: (state) => {
			state.status = 0;
		}
	}
});

export const selectLogState = state => state.login;
export default loginSlice.reducer;
