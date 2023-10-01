import { configureStore } from '@reduxjs/toolkit';
import { api } from '../services/api';
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
	reducer: {
		[api.reducerPath]: api.reducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
