"use client";
import React, { useState } from "react";
import { CreateMarkerForm } from "../../Forms/CreateMarkerForm";

const DashboardLayoutAddTaskButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpen = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={handleOpen}>add todo</button>
      {isModalOpen ? (
        <div
          className="bg-slate-700 absolute w-full h-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-50"
          onClick={(e) => {
            handleClose();
            e.stopPropagation();
          }}
        >
          <CreateMarkerForm onClose={handleClose} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default DashboardLayoutAddTaskButton;
