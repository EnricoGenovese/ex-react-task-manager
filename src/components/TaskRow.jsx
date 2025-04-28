import { memo } from "react";
import { Link } from "react-router-dom";

const TaskRow = memo(({ task }) => {
    const getStatusColor = (status) => {
        switch (status) {
            case 'To do':
                return 'red';
            case 'Doing':
                return 'yellow';
            case 'Done':
                return 'green'
            default:
                return 'black'
        }
    }
    return (
        <tr>
            <td><Link className='taskTitle' to={`/tasks/${task.id}`}>{task.title}</Link></td>
            <td style={{ backgroundColor: getStatusColor(task.status) }}>{task.status}</td>
            <td>{new Date(task.createdAt).toLocaleDateString()}</td>
        </tr>
    )
});

export default TaskRow;