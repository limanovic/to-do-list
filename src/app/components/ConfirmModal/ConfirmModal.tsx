import { Modal, Box, Typography } from '@mui/material';
import style from 'styled-jsx/style';

type Task = {
    id: number;
    name: string;
};

export default function ConfirmModal({
    openModal,
    setOpenModal,
    setEditTask,
    setNewTask,
    setTasks,
    editTask,
    newTask,
    tasks,
}: {
    openModal: boolean;
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
    editTask: Task | null;
    newTask: string;
    setNewTask: React.Dispatch<React.SetStateAction<string>>;
    setEditTask: React.Dispatch<React.SetStateAction<Task | null>>;
    tasks: Task[];
}) {
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
        <Modal
            open={openModal}
            onClose={notConfirmed}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className="flex items-center justify-center">
            <Box className="bg-white w-[500px] h-[150px] text-center grid items-center rounded">
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Are you sure?
                </Typography>
                <Typography id="modal-modal-description" className=" gap-y-2">
                    <button className="p-2 w-20 rounded border border-gray-300" onClick={confirmed}>
                        Yes
                    </button>
                    <button className="p-2 w-20 rounded border border-gray-300" onClick={notConfirmed}>
                        No
                    </button>
                </Typography>
            </Box>
        </Modal>
    );
}
