'use client';
import Task from '../Task/Task';

type Task = {
    id: number;
    name: string;
};
export default function TaskList({
    tasks,
    editTask,
    saveEditedTask,
    editTaskName,
    removeTask,
}: {
    tasks: Task[];
    saveEditedTask: (e: { preventDefault: () => void }) => void;
    editTask: Task | null;
    editTaskName: (task: Task) => void;
    removeTask: (id: number) => void;
}) {
    return (
        <ul>
            {tasks.map((task: Task) => (
                <li key={task.id} className="flex items-center mb-2 justify-center">
                    <Task
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
