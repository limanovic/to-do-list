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
}: {
    task: Task;
    removeTask: (id: number) => void;
    editTaskName: (task: Task) => void;
}) {
    return (
        <div className="flex gap-x-4">
            <h4 className="pr-5 flex self-center">{task.name}</h4>
            <Button className="mr-5" variant="outlined" color="error" onClick={() => removeTask(task.id)}>
                Delete
            </Button>
            <Button className="mr-5" variant="contained" onClick={() => editTaskName(task)}>
                Edit
            </Button>
        </div>
    );
}
