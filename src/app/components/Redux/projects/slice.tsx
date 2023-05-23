import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Project } from '../types';

export const emptyProject: Project = { name: '', id: 0 };

const projectSlice = createSlice({
    name: 'projects',
    initialState: [] as Project[],
    reducers: {
        addProject: (state, action: PayloadAction<Project>) => {
            state.push(action.payload);
        },
        removeProject: (state, action: PayloadAction<number>) => {
            return (state = state.filter((project) => project.id !== action.payload));
        },
        editProject: (state, action: PayloadAction<number>) => {
            const editingProject = state.findIndex((project) => project.name === project.isEditing);
            if (editingProject !== -1) {
                state[editingProject].isEditing = undefined;
            }
            const project = state.find((project) => project.id === action.payload);
            if (project) {
                project.isEditing = project.name;
            }
        },
        saveProject: (state, action: PayloadAction<string>) => {
            const editingProjectIndex = state.findIndex((project) => project.name === project.isEditing);
            state[editingProjectIndex].name = action.payload;
            state[editingProjectIndex].isEditing = undefined;
        },
        deleteProjects: (state) => {
            state = [];
            return state;
        },
    },
});

export const { addProject, removeProject, editProject, saveProject, deleteProjects } = projectSlice.actions;
export default projectSlice.reducer;
