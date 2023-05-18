'use client';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './Redux/types';
import Task from './Task';
import { clearTasks } from './Redux/tasks/slice';
import { Button } from '@mui/material';
import { useState } from 'react';
import ConfirmModal from './ConfirmModal';

export default function TaskList() {
    const tasks = useSelector((state: RootState) => state.tasks);
    const dispatch = useDispatch();
    const [modalOpened, setModalOpened] = useState<boolean>();
    const openModal = () => {
        setModalOpened(true);
    };
    const notConfirmed = () => {
        setModalOpened(false);
    };
    const deleteAllTasks = () => {
        dispatch(clearTasks());
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
                {modalOpened && <ConfirmModal openModal onConfirm={deleteAllTasks} onCancel={notConfirmed} />}
            </ul>
        </>
    );
}
