'use client';
import { Button } from '@mui/material';
import { useState } from 'react';
import ConfirmModal from './ConfirmModal';
import { useAppDispatch, useAppSelector } from './Redux/hooks';
import Project from './Project';
import { deleteProjects } from './Redux/projects/slice';

export default function TaskList() {
    const projects = useAppSelector((state) => state.projects);
    const dispatch = useAppDispatch();
    const [modalOpened, setModalOpened] = useState<boolean>(false);
    const openModal = () => {
        setModalOpened(true);
    };
    const closeModal = () => {
        setModalOpened(false);
    };
    const deleteAllProjects = () => {
        dispatch(deleteProjects());
        setModalOpened(false);
    };
    return (
        <>
            <ul className="grid">
                {projects?.map((project) => (
                    <div key={project.id}>
                        <li key={project.id} className="flex items-center mb-2 justify-center">
                            <Project project={project} />
                        </li>
                        <hr />
                    </div>
                ))}
                <hr />
                {projects.length > 1 && (
                    <Button className="h-[40px] mt-2" variant="outlined" color="error" onClick={openModal}>
                        Delete all
                    </Button>
                )}
                <ConfirmModal modalOpened={modalOpened} onConfirm={deleteAllProjects} onCancel={closeModal} />
            </ul>
        </>
    );
}
