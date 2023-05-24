import { Button } from '@mui/material';
import React, { useState } from 'react';
import ConfirmModal from './ConfirmModal';
import { useDispatch } from 'react-redux';
import { removeTask, editTask } from './Redux/tasks/slice';
import { Task as TaskType } from './Redux/types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faFilePen, faTrash } from '@fortawesome/free-solid-svg-icons';

export default function Task({ task }: { task: TaskType }) {
    const [modalOpened, setModalOpened] = useState<boolean>(false);
    const [isChecked, setIsChecked] = useState<boolean>(false);

    const removeTaskModal = () => {
        setModalOpened(true);
    };
    const dispatch = useDispatch();

    const closeModal = () => {
        setModalOpened(false);
    };
    const toggleCheckbox = () => {
        setIsChecked(!isChecked);
    };
    const handleRemoveTask = () => {
        dispatch(removeTask(task.id));
    };
    const handleInputChange = (e: number) => {
        dispatch(editTask(e));
    };
    return (
        <div className={`flex justify-between gap-x-4 rounded p-4 items-center ${isChecked && 'bg-green-300'}`}>
            <div className=" w-[200px] break-all">
                <h4 className="pr-5 flex self-center font-semibold">{task.name}</h4>
            </div>
            <Button className="h-[40px]" variant="outlined" color="error" onClick={removeTaskModal}>
                <FontAwesomeIcon icon={faTrash} />
            </Button>
            <button
                type="submit"
                className="p-2 w-[60px] border border-[#1976D2] text-[#1976D2] rounded"
                onClick={() => handleInputChange(task.id)}>
                <FontAwesomeIcon icon={faFilePen} />
            </button>
            {isChecked ? (
                <button onClick={toggleCheckbox} className="text-[#1976D2]">
                    <FontAwesomeIcon icon={faCheck} />
                </button>
            ) : (
                <button
                    onClick={toggleCheckbox}
                    className="text-[#1976D2] border border-[#1976D2] p-2 w-[60px] rounded">
                    Done
                </button>
            )}
            <ConfirmModal modalOpened={modalOpened} onConfirm={handleRemoveTask} onCancel={closeModal} />
        </div>
    );
}
