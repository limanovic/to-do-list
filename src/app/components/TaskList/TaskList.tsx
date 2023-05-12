'use client';
import Task from '../Task/Task';

type Task = {
    id: number;
    name: string;
};
export default function TaskList({
    tasks,
    editTaskName,
    setTasks,
}: {
    tasks: Task[];
    editTask: Task | null;
    editTaskName: (task: Task) => void;
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}) {
    return (
        <>
            <ul>
                {tasks.map((task: Task) => (
                    <div key={task.id}>
                        <li key={task.id} className="flex items-center mb-2 justify-center">
                            <Task task={task} tasks={tasks} setTasks={setTasks} editTaskName={editTaskName} />
                        </li>
                        <hr />
                    </div>
                ))}
            </ul>
        </>
    );
}
