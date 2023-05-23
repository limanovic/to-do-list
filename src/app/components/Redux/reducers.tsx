import { combineReducers } from '@reduxjs/toolkit';
import tasks from './tasks/slice';
import projects from './projects/slice';

const allReducers = combineReducers({
    tasks,
    projects,
});

export default allReducers;
