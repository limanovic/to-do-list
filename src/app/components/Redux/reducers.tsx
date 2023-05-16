import { combineReducers } from '@reduxjs/toolkit';
import taskReducer from './addTaskSlice';

const allReducers = combineReducers({
    tasks: taskReducer,
});

export default allReducers;
