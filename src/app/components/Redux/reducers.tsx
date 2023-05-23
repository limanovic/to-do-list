import { combineReducers } from '@reduxjs/toolkit';
import projects from './projects/slice';

const allReducers = combineReducers({
    projects,
});

export default allReducers;
