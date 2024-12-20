"use client";
import React, { useState } from "react";
import { CreateMarkerForm } from "../../Forms/CreateMarkerForm";
import { IoIosAddCircleOutline } from "react-icons/io";

const DashboardLayoutAddTaskButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [xPos, setXPos] = useState(0);
  const [yPos, setYPos] = useState(0);

  const xPosVal = () => {
    const maxVal = window.innerWidth - 250;
    return Math.floor(Math.random() * (maxVal - 300 + 1) + 300);
  };

  const yPosVal = () => {
    const maxVal = window.innerHeight - 50;
    return Math.floor(Math.random() * (maxVal - 80 + 1) + 80);
  };

  const handleOpen = () => {
    setIsModalOpen(true);

    setXPos(xPosVal());
    setYPos(yPosVal());
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button
        onClick={handleOpen}
        className="w-9 flex justify-center items-center h-[64px]"
      >
        <IoIosAddCircleOutline />
      </button>
      {isModalOpen ? (
        <div
          className="bg-slate-700 absolute w-full h-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[800]"
          onClick={(e) => {
            handleClose();
            e.stopPropagation();
          }}
        >
          <CreateMarkerForm onClose={handleClose} position={{ xPos, yPos }} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default DashboardLayoutAddTaskButton;
