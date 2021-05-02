import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	status: 0, // 0: Logged out  
    username: "None"
};

export const loginSlice = createSlice({
	name: 'login',
	initialState,
	reducers: {
		loguserin: (state, payload) => {
			state.status = 1;
            state.username = "Seriusam"
		},
		loguserout: (state) => {
			state.status = 0;
            state.username = ""
		}
	}
});

export const selectLogState = state => state.login;
export const {loguserin, loguserout, setusername} = loginSlice.actions;
export default loginSlice.reducer;
