'use client';

import React from 'react';
import AddTask from './Input/AddTask';
import TaskList from './TaskList/TaskList';

export default function App() {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4 text-center">To-Do List</h1>
            <div className="flex mb-4 justify-center">
                <AddTask />
            </div>
            <TaskList />
        </div>
    );
}
