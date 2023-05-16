import { configureStore } from '@reduxjs/toolkit';
import allReducers from './reducers';

const store = configureStore({
    reducer: allReducers,
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
