import React from 'react';
import addTask from '../Input/AddTask';

type Task = {
    id: number;
    name: string;
};

export default function OneTask({
    task,
    removeTask,
    editTaskName,
    editTask,
    saveEditedTask,
}: {
    task: Task;
    removeTask: () => void;
    editTaskName: () => void;
    saveEditedTask: () => void;
    editTask: Task;
}) {
    return (
        <>
            {task.name}
            <button className="p-1 bg-red-500 text-white rounded" onClick={() => removeTask(task.id)}>
                Remove
            </button>
            {editTask && editTask.id === task.id ? (
                <button className="p-1 bg-green-500 text-white rounded" onClick={saveEditedTask}>
                    Save
                </button>
            ) : (
                <button className="p-1 bg-yellow-500 text-white rounded mr-1" onClick={() => editTaskName(task)}>
                    Edit
                </button>
            )}
        </>
    );
}
