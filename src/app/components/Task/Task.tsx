import { Button } from '@mui/material';
import React, { useState } from 'react';
import ConfirmModal from '../ConfirmModal';

type Task = {
    id: number;
    name: string;
};
export default function Task({
    task,
    editTaskName,
    tasks,
    setTasks,
}: {
    task: Task;
    editTaskName: (task: Task) => void;
    tasks: Task[];
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}) {
    const [removeModal, setRemoveModal] = useState<boolean>(false);
    const [isChecked, setIsChecked] = useState<boolean>(false);

    const removeTask = () => {
        setRemoveModal(true);
    };

    const confirmed = (id?: number) => {
        const updatedTasks = tasks.filter((task: Task) => task.id !== id);
        setTasks(updatedTasks);
    };
    const notConfirmed = () => {
        setRemoveModal(false);
    };
    const toggleCheckbox = () => {
        setIsChecked(!isChecked);
    };
    return (
        <div className="flex gap-x-4">
            <h4 className={`pr-5 flex self-center ${isChecked ? 'text-green-500' : ''}`}>{task.name}</h4>
            <input type="checkbox" checked={isChecked} onChange={toggleCheckbox} className="mr-2" />
            <Button className="mr-5" variant="outlined" color="error" onClick={removeTask}>
                Delete
            </Button>
            <Button className="mr-5" variant="contained" onClick={() => editTaskName(task)}>
                Edit
            </Button>
            {removeModal && (
                <ConfirmModal openModal={removeModal} onConfirm={() => confirmed(task.id)} onCancel={notConfirmed} />
            )}
        </div>
    );
}
