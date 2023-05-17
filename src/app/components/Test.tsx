import { faPlus, faFilePen, faTrash, faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '@mui/material';

export default function Test() {
    return (
        <div className="w-1/4 p-4 bg-gray-200 min-h-screen shadow-lg shadow-gray-500/50 leading-7">
            Enter your task in the text input. When you press <b>Enter</b> or click the{' '}
            <button type="submit" className="bg-[#1976D2] w-[60px] text-white rounded">
                <FontAwesomeIcon icon={faPlus} />
            </button>
            , a task will be added to the list below the input along with a checkbox, the Delete and the Edit buttons.
            When <button className="text-[#1976D2] border border-[#1976D2] w-[60px] rounded">Done</button>
            is clicked, the task turns <b className="font-normal bg-green-300">green</b> and{' '}
            <button className="text-[#1976D2]">
                <FontAwesomeIcon icon={faCheck} />
            </button>{' '}
            replaces <button className="text-[#1976D2] border border-[#1976D2] w-[60px] rounded">Done</button>,
            indicating completion. When you click the{' '}
            <Button variant="outlined" color="error">
                <FontAwesomeIcon icon={faTrash} />
            </Button>
            , a confirmation modal asks you to confirm. Are you sure? If you choose{' '}
            <button className="w-20 rounded border border-gray-300">Yes</button>, item is removed from the list; if you
            choose <button className="w-20 rounded border border-gray-300">No</button>, the task remains on the list.The{' '}
            <button type="submit" className="bg-[#1976D2] w-[60px] text-white rounded">
                <FontAwesomeIcon icon={faPlus} />
            </button>{' '}
            is replaced by the <button className="p-1 bg-[#2E7D32] text-white rounded">Save</button> button when the{' '}
            <button type="submit" className="w-[60px] border border-[#1976D2] text-[#1976D2] rounded">
                <FontAwesomeIcon icon={faFilePen} />
            </button>
            button is selected, and the task appears in the input ready for editing. When you click{' '}
            <button className="p-1 bg-[#2E7D32] text-white rounded">Save</button>, a confirmation modal window asks you
            if you are sure. If you select <button className="w-20 rounded border border-gray-300">Yes</button>, the
            task is changed; if you select <button className="w-20 rounded border border-gray-300">No</button>, it
            remains unchanged and you can continue editing.
        </div>
    );
}
