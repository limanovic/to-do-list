import { configureStore } from '@reduxjs/toolkit';
import allReducers from './reducers';

const store = configureStore({
    reducer: allReducers,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
