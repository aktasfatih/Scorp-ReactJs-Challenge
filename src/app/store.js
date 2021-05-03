import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import loginReducer from './loginSlicer';
import appReducer from './appSlicer';

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		login: loginReducer,
		app: appReducer,
	},
});
