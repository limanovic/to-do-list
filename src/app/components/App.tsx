'use client';

import React from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';
import Test from './Test';
import ProjectList from './ProjectList';
import AddProject from './AddProject';
import { useAppSelector } from './Redux/hooks';
import { Project } from './Redux/types';

export default function App() {
    let projects = useAppSelector((state) => state.projects);
    const project = projects.find((project: Project) => project.id === project.isActive);
    return (
        <div className="flex justify-between">
            <div className="w-2/5 px-20 pt-20">
                <h2 className="font-bold mb-8 text-2xl">Add new project</h2>
                <div className="flex mb-4 justify-center">
                    <AddProject />
                </div>
                <ProjectList />
            </div>
            {project && (
                <div className="w-2/5 px-20 pt-20">
                    <h2 className="font-bold mb-8 text-2xl">Add tasks to {project.name}</h2>
                    <div className="flex mb-4 justify-center">
                        <AddTask />
                    </div>
                    <TaskList />
                </div>
            )}
            <Test />
        </div>
    );
}
