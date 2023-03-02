import React from "react";
import './styles/stylesTaskRow.css';

const TaskRow = ({task, toggleTask}) => {
    return (
        <tr>
            <td>
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
