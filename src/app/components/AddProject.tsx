import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAppDispatch, useAppSelector } from './Redux/hooks';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { addProject, saveProject } from './Redux/projects/slice';
import { useEffect, useRef, useState } from 'react';
import { Project } from './Redux/types';
import { emptyProject } from './Redux/projects/slice';
import ConfirmModal from './ConfirmModal';

const AddProject = () => {
    const dispatch = useAppDispatch();
    let projects = useAppSelector((state) => state.projects);
    const [newProject, setNewProject] = useState<Project>(emptyProject);
    const inputRef = useRef<HTMLInputElement>(null);
    const [changedName, setChangedName] = useState<string>('');
    const project = projects.find((task: Project) => task.name === task.isEditing);
    const [modalOpened, setModalOpened] = useState<boolean>(false);

    const handleAddProject = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!newProject || !newProject.name.trim()) alert('Task cannot be empty');
        else dispatch(addProject(newProject));
        setNewProject(emptyProject);
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
        dispatch(saveProject(changedName));
        setChangedName('');
        setModalOpened(false);
    };

    useEffect(() => {
        if (project && project.isEditing && inputRef.current) {
            inputRef.current.focus();
            setChangedName(project.name);
        }
    }, [project, project?.isEditing]);
    return (
        <div>
            {project && project.isEditing ? (
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
                <form onSubmit={(e) => handleAddProject(e)}>
                    <input
                        className="border-b-2 solid gray-300 p-1 rounded mr-5 focus:outline-none"
                        type="text"
                        placeholder="Enter task"
                        ref={inputRef}
                        value={newProject.name}
                        onChange={(e) => setNewProject({ name: e.target.value, id: new Date().getTime() })}
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
export default AddProject;
