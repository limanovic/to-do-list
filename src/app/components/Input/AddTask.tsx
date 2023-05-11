'use client';
import React, { FormEventHandler, SyntheticEvent } from 'react';
import ConfirmModal from '../ConfirmModal/ConfirmModal';

type Task = {
    id: number;
    name: string;
};

const AddTask = ({
    newTask,
    setNewTask,
    tasks,
    setTasks,
    editTask,
    inputRef,
    setOpenModal,
    openModal,
    setEditTask,
}: {
    newTask: string;
    setNewTask: React.Dispatch<React.SetStateAction<string>>;
    tasks: Task[];
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
    editTask: Task | null;
    inputRef: any;
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
    openModal: boolean;
    setEditTask: React.Dispatch<React.SetStateAction<Task | null>>;
}) => {
    const addTask: FormEventHandler<HTMLFormElement> = (e: SyntheticEvent) => {
        e.preventDefault();
        if (newTask.trim() !== '') {
            const task: Task = {
                id: new Date().getTime(),
                name: newTask,
            };
            setTasks([...tasks, task]);
            setNewTask('');
        }
    };
    const saveEditedTask: FormEventHandler<HTMLFormElement> = (e: SyntheticEvent) => {
        e.preventDefault();
        if (editTask) {
            if (newTask.length < 1 || newTask.trim() === '') {
                alert('Task cannot be blank');
            } else {
                setOpenModal(true);
            }
        }
    };
    const confirmed = () => {
        if (editTask) {
            const updatedTasks: Task[] = tasks.map((task: Task) =>
                task.id === editTask.id ? { ...task, name: newTask } : task,
            );
            if (newTask.length < 1 || newTask.trim() === '') {
                alert('Task cannot be blank');
            } else {
                setTasks(updatedTasks);
                setNewTask('');
                setEditTask(null);
            }
            setOpenModal(false);
        }
    };
    const notConfirmed = () => {
        setOpenModal(false);
    };
    return (
        <div>
            {editTask ? (
                <form onSubmit={saveEditedTask}>
                    <input
                        className="border-b-2 solid gray-300 p-1 rounded mr-5 focus:outline-none"
                        type="text"
                        placeholder="Enter task"
                        ref={inputRef}
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                    />
                    <button type="submit" className="p-2 bg-[#2E7D32] text-white rounded">
                        Save
                    </button>
                </form>
            ) : (
                <form onSubmit={addTask}>
                    <input
                        className="border-b-2 solid gray-300 p-1 rounded mr-5 focus:outline-none"
                        type="text"
                        placeholder="Enter task"
                        ref={inputRef}
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                    />
                    <button type="submit" className="p-2 bg-[#1976D2] text-white rounded">
                        Add Task
                    </button>
                </form>
            )}
            {openModal ? <ConfirmModal openModal={openModal} onConfirm={confirmed} onCancel={notConfirmed} /> : ''}
        </div>
    );
};
export default AddTask;
