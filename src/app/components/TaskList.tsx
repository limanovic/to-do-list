'use client';
import Task from './Task';
import { deleteTasks } from './Redux/tasks/slice';
import { Button } from '@mui/material';
import { useState } from 'react';
import ConfirmModal from './ConfirmModal';
import { useAppDispatch, useAppSelector } from './Redux/hooks';

export default function TaskList() {
    const tasks = useAppSelector((state) => state.tasks);
    const dispatch = useAppDispatch();
    const [modalOpened, setModalOpened] = useState<boolean>(false);
    const openModal = () => {
        setModalOpened(true);
    };
    const closeModal = () => {
        setModalOpened(false);
    };
    const deleteAllTasks = () => {
        dispatch(deleteTasks());
        setModalOpened(false);
    };
    return (
        <>
            <ul className="grid">
                {tasks?.map((task) => (
                    <div key={task.id}>
                        <li key={task.id} className="flex items-center mb-2 justify-center">
                            <Task task={task} />
                        </li>
                        <hr />
                    </div>
                ))}
                <hr />
                {tasks.length > 1 && (
                    <Button className="h-[40px] mt-2" variant="outlined" color="error" onClick={openModal}>
                        Delete all
                    </Button>
                )}
                <ConfirmModal modalOpened={modalOpened} onConfirm={deleteAllTasks} onCancel={closeModal} />
            </ul>
        </>
    );
}
