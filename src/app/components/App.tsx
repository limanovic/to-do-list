'use client'

import React, { useState } from "react"
import AddTask from "./Input/AddTask";

type Task = {
    id: number;
    name: string;
}

export default function App() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [newTask, setNewTask] = useState('');
    const [editTask, setEditTask] = useState<Task | null>(null)

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4 text-center">To-Do List</h1>
            <div className="flex mb-4 justify-center">
                <AddTask newTask={newTask} setNewTask={setNewTask} tasks={tasks} setTasks={setTasks} />
            </div>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id} className="flex items-center mb-2">
                        {editTask && editTask.id === task.id ? (
                            <input
                                type="text"
                                className="p-2 border border-gray-300 rounded mr-2 flex-grow"
                                value={newTask}
                                onChange={(e) => setNewTask(e.target.value)}
                            />
                        ) : (
                            <span className="mr-2">{task.name}</span>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    )
}