'use client';
import React, { useEffect, useRef, useState } from 'react';
import ConfirmModal from '../ConfirmModal';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, saveInputChange } from '../Redux/addTaskSlice';

type Task = {
    id: number;
    name: string;
    isEditing: string | null;
};

interface RootState {
    tasks: Task[];
}

const AddTask = () => {
    const dispatch = useDispatch();

    const inputRef = useRef<HTMLInputElement>(null);
    let tasks = useSelector((state: RootState) => state.tasks);
    const [taskName, setTaskName] = useState({ name: '', id: 0, isEditing: null });
    const task = tasks.find((task: Task) => task.name === task.isEditing);
    const [changedName, setChangedName] = useState<string>('');
    const [saveModal, setSaveModal] = useState<boolean>(false);

    const handleAddTask = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(addTask(taskName));
        setTaskName({ name: '', id: 0, isEditing: null });
    };
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setChangedName(e.target.value);
    };
    const openSaveModal = () => {
        if (changedName.length < 1 || changedName.trim() == '') alert('Task cannot be empty');
        else setSaveModal(true);
    };
    const inputChangeNotConfirmed = () => {
        setSaveModal(false);
    };
    const inputChangeConfirmed = () => {
        dispatch(saveInputChange(changedName));
        setChangedName('');
        setSaveModal(false);
    };
    useEffect(() => {
        if (task && task.isEditing && inputRef.current) {
            inputRef.current.focus();
        }
    }, [task?.isEditing]);

    return (
        <div>
            {task && task.isEditing ? (
                <>
                    <input
                        className="border-b-2 solid gray-300 p-1 rounded mr-5 focus:outline-none"
                        type="text"
                        placeholder="Enter task"
                        ref={inputRef}
                        defaultValue={task.name}
                        onChange={handleInputChange}
                    />
                    <button onClick={openSaveModal} className="p-2 bg-[#2E7D32] text-white rounded">
                        Save
                    </button>
                </>
            ) : (
                <form onSubmit={(e) => handleAddTask(e)}>
                    <input
                        className="border-b-2 solid gray-300 p-1 rounded mr-5 focus:outline-none"
                        type="text"
                        placeholder="Enter task"
                        ref={inputRef}
                        value={taskName.name}
                        onChange={(e) =>
                            setTaskName({ name: e.target.value, id: new Date().getTime(), isEditing: null })
                        }
                    />
                    <button type="submit" className="p-2 bg-[#1976D2] text-white rounded">
                        Add Task
                    </button>
                </form>
            )}
            {saveModal && (
                <ConfirmModal
                    openModal={saveModal}
                    onConfirm={inputChangeConfirmed}
                    onCancel={inputChangeNotConfirmed}
                />
            )}
        </div>
    );
};
export default AddTask;
