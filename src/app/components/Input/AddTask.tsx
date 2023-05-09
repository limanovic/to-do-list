'use client';
import React from 'react';

type Task = {
    id: number;
    name: string;
};

const AddTask = ({
    newTask,
    setNewTask,
    tasks,
    setTasks,
    saveEditedTask,
    editTask,
    inputRef,
}: {
    newTask: string;
    setNewTask: React.Dispatch<React.SetStateAction<string>>;
    tasks: Task[];
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
    saveEditedTask: (e: { preventDefault: () => void }) => void;
    editTask: Task | null;
    inputRef: any;
}) => {
    const addTask = (e: { preventDefault: () => void }) => {
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
    return (
        <div>
            <form onSubmit={editTask ? saveEditedTask : addTask}>
                <input
                    className="border-b-2 solid gray-300 p-1 rounded mr-5 focus:outline-none"
                    type="text"
                    placeholder="Enter task"
                    ref={inputRef}
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                />
                {editTask ? (
                    <button className="p-2 bg-[#2E7D32] text-white rounded" onClick={saveEditedTask}>
                        Save
                    </button>
                ) : (
                    <button className="p-2 bg-[#1976D2] text-white rounded" onClick={addTask}>
                        Add Task
                    </button>
                )}
            </form>
        </div>
    );
};
export default AddTask;
