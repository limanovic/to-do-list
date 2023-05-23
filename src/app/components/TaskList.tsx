'use client';
import Task from './Task';
import { Button } from '@mui/material';
import { useState } from 'react';
import ConfirmModal from './ConfirmModal';
import { useAppDispatch, useAppSelector } from './Redux/hooks';
import { Project } from './Redux/types';
import { deleteTasks } from './Redux/projects/slice';

export default function TaskList() {
    const dispatch = useAppDispatch();
    const [modalOpened, setModalOpened] = useState<boolean>(false);
    let projects = useAppSelector((state) => state.projects);
    const project = projects.find((project: Project) => project.id === project.isActive);
    const openModal = () => {
        setModalOpened(true);
    };
    const closeModal = () => {
        setModalOpened(false);
    };
    const deleteAllTasks = () => {
        dispatch(deleteTasks());
        setModalOpened(false);
    };
    return (
        <>
            <ul className="grid">
                {project?.tasks?.map((task) => {
                    if (task.parentId === project?.isActive) {
                        return (
                            <div key={task.id}>
                                <li key={task.id} className="flex items-center mb-2 justify-center">
                                    <Task task={task} />
                                </li>
                                <hr />
                            </div>
                        );
                    }
                })}
                <hr />
                {project && project.tasks.length > 1 ? (
                    <Button className="h-[40px] mt-2" variant="outlined" color="error" onClick={openModal}>
                        Delete all
                    </Button>
                ) : null}
                <ConfirmModal modalOpened={modalOpened} onConfirm={deleteAllTasks} onCancel={closeModal} />
            </ul>
        </>
    );
}
