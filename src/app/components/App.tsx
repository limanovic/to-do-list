'use client';

import React from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';

export default function App() {
    return (
        <div className="p-4 flex">
            <div className="w-3/4 px-20">
                <h1 className="text-2xl font-bold mb-4 text-center">To-Do List</h1>
                <div className="flex mb-4 justify-center">
                    <AddTask />
                </div>
                <TaskList />
            </div>
            <div className="w-1/4 p-4">
                Enter your task in the text input. When you press <b>Enter</b> or click the <b>Add Task</b> button, a
                task will be added to the list below the input along with a checkbox, the Delete and the Edit buttons.
                When a checkbox is clicked, the task turns green, indicating completion. When you click the
                <b>Delete</b> button, a confirmation modal asks you to confirm. Are you sure? If you choose <b>Yes</b>,
                the item is removed from the list; if you choose <b>No</b>, the task remains on the list.The{' '}
                <b>Add Task</b> button is replaced by the <b>Save</b> button when the <b>Edit</b> button is selected,
                and the task appears in the input ready for editing. When you click <b>Save</b>, a confirmation modal
                window asks you if you are sure. If you select <b>Yes</b>, the task is changed; if you select <b>No</b>,
                it remains unchanged and you can continue editing.
            </div>
        </div>
    );
}
