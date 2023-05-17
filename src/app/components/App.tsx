'use client';

import React from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';
import Test from './Test';

export default function App() {
    return (
        <div className="flex">
            <div className="w-3/4 px-20">
                <h1 className="text-2xl font-bold mb-4 pt-10 text-center">To-Do List</h1>
                <div className="flex mb-4 justify-center">
                    <AddTask />
                </div>
                <TaskList />
            </div>
            <Test />
        </div>
    );
}
