'use client';
import { useSelector } from 'react-redux';
import { TaskType, RootState } from './Redux/types';
import Task from './Task';

export default function TaskList() {
    const tasks = useSelector((state: RootState) => state.tasks);
    return (
        <>
            <ul>
                {tasks?.map((task: TaskType) => (
                    <div key={task.id}>
                        <li key={task.id} className="flex items-center mb-2 justify-center">
                            <Task task={task} />
                        </li>
                        <hr />
                    </div>
                ))}
            </ul>
        </>
    );
}
