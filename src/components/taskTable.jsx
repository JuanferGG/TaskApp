import React from "react";
import TaskRow from "./taskRow";

const TaskTable = ({ tasks }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Task</th>
                </tr>
            </thead>
            <tbody>
                {tasks.map((task) => (
                    <TaskRow task={task} key={task.name}/>
                ))}
            </tbody>
        </table>
    );
};

export default TaskTable;
