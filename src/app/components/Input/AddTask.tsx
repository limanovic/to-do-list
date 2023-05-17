'use client';
import React, { useEffect, useRef, useState } from 'react';
import ConfirmModal from '../ConfirmModal';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, saveTask } from '../Redux/tasks/slice';
import { TaskType, RootState } from '../Redux/types';

const AddTask = () => {
    const dispatch = useDispatch();

    const inputRef = useRef<HTMLInputElement>(null);
    const [taskName, setTaskName] = useState({ name: '', id: 0 });
    const [changedName, setChangedName] = useState<string>('');
    const [modalOpened, setmodalOpened] = useState<boolean>(false);
    let tasks = useSelector((state: RootState) => state.tasks);
    const task = tasks.find((task: TaskType) => task.name === task.isEditing);

    const handleAddTask = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!taskName || !taskName.name.trim()) alert('Task cannot be empty');
        else dispatch(addTask(taskName));
        setTaskName({ name: '', id: 0 });
    };
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setChangedName(e.target.value);
    };
    const openmodalOpened = () => {
        if (!changedName || !changedName.trim()) alert('Task cannot be empty');
        else setmodalOpened(true);
    };
    const inputChangeNotConfirmed = () => {
        setmodalOpened(false);
    };
    const inputChangeConfirmed = () => {
        dispatch(saveTask(changedName));
        setChangedName('');
        setmodalOpened(false);
    };
    useEffect(() => {
        if (task && task.isEditing && inputRef.current) {
            inputRef.current.focus();
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
                        defaultValue={task.name}
                        onChange={handleInputChange}
                    />
                    <button onClick={openmodalOpened} className="p-2 bg-[#2E7D32] text-white rounded">
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
                        onChange={(e) => setTaskName({ name: e.target.value, id: new Date().getTime() })}
                    />
                    <button type="submit" className="p-2 bg-[#1976D2] text-white rounded">
                        Add Task
                    </button>
                </form>
            )}
            {modalOpened && (
                <ConfirmModal
                    openModal={modalOpened}
                    onConfirm={inputChangeConfirmed}
                    onCancel={inputChangeNotConfirmed}
                />
            )}
        </div>
    );
};
export default AddTask;
