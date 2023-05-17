import { combineReducers } from '@reduxjs/toolkit';
import tasks from './tasks/slice';

const allReducers = combineReducers({
    tasks,
});

export default allReducers;
