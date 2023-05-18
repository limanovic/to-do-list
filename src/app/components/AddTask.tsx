'use client';
import React, { useEffect, useRef, useState } from 'react';
import ConfirmModal from './ConfirmModal';
import { addTask, saveTask } from './Redux/tasks/slice';
import { Task as TaskType } from './Redux/types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { emptyTask } from './Redux/tasks/slice';
import { useAppDispatch, useAppSelector } from './Redux/hooks';

const AddTask = () => {
    let tasks = useAppSelector((state) => state.tasks);
    const dispatch = useAppDispatch();
    const task = tasks.find((task: TaskType) => task.name === task.isEditing);
    const inputRef = useRef<HTMLInputElement>(null);
    const [newTask, setNewTask] = useState<TaskType>(emptyTask);
    const [changedName, setChangedName] = useState<string>('');
    const [modalOpened, setModalOpened] = useState<boolean>(false);

    const handleAddTask = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!newTask || !newTask.name.trim()) alert('Task cannot be empty');
        else dispatch(addTask(newTask));
        setNewTask(emptyTask);
    };
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setChangedName(e.target.value);
    };
    const openModal = () => {
        if (!changedName || !changedName.trim()) alert('Task cannot be empty');
        else setModalOpened(true);
    };
    const cancelChange = () => {
        setModalOpened(false);
    };
    const saveChange = () => {
        dispatch(saveTask(changedName));
        setChangedName('');
        setModalOpened(false);
    };
    useEffect(() => {
        if (task && task.isEditing && inputRef.current) {
            inputRef.current.focus();
            setChangedName(task.name);
        }
    }, [task, task?.isEditing]);
    return (
        <div>
            {task && task.isEditing ? (
                <>
                    <input
                        className="border-b-2 solid gray-300 p-1 rounded mr-5 focus:outline-none"
                        type="text"
                        placeholder="Enter task"
                        ref={inputRef}
                        value={changedName}
                        onChange={handleInputChange}
                    />
                    <button onClick={openModal} className="p-2 bg-[#2E7D32] text-white rounded">
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
                        value={newTask.name}
                        onChange={(e) => setNewTask({ name: e.target.value, id: new Date().getTime() })}
                    />
                    <button type="submit" className="p-2 bg-[#1976D2] w-[60px] text-white rounded">
                        <FontAwesomeIcon icon={faPlus} />
                    </button>
                </form>
            )}
            <ConfirmModal modalOpened={modalOpened} onConfirm={saveChange} onCancel={cancelChange} />
        </div>
    );
};
export default AddTask;
