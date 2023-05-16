'use client';
import { useSelector } from 'react-redux';
import Task from '../Task/Task';

type Task = {
    id: number;
    name: string;
    isEditing: string | null;
};
interface RootState {
    tasks: Task[];
}
export default function TaskList() {
    const tasks = useSelector((state: RootState) => state.tasks);
    return (
        <>
            <ul>
                {tasks?.map((task: Task) => (
                    <div key={task.id}>
                        <li key={task.id} className="flex items-center mb-2 justify-center">
                            <Task task={task} tasks={tasks} />
                        </li>
                        <hr />
                    </div>
                ))}
            </ul>
        </>
    );
}
