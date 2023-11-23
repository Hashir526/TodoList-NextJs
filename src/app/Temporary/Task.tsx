"use client";

import React, { useState, FormEventHandler } from "react";
import { ITask } from "../../../types/tasks";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import Modal from "./Modal";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/navigation";
import { deleteTodo, editTodo } from "../../../public/api";

interface TaskProps {
  task: ITask;
}

const Task: React.FC<TaskProps> = ({ task }) => {
  const router = useRouter();
  const [modalEdit, SetModalEdit] = useState(false);
  const [modalDelete, SetModalDelete] = useState(false);
  const [taskToEdit, SetTaskToEdit] = useState(task.text);

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await editTodo({
      id: task.id,
      text: taskToEdit,
    });
    SetTaskToEdit("");
    SetModalEdit(false);
    router.refresh();
  };

  const handleDelete = async (id: string) => {
    await deleteTodo(id);
    SetModalDelete(false);
    router.refresh();
  };

  return (
    <div className="jutify-between">
      <tr key={task.id}>
        <td className="text-lg">{task.text}</td>
        <td>
          <FiEdit
            cursor="pointer"
            className="text-blue-500"
            size={25}
            onClick={() => SetModalEdit(true)}
          />
          <Modal modalOpen={modalEdit} setModalOpen={SetModalEdit}>
            <form onSubmit={handleSubmit}>
              <h3 className="font-bold text-lg">Edit Task</h3>
              <div className="modal-action"></div>
              <input
                value={taskToEdit}
                onChange={(e) => SetTaskToEdit(e.target.value)}
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
              <button className="btn" type="submit">
                Submit
              </button>
            </form>
          </Modal>
        </td>
        <td>
          <FiTrash2
            cursor="pointer"
            className="text-red-500"
            size={25}
            onClick={() => SetModalDelete(true)}
          />
          <Modal modalOpen={modalDelete} setModalOpen={SetModalDelete}>
            <h3 className="text=lg">Are You sure you want to delete</h3>
            <div className="modal-action">
              <button className="btn" onClick={() => handleDelete(task.id)}>
                yes
              </button>
            </div>
          </Modal>
        </td>
      </tr>
    </div>
  );
};

export default Task;
