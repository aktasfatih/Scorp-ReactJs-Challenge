import { createSlice } from '@reduxjs/toolkit';

const localization = {
    tr: {
        footer_text: "Footer",
        
    },
    eng: {

    }
}
const initialState = {
	localization = tr
};

export const localSlice = createSlice({
	name: 'localization',
	initialState,
	reducers: {
		changelocalto: (state, action) => {
			state.status = action.payload
		},
	}
});

export const selectLogState = state => state.login;
export const {loguserin, loguserout, setusername} = loginSlice.actions;
export default loginSlice.reducer;
