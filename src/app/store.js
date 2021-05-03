import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './loginSlicer';
import appReducer from './appSlicer';

export const store = configureStore({
	reducer: {
		login: loginReducer,
		app: appReducer,
	},
});
