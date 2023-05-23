import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Project, Task } from '../types';

export const emptyProject: Project = { name: '', id: 0, tasks: [] };
export const emptyTask: Task = { name: '', id: 0, parentId: 0 };

const projectSlice = createSlice({
    name: 'projects',
    initialState: [] as Project[],
    reducers: {
        addProject: (state, action: PayloadAction<Project>) => {
            state.push(action.payload);
        },
        addProjectTasks: (state, action: PayloadAction<Task>) => {
            const currentProject = state.findIndex((project) => project.id === project.isActive);
            state[currentProject].tasks.push(action.payload);
        },
        removeTask: (state, action: PayloadAction<number>) => {
            const currentProject = state.findIndex((project) => project.id === project.isActive);
            state[currentProject].tasks = state[currentProject].tasks.filter((task) => task.id !== action.payload);
            return state;
        },
        editTask: (state, action: PayloadAction<number>) => {
            const currentProject = state.findIndex((project) => project.id === project.isActive);
            const editingTask = state[currentProject].tasks.findIndex((task) => task.name === task.isEditing);
            if (editingTask !== -1) {
                state[editingTask].isEditing = undefined;
            }
            const task = state[currentProject].tasks.find((task) => task.id === action.payload);
            if (task) {
                task.isEditing = task.name;
            }
        },
        saveTask: (state, action: PayloadAction<string>) => {
            const currentProject = state.findIndex((project) => project.id === project.isActive);
            const editingTaskIndex = state[currentProject].tasks.findIndex((task) => task.name === task.isEditing);
            state[currentProject].tasks[editingTaskIndex].name = action.payload;
            state[currentProject].tasks[editingTaskIndex].isEditing = undefined;
        },
        deleteTasks: (state) => {
            const currentProject = state.findIndex((project) => project.id === project.isActive);
            state[currentProject].tasks = [];
            return state;
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
        currentProject: (state, action: PayloadAction<number>) => {
            const editingProject = state.findIndex((project) => project.id === project.isActive);
            if (editingProject !== -1) {
                state[editingProject].isActive = undefined;
            }
            const project = state.find((project) => project.id === action.payload);
            if (project) {
                project.isActive = project.id;
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

export const {
    addProject,
    removeProject,
    editProject,
    saveProject,
    deleteProjects,
    currentProject,
    addProjectTasks,
    removeTask,
    editTask,
    saveTask,
    deleteTasks,
} = projectSlice.actions;
export default projectSlice.reducer;
