import { Button } from '@mui/material';
import React, { useState } from 'react';
import ConfirmModal from './ConfirmModal';
import { useDispatch } from 'react-redux';
import { removeTask, editTask } from './Redux/tasks/slice';
import { TaskType } from './Redux/types';

export default function Task({ task }: { task: TaskType }) {
    const [modalOpened, setmodalOpened] = useState<boolean>(false);
    const [isChecked, setIsChecked] = useState<boolean>(false);

    const removeTaskModal = () => {
        setmodalOpened(true);
    };
    const dispatch = useDispatch();

    const notConfirmed = () => {
        setmodalOpened(false);
    };
    const toggleCheckbox = () => {
        setIsChecked(!isChecked);
    };
    const handleRemoveTask = (e: TaskType) => {
        dispatch(removeTask(e.id));
    };
    const handleInputChange = (e: number) => {
        dispatch(editTask(e));
    };
    return (
        <div className={`flex justify-between gap-x-4 rounded p-4 items-center ${isChecked && 'bg-green-500'}`}>
            <div className=" w-[200px] break-all">
                <h4 className="pr-5 flex self-center">{task.name}</h4>
            </div>
            <input type="checkbox" checked={isChecked} onChange={toggleCheckbox} className="mr-2" />
            <Button className="mr-5 h-[40px]" variant="outlined" color="error" onClick={removeTaskModal}>
                Delete
            </Button>
            <Button className="mr-5 h-[40px]" variant="contained" onClick={() => handleInputChange(task.id)}>
                Edit
            </Button>
            {modalOpened && (
                <ConfirmModal
                    openModal={modalOpened}
                    onConfirm={() => handleRemoveTask(task)}
                    onCancel={notConfirmed}
                />
            )}
        </div>
    );
}
