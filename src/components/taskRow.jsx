import React from "react";

const TaskRow = ({task, toggleTask}) => {
    return (
        <tr>
            <td className='d-flex justify-content-between'>
                <span>{task.name}</span>
                <input
                type="checkbox"
                checked={task.done}
                onChange={() => toggleTask(task)}
                />
            </td>
        </tr>
    );
};

export default TaskRow;
