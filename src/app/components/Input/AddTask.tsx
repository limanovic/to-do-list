'use client';
import { Button, TextField } from '@mui/material';
import React, { useEffect, useRef } from 'react';

type Task = {
    id: number;
    name: string;
};

const AddTask = ({
    newTask,
    setNewTask,
    tasks,
    setTasks,
    saveEditedTask,
    editTask,
}: {
    newTask: string;
    setNewTask: React.Dispatch<React.SetStateAction<string>>;
    tasks: Task[];
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
    saveEditedTask: () => void;
    editTask: Task | null;
}) => {
    const addTask = () => {
        if (newTask.trim() !== '') {
            const task: Task = {
                id: new Date().getTime(),
                name: newTask,
            };
            setTasks([...tasks, task]);
            setNewTask('');
        }
    };
    return (
        <div>
            <TextField
                id="standard-basic"
                label="Standard"
                variant="standard"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
            />
            {editTask ? (
                <Button variant="contained" color="success" onClick={saveEditedTask}>
                    Save
                </Button>
            ) : (
                <Button variant="contained" component="label" onClick={addTask}>
                    Add Task
                </Button>
            )}
        </div>
    );
};
export default AddTask;
