import React, { useState } from "react";
import { UpdateMarkerForm } from "../../Forms/UpdateMarkerForm";
import { CreateMarkerForm } from "../../Forms/CreateMarkerForm";
import { Marker } from "@/redux/features/MarkersPlan/typesOrInterfaces";
import { useSelector } from "react-redux";
import { filteredTasks } from "@/redux/features/MarkersPlan/selectors";
import LiItem from "./LiItem/LiItem";

const DescView = () => {
  const filteredList = useSelector(filteredTasks);

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

  const createAPlan = (e: any) => {
    console.log(e);
    setXPos(e.pageX);
    setYPos(e.pageY);
  };
  return (
    <div
      className="w-full  relative 2xl:overflow-hidden overflow-hidden min-h-[92vh]"
      onClick={(e) => {
        console.log(e);
        createAPlan(e);
        handleOpen();
      }}
    >
      {!filteredList ||
        (filteredList.length === 0 && (
          <div className="absolute top-[50%] left-[50%] text-gray-400">
            No markers
          </div>
        ))}
      <ul className="relative">
        {filteredList
          ? filteredList.map((t) => (
              <LiItem
                task={t}
                onOpen={handleOpenUpdate}
                setUserInfo={setUserInfo}
                key={t._id}
              />
            ))
          : ""}
      </ul>
      {isModalOpen ? (
        <div
          className="bg-slate-700 fixed w-full h-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-50"
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
            className="bg-slate-700 fixed w-full h-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-50"
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

export default DescView;
