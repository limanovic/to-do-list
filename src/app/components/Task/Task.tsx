import { Button } from '@mui/material';
import React from 'react';

type Task = {
    id: number;
    name: string;
};

export default function Task({
    task,
    removeTask,
    editTaskName,
    editTask,
    saveEditedTask,
}: {
    task: Task;
    removeTask: (id: number) => void;
    editTaskName: (task: Task) => void;
    saveEditedTask: () => void;
    editTask: Task | null;
}) {
    return (
        <>
            <h4 className="pr-5">{task.name}</h4>
            <Button className="mr-5" variant="outlined" color="error" onClick={() => removeTask(task.id)}>
                Delete
            </Button>
            {editTask && editTask.id === task.id ? (
                <Button className="mr-5" variant="contained" color="success" onClick={saveEditedTask}>
                    Save
                </Button>
            ) : (
                <Button className="mr-5" variant="contained" onClick={() => editTaskName(task)}>
                    Edit
                </Button>
            )}
        </>
    );
}
