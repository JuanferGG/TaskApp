import React from "react";

const TaskRow = ({task}) => {
    return (
        <tr>
            <td>
                {task.name}
                <input
                type="checkbox"
                checked={task.done}
                onChange={() => alert("cambiando valor")}
                />
            </td>
        </tr>
    );
};

export default TaskRow;
