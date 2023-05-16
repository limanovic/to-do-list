import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type Task = {
    name: string;
    id: number;
    isEditing?: string | null;
};

const taskSlice = createSlice({
    name: 'tasks',
    initialState: [] as Task[],
    reducers: {
        addTask: (state, action: PayloadAction<Task>) => {
            state.push(action.payload);
        },
        removeTask: (state, action: PayloadAction<number>) => {
            return (state = state.filter((task) => task.id !== action.payload));
        },
        editTask: (state, action: PayloadAction<number>) => {
            const task = state.find((task) => task.id === action.payload);
            if (task) {
                task.isEditing = task.name;
            }
        },
        saveInputChange: (state, action: PayloadAction<string>) => {
            const editingTaskIndex = state.findIndex((task) => task.name == task.isEditing);
            const updatedTask = { ...state[editingTaskIndex], name: action.payload };
            const newState = [...state];
            newState[editingTaskIndex] = updatedTask;
            state = newState;
            return state;
        },
    },
});

export const { addTask, removeTask, editTask, saveInputChange } = taskSlice.actions;
export default taskSlice.reducer;
