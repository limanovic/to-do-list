'use client';

import React, { useState } from 'react';
import AddTask from './Input/AddTask';
import OneTask from './OneTask/OneTask';
import TaskList from './TaskList/TaskList';

type Task = {
    id: number;
    name: string;
};

export default function App() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [newTask, setNewTask] = useState('');
    const [editTask, setEditTask] = useState<Task | null>(null);

    const saveEditedTask = () => {
        if (editTask) {
            const updatedTasks = tasks.map((task: Task) =>
                task.id === editTask.id ? { ...task, name: newTask } : task,
            );
            setTasks(updatedTasks);
            setNewTask('');
            setEditTask(null);
        }
    };

    const editTaskName = (task: Task) => {
        setEditTask(task);
        setNewTask(task.name);
    };

    const removeTask = (id: number) => {
        const updatedTasks = tasks.filter((task: Task) => task.id !== id);
        setTasks(updatedTasks);
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4 text-center">To-Do List</h1>
            <div className="flex mb-4 justify-center">
                <AddTask
                    newTask={newTask}
                    setNewTask={setNewTask}
                    tasks={tasks}
                    setTasks={setTasks}
                    editTask={editTask}
                    saveEditedTask={saveEditedTask}
                />
            </div>
            <TaskList
                tasks={tasks}
                editTask={editTask}
                saveEditedTask={saveEditedTask}
                editTaskName={editTaskName}
                removeTask={removeTask}
            />
        </div>
    );
}
