import React from "react";
import { ITask } from "../../../types/tasks";

interface TaskProps {
  task: ITask;
}

const Task: React.FC<TaskProps> = ({ task }) => {
  return (
    <div className="">
      <tr key={task.id}>
        <td>{task.id}</td>
        <td>{task.text}</td>
      </tr>
    </div>
  );
};

export default Task;
