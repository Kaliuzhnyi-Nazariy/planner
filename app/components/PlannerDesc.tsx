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
import {
  filteredTasks,
  selectTasks,
} from "@/redux/features/MarkersPlan/selectors";
import CreateMarkerView from "./function/CreateMarkerView";
import { UpdateMarkerForm } from "./Forms/UpdateMarkerForm";
import { selectDate } from "@/redux/features/date/selectors";

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

  const tasksList = useSelector(selectTasks);
  const datePicked = useSelector(selectDate);
  const filteredList = useSelector(filteredTasks);

  const [prevTasksList, setPrevTasksList] = useState(tasksList);

  // useEffect(() => {
  //   if (JSON.stringify(tasksList) !== JSON.stringify(prevTasksList)) {
  //     setPrevTasksList(tasksList);
  //     dispatch(getTasksByDate({ date: datePicked }));
  //   }
  // }, [prevTasksList, tasksList]);

  useEffect(() => {
    if (JSON.stringify(filteredList) !== JSON.stringify(prevTasksList)) {
      setPrevTasksList(filteredList);
      console.log(filteredList);
      dispatch(getTasksByDate({ date: datePicked }));
    }
  }, [prevTasksList, filteredList]);

  useEffect(() => {
    // dispatch(getAllTasks());
    // fetchMarkerByDate();
    dispatch(getTasksByDate({ date: datePicked }));
    setPrevTasksList(tasksList);
  }, [dispatch, datePicked]);

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

  //   // console.log(tasksList);

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
        console.log(e);
        createAPlan(e);
        handleOpen();
      }}
    >
      <ul className="relative">
        {filteredList
          ? filteredList.map((t) => (
              <li
                key={t._id}
                onClick={(e) => {
                  e.stopPropagation();
                  setUserInfo(t);
                  handleOpenUpdate();
                }}
                style={{ top: t.coordinates.y, left: t.coordinates.x }}
                className="absolute w-[226px] h-min-[250px] group"
              >
                <div className="absolute top-0 right-0 invisible group-hover:visible flex gap-1 p-1">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      dispatch(deleteMarker(t._id));
                    }}
                  >
                    del
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setUserInfo(t);
                      handleOpenUpdate();
                    }}
                  >
                    upd
                  </button>
                </div>
                <CreateMarkerView
                  id={t._id}
                  title={t.title}
                  taskText={t.taskText}
                />
              </li>
            ))
          : ""}
      </ul>{" "}
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
