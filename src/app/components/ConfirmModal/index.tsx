import { Modal, Box, Typography } from '@mui/material';
import React from 'react';

type ModalProps = {
    modalOpened: boolean;
    onConfirm?: (id?: number) => void;
    onCancel: () => void;
};

const ConfirmModal: React.FC<ModalProps> = ({ modalOpened, onConfirm, onCancel }) => {
    const handleConfirm = (id?: number) => {
        if (onConfirm) {
            onConfirm(id);
        }
    };
    return (
        <Modal
            open={modalOpened}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className="flex items-center justify-center">
            <Box className="bg-white w-[500px] h-[150px] text-center grid items-center rounded">
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Are you sure?
                </Typography>
                <Typography id="modal-modal-description" className=" gap-y-2">
                    <button className="p-2 w-20 rounded border border-gray-300" onClick={() => handleConfirm()}>
                        Yes
                    </button>
                    <button className="p-2 w-20 rounded border border-gray-300" onClick={onCancel}>
                        No
                    </button>
                </Typography>
            </Box>
        </Modal>
    );
};
export default ConfirmModal;
