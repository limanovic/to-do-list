'use client';
import { FormEventHandler } from 'react';
import Task from '../Task/Task';

type Task = {
    id: number;
    name: string;
};
export default function TaskList({
    tasks,
    editTaskName,
    removeTask,
}: {
    tasks: Task[];
    saveEditedTask: FormEventHandler<HTMLFormElement>;
    editTask: Task | null;
    editTaskName: (task: Task) => void;
    removeTask: (id: number) => void;
}) {
    return (
        <ul>
            {tasks.map((task: Task) => (
                <li key={task.id} className="flex items-center mb-2 justify-center">
                    <Task task={task} removeTask={removeTask} editTaskName={editTaskName} />
                </li>
            ))}
        </ul>
    );
}
