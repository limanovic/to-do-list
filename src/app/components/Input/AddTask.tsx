'use client'
import { TextField } from "@mui/material"
import React from "react"

type Task = {
    id: number;
    name: string;
}


const AddTask = ({ newTask, setNewTask, tasks, setTasks, saveEditedTask, editTask }: {
    newTask: string;
    setNewTask: React.Dispatch<React.SetStateAction<string>>;
    tasks: Task[];
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
    saveEditedTask: () => void;
    editTask: Task;
}) => {

    const addTask = () => {
        if (newTask.trim() !== '') {
            const task: Task = {
                id: new Date().getTime(),
                name: newTask,
            };
            setTasks([...tasks, task]);
            setNewTask('')
        }
    }
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
                <button
                    className="p-2 bg-green-500 text-white rounded"
                    onClick={saveEditedTask}
                >
                    Save
                </button>
            ) : (
                <button
                    className="p-2 bg-blue-500 text-white rounded"
                    onClick={addTask}
                >
                    Add Task
                </button>
            )}
        </div>
    )
}
export default AddTask