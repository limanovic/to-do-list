import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Task as TaskType } from '../types';

const taskSlice = createSlice({
    name: 'tasks',
    initialState: [] as TaskType[],
    reducers: {
        addTask: (state, action: PayloadAction<TaskType>) => {
            state.push(action.payload);
        },
        removeTask: (state, action: PayloadAction<number>) => {
            return (state = state.filter((task) => task.id !== action.payload));
        },
        editTask: (state, action: PayloadAction<number>) => {
            const editingTask = state.findIndex((task) => task.name == task.isEditing);
            if (editingTask !== -1) {
                state[editingTask].isEditing = undefined;
            }
            const task = state.find((task) => task.id === action.payload);
            if (task) {
                task.isEditing = task.name;
            }
        },
        saveTask: (state, action: PayloadAction<string>) => {
            const editingTaskIndex = state.findIndex((task) => task.name == task.isEditing);
            state[editingTaskIndex].name = action.payload;
            state[editingTaskIndex].isEditing = undefined;
        },
    },
});

export const { addTask, removeTask, editTask, saveTask } = taskSlice.actions;
export default taskSlice.reducer;
