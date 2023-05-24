import { faPlus, faFilePen, faTrash, faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React, { useState } from 'react';

export default function Test() {
    const [expanded, setExpanded] = useState<string | false>(false);

    const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
    };
    return (
        <div className="w-1/4 p-4 bg-gray-200 min-h-screen shadow-lg shadow-gray-500/50 leading-7">
            <h1 className="text-2xl font-bold mb-4 pt-4 text-center">Guide</h1>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content" id="panel1bh-header">
                    <Typography sx={{ width: '50%', flexShrink: 0 }}>Input section</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Enter your task in the text input. When you press <b>Enter</b> or click the{' '}
                        <button type="submit" className="bg-[#1976D2] w-[60px] text-white rounded">
                            <FontAwesomeIcon icon={faPlus} />
                        </button>
                        , a task will be added to the list below the input along with a checkbox, the Delete and the
                        Edit buttons.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2bh-content" id="panel2bh-header">
                    <Typography sx={{ width: '50%', flexShrink: 0 }}>Task done</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        When <button className="text-[#1976D2] border border-[#1976D2] w-[60px] rounded">Done</button>{' '}
                        is clicked, the task turns <b className="font-normal bg-green-300">green</b> and{' '}
                        <button className="text-[#1976D2]">
                            <FontAwesomeIcon icon={faCheck} />
                        </button>{' '}
                        replaces{' '}
                        <button className="text-[#1976D2] border border-[#1976D2] w-[60px] rounded">Done</button>,
                        indicating completion. If you want to undo task click{' '}
                        <button className="text-[#1976D2]">
                            <FontAwesomeIcon icon={faCheck} />
                        </button>
                        {'. '}
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3bh-content" id="panel3bh-header">
                    <Typography sx={{ width: '50%', flexShrink: 0 }}>Deleting task</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        When you click the{' '}
                        <Button variant="outlined" color="error">
                            <FontAwesomeIcon icon={faTrash} />
                        </Button>
                        , a confirmation modal asks you to confirm. Are you sure? If you choose{' '}
                        <button className="w-20 rounded border border-gray-300">Yes</button>, item is removed from the
                        list; if you you choose <button className="w-20 rounded border border-gray-300">No</button>, the
                        task remains on task remains on list. When there are two or more tasks listed,{' '}
                        <Button variant="outlined" color="error">
                            Delete all
                        </Button>{' '}
                        appears. A confirmation modal asks you whether you are sure when you click it. All tasks are
                        removed from the list if you choose{' '}
                        <button className="w-20 rounded border border-gray-300">Yes</button>; if you choose{' '}
                        <button className="w-20 rounded border border-gray-300">No</button>, the modal disappears and
                        the list stays the same.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel4bh-content" id="panel4bh-header">
                    <Typography sx={{ width: '50%', flexShrink: 0 }}>Editing task</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        The{' '}
                        <button type="submit" className="bg-[#1976D2] w-[60px] text-white rounded">
                            <FontAwesomeIcon icon={faPlus} />
                        </button>{' '}
                        is replaced by the <button className="p-1 bg-[#2E7D32] text-white rounded">Save</button> button
                        when the{' '}
                        <button type="submit" className="w-[60px] border border-[#1976D2] text-[#1976D2] rounded">
                            <FontAwesomeIcon icon={faFilePen} />
                        </button>
                        button is selected, and the task appears in the input ready for editing. When you click{' '}
                        <button className="p-1 bg-[#2E7D32] text-white rounded">Save</button>, a confirmation modal
                        window asks window asks you if you are sure. If you select{' '}
                        <button className="w-20 rounded border border-gray-300">Yes</button>, the task is changed; you
                        select <button className="w-20 rounded border border-gray-300">No</button>, it remains unchanged
                        and you can continue editing.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
