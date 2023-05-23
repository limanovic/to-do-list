'use client';

import React from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';
import Test from './Test';
import ProjectList from './ProjectList';
import AddProject from './AddProject';

export default function App() {
    return (
        <div className="flex">
            <div className="w-2/5 px-20 pt-20">
                <div className="flex mb-4 justify-center">
                    <AddTask />
                </div>
                <TaskList />
            </div>
            <div className="w-2/5 px-20 pt-20">
                <div className="flex mb-4 justify-center">
                    <AddProject />
                </div>
                <ProjectList />
            </div>
            <Test />
        </div>
    );
}
