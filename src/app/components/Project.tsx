import { Button } from '@mui/material';
import React, { useState } from 'react';
import ConfirmModal from './ConfirmModal';
import { useDispatch } from 'react-redux';
import { Project } from './Redux/types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePen, faList, faTrash } from '@fortawesome/free-solid-svg-icons';
import { removeProject, editProject, currentProject } from './Redux/projects/slice';

export default function Task({ project }: { project: Project }) {
    const [modalOpened, setModalOpened] = useState<boolean>(false);

    const removeProjectModal = () => {
        setModalOpened(true);
    };
    const dispatch = useDispatch();

    const closeModal = () => {
        setModalOpened(false);
    };
    const handleRemoveProject = () => {
        dispatch(removeProject(project.id));
    };
    const handleInputChange = (e: number) => {
        dispatch(editProject(e));
    };
    return (
        <div className="flex justify-between gap-x-4 rounded p-4 items-center">
            <div className=" w-[200px] break-all">
                <h4 className="pr-5 flex self-center font-semibold">{project.name}</h4>
            </div>
            <Button className="h-[40px]" variant="outlined" color="error" onClick={removeProjectModal}>
                <FontAwesomeIcon icon={faTrash} />
            </Button>
            <button
                type="submit"
                className="p-2 w-[60px] border border-[#1976D2] text-[#1976D2] rounded"
                onClick={() => handleInputChange(project.id)}>
                <FontAwesomeIcon icon={faFilePen} />
            </button>
            <button
                onClick={() => dispatch(currentProject(project.id))}
                className="text-[#1976D2] border border-[#1976D2] p-2 w-[60px] rounded">
                <FontAwesomeIcon icon={faList} />
            </button>
            <ConfirmModal modalOpened={modalOpened} onConfirm={handleRemoveProject} onCancel={closeModal} />
        </div>
    );
}
