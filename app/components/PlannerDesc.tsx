"use client";
import React, { Fragment, useEffect, useState } from "react";
import CreateBlock from "./function/CreateBlock";
import { CreateMarkerForm } from "./Forms/CreateMarkerForm";
import { useAppDispatch } from "@/redux/hooks";
import {
  addTask,
  deleteMarker,
  getAllTasks,
  getTasksByDate,
  updateTask,
} from "@/redux/features/MarkersPlan/marker-operations";
import { useSelector } from "react-redux";
import {
  filteredTasks,
  selectTasks,
} from "@/redux/features/MarkersPlan/selectors";
import CreateMarkerView from "./function/CreateMarkerView";
import { UpdateMarkerForm } from "./Forms/UpdateMarkerForm";
import { selectDate } from "@/redux/features/date/selectors";
import { Marker } from "@/redux/features/MarkersPlan/typesOrInterfaces";
import HoverButtons from "./HoverButtons/HoverButtons";
import MobView from "./views/MobView/MobView";

interface BlockPosition {
  x: number;
  y: number;
}

const PlannerDesc = () => {
  // const [positions, setPosition] = useState<BlockPosition[]>([]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);

  const [userInfo, setUserInfo] = useState<Marker | null>(null);

  const [xPos, setXPos] = useState(0);
  const [yPos, setYPos] = useState(0);

  const handleOpen = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const handleOpenUpdate = () => {
    setUpdateModal(true);
  };

  const handleCloseUpdate = () => {
    setUpdateModal(false);
  };

  const dispatch = useAppDispatch();

  const tasksList = useSelector(selectTasks);
  const datePicked = useSelector(selectDate);
  const filteredList = useSelector(filteredTasks);

  const [prevTasksList, setPrevTasksList] = useState(tasksList);

  useEffect(() => {
    if (JSON.stringify(filteredList) !== JSON.stringify(prevTasksList)) {
      setPrevTasksList(filteredList);
      dispatch(getTasksByDate({ date: datePicked }));
    }
  }, [prevTasksList, filteredList]);

  useEffect(() => {
    dispatch(getTasksByDate({ date: datePicked }));
    setPrevTasksList(tasksList);
  }, [dispatch, datePicked]);

  const createAPlan = (e: any) => {
    setXPos(e.screenX);
    setYPos(e.screenY);
  };

  return (
    <div className="block lg:hidden overflow-y-hidden">
      <MobView />
    </div>
    // <div
    //   className="w-full  relative overflow-hidden overflow-y-hidden h-[82.5vh] lg:h-full"
    //   onClick={(e) => {
    //     console.log(e);
    //     createAPlan(e);
    //     handleOpen();
    //   }}
    // >
    //   {!filteredList ||
    //     (filteredList.length === 0 && (
    //       <div className="absolute top-[50%] left-[50%] text-gray-400">
    //         No markers
    //       </div>
    //     ))}
    //   <ul className="relative">
    //     {filteredList
    //       ? filteredList.map((t) => (
    //           <li
    //             key={t._id}
    //             onClick={(e) => {
    //               e.stopPropagation();
    //               setUserInfo(t);
    //               handleOpenUpdate();
    //             }}
    //             style={{ top: t.coordinates.y, left: t.coordinates.x }}
    //             className="absolute w-[226px] h-min-[250px] group"
    //           >
    //             <HoverButtons
    //               setUserFunc={setUserInfo}
    //               onOpenUpd={handleOpenUpdate}
    //               task={t}
    //             />
    //             <CreateMarkerView
    //               id={t._id}
    //               title={t.title}
    //               taskText={t.taskText}
    //             />
    //           </li>
    //         ))
    //       : ""}
    //   </ul>
    //   {isModalOpen ? (
    //     <div
    //       className="bg-slate-700 absolute w-full h-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-50"
    //       onClick={(e) => {
    //         handleClose();
    //         e.stopPropagation();
    //       }}
    //     >
    //       <CreateMarkerForm onClose={handleClose} position={{ xPos, yPos }} />
    //     </div>
    //   ) : (
    //     ""
    //   )}
    //   {updateModal ? (
    //     <>
    //       <div
    //         className="bg-slate-700 absolute w-full h-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-50"
    //         onClick={(e) => {
    //           handleCloseUpdate();
    //           e.stopPropagation();
    //         }}
    //       >
    //         <UpdateMarkerForm onClose={handleCloseUpdate} info={userInfo} />
    //       </div>
    //     </>
    //   ) : (
    //     ""
    //   )}
    // </div>
  );
};

export default PlannerDesc;

//  translate-x-[-190px] translate-y-[-150px]
