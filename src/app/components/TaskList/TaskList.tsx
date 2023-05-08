'use client';

import OneTask from '../OneTask/OneTask';

type Task = {
    id: number;
    name: string;
};
export default function TaskList({ tasks, editTask, saveEditedTask, editTaskName, removeTask }) {
    return (
        <ul>
            {tasks.map((task: Task) => (
                <li key={task.id} className="flex items-center mb-2">
                    <OneTask
                        task={task}
                        removeTask={removeTask}
                        editTask={editTask}
                        saveEditedTask={saveEditedTask}
                        editTaskName={editTaskName}
                    />
                </li>
            ))}
        </ul>
    );
}
