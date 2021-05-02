import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	status: 0, // 0: Logged out  
    username: "",
    email: ""
};

export const loginSlice = createSlice({
	name: 'login',
	initialState,
	reducers: {
		loguserin: (state, payload) => {
			state.status = 1;
            state.username = "Username";
            state.email = "emadsaddsil@email.com";
		},
		loguserout: (state) => {
			state.status = 0;
            state.username = "";
            state.email = ""

		}
	}
});

export const selectLogState = state => state.login;
export const {loguserin, loguserout, setusername} = loginSlice.actions;
export default loginSlice.reducer;
