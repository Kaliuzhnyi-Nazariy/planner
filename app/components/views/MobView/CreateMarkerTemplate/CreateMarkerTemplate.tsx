import { CreateMarkerForm } from "@/app/components/Forms/CreateMarkerForm";
import { UpdateMarkerForm } from "@/app/components/Forms/UpdateMarkerForm";
import { useAppDispatch } from "@/redux/hooks";
import React, { useState } from "react";

const CreateMarkerTemplate = () => {
  const dispatch = useAppDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [xPos, setXPos] = useState(0);
  const [yPos, setYPos] = useState(0);

  const handleOpen = () => {
    setIsModalOpen(true);

    setXPos(xPosVal());
    setYPos(yPosVal());
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const xPosVal = () => {
    const maxVal = window.innerWidth - 250;
    return Math.floor(Math.random() * (maxVal - 300 + 1) + 300);
  };

  const yPosVal = () => {
    const maxVal = window.innerHeight - 50;
    return Math.floor(Math.random() * (maxVal - 80 + 1) + 80);
  };

  return (
    <>
      <li
        className="flex border-2 border-dashed border-gray-400 bg-gray-200/50 hover:bg-gray-200 cursor-pointer p-2 h-[62px] overflow-hidden lg:hidden sm:h-[150px] sm:w-[160px]"
        onClick={() => handleOpen()}
      >
        Create new Marker
      </li>
      {isModalOpen ? (
        <div
          className="bg-slate-700 absolute w-full h-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-50"
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
    </>
  );
};

export default CreateMarkerTemplate;
