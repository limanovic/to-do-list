'use client';

import React, { FormEventHandler, SyntheticEvent, useRef, useState } from 'react';
import AddTask from './Input/AddTask';
import TaskList from './TaskList/TaskList';
import ConfirmModal from './ConfirmModal/ConfirmModal';

type Task = {
    id: number;
    name: string;
};

export default function App() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [newTask, setNewTask] = useState('');
    const [editTask, setEditTask] = useState<Task | null>(null);
    const [openModal, setOpenModal] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement | null>(null);

    const editTaskName = (task: Task) => {
        setEditTask(task);
        setNewTask(task.name);
        if (inputRef.current) {
            inputRef.current.focus();
        }
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
                    inputRef={inputRef}
                    setOpenModal={setOpenModal}
                    openModal={openModal}
                    setEditTask={setEditTask}
                />
            </div>
            <TaskList tasks={tasks} editTask={editTask} editTaskName={editTaskName} setTasks={setTasks} />
        </div>
    );
}
