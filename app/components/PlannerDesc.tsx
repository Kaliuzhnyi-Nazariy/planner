"use client";
import React, { useEffect, useState } from "react";
import CreateBlock from "./function/CreateBlock";
import { CreateMarkerForm } from "./Forms/CreateMarkerForm";
import { useAppDispatch } from "@/redux/hooks";
import { getAllTasks } from "@/redux/features/MarkersPlan/marker-operations";
import { useSelector } from "react-redux";
import { selectTasks } from "@/redux/features/MarkersPlan/selectors";

interface BlockPosition {
  x: number;
  y: number;
}

const PlannerDesc = () => {
  const [positions, setPosition] = useState<BlockPosition[]>([]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [xPos, setXPos] = useState(0);
  const [yPos, setYPos] = useState(0);

  const handleOpen = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const dispatch = useAppDispatch();

  const tasksTitle = useSelector(selectTasks);
  console.log(tasksTitle.map((task) => task.title));

  useEffect(() => {
    dispatch(getAllTasks());
  }, [dispatch]);

  const createAPlan = (e: any) => {
    // console.log(e);
    // // const x = e.clientX;
    // //   const y = e.clientY;
    // const x = e.screenX;
    // const y = e.screenY;

    // setPosition([...positions, { x, y }]);
    // console.log({ x, y });
    setXPos(e.screenX);
    setYPos(e.screenY);
    const x = e.screenX;
    const y = e.screenY;

    setPosition([...positions, { x, y }]);
  };

  return (
    <div
      className="w-full h-full relative overflow-hidden overflow-y-hidden"
      onClick={(e) => {
        createAPlan(e);
        handleOpen();
      }}
    >
      {/* smth*/}
      {positions.length > 0
        ? positions.map((position, index) => (
            <CreateBlock x={position?.x} y={position?.y} key={index} />
          ))
        : ""}

      {tasksTitle
        ? tasksTitle.map((t) => {
            return <p key={t._id}>{t.title}</p>;
          })
        : ""}

      {isModalOpen ? (
        <div
          className="bg-slate-700 absolute w-full h-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-50"
          onClick={(e) => {
            console.log("Modal closed info: ", xPos, yPos);
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

export default PlannerDesc;

//  translate-x-[-190px] translate-y-[-150px]
