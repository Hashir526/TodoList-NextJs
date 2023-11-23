"use client";

import React, { useState, FormEventHandler } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import Modal from "./Modal";

export function AddTask() {
  const [modelOpen, setModalOpen] = useState<boolean>(false);
  const [newTaskValue, setNewTaskValue] = useState<string>("");

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    console.log(newTaskValue);
  };

  return (
    <div>
      <button
        onClick={() => setModalOpen(true)}
        className="btn btn-primary w-full text-xl"
      >
        Button
        <AiOutlinePlus className="ml-2 " size={20} />
      </button>
      <Modal modalOpen={modelOpen} setModalOpen={setModalOpen}>
        <form onSubmit={handleSubmit}>
          <h3 className="font-bold text-lg">Add new Task</h3>
          <div className="modal-action"></div>
          <input
            value={newTaskValue}
            onChange={(e) => setNewTaskValue(e.target.value)}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
          <button className="btn" type="submit">
            Submit
          </button>
        </form>
      </Modal>
    </div>
  );
}
