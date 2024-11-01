"use client";
import React, { useEffect, useState } from "react";
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
import { selectTasks } from "@/redux/features/MarkersPlan/selectors";
import CreateMarkerView from "./function/CreateMarkerView";
import { UpdateMarkerForm } from "./Forms/UpdateMarkerForm";

interface BlockPosition {
  x: number;
  y: number;
}

const PlannerDesc = () => {
  // const [positions, setPosition] = useState<BlockPosition[]>([]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);

  const [userInfo, setUserInfo] = useState({});

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

  const tasksTitle = useSelector(selectTasks);

  const dateForMarkers = localStorage.getItem("date");

  const fetchMarkerByDate = async () => {
    await dispatch(getTasksByDate({ date: dateForMarkers }));
  };

  useEffect(() => {
    dispatch(getAllTasks());
    // fetchMarkerByDate();
  }, [
    dispatch,
    // dateForMarkers
  ]);

  // useEffect(() => {
  //   // setXPos(250);
  //   // setYPos(419);

  //   console.log(dateForMarkers);

  //   // dispatch(
  //   //   addTask({
  //   //     title: "title task created through useEffect",
  //   //     taskText: "taskText task created through useEffect",
  //   //     date: dateForMarkers,
  //   //     x: 554,
  //   //     y: 556,
  //   //   })
  //   // );

  //   // console.log(tasksTitle);

  //   // console.log("xPos: ", xPos);
  // }, []);

  const createAPlan = (e: any) => {
    setXPos(e.screenX);
    setYPos(e.screenY);
  };

  return (
    <div
      className="w-full h-full relative overflow-hidden overflow-y-hidden"
      onClick={(e) => {
        createAPlan(e);
        handleOpen();
      }}
    >
      {tasksTitle
        ? tasksTitle.map((t) => (
            // <CreateMarkerView
            //   key={t._id}
            //   id={t._id}
            //   title={t.title}
            //   taskText={t.taskText}
            //   x={t.coordinates.x}
            //   y={t.coordinates.y}
            // />
            <div
              className="w-28 h-28 bg-red-300"
              key={t._id}
              id={t._id}
              onClick={(e) => {
                e.stopPropagation();
                console.log(t._id);
                dispatch(
                  updateTask({
                    id: t._id,
                    newMarkerData: {
                      title: "Updated task",
                      taskText: "t.taskText",
                      date: t.date,
                    },
                  })
                );
              }}
            >
              <button
                className="w-[30px] h-[15px] bg-cyan-300"
                onClick={(e) => {
                  e.stopPropagation();
                  // console.log(e.currentTarget.closest("div")?.id);
                  dispatch(deleteMarker(e.currentTarget.closest("div")?.id));
                }}
              >
                delete
              </button>
              <button
                className="w-[40px] h-[20px] bg-yellow-300"
                onClick={(e) => {
                  e.stopPropagation();
                  // console.log(e.currentTarget.closest("div")?.id);
                  handleOpenUpdate();
                  setUserInfo(t);
                }}
              >
                more info
              </button>

              <p>{t.title}</p>
            </div>
          ))
        : ""}

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

      {updateModal ? (
        <>
          <div
            className="bg-slate-700 absolute w-full h-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-50"
            onClick={(e) => {
              handleCloseUpdate();
              e.stopPropagation();
            }}
          >
            <UpdateMarkerForm onClose={handleCloseUpdate} info={userInfo} />
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default PlannerDesc;

//  translate-x-[-190px] translate-y-[-150px]
