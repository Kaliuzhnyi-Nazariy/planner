"use client";

import { filteredTasks } from "@/redux/features/MarkersPlan/selectors";
import { useSelector } from "react-redux";
import { UpdateMarkerForm } from "../../Forms/UpdateMarkerForm";
import { useState } from "react";
import { Marker } from "@/redux/features/MarkersPlan/typesOrInterfaces";
import MobViewListItem from "./MobViewListItem";
import SearchingButton from "./SearchingButton/SearchingButton";
import CreateMarkerTemplate from "./CreateMarkerTemplate/CreateMarkerTemplate";

const MobView = () => {
  const filteredList = useSelector(filteredTasks);

  const [updateModal, setUpdateModal] = useState(false);
  const [userInfo, setUserInfo] = useState<Marker | null>(null);

  const handleOpenUpdate = () => {
    setUpdateModal(true);
  };

  const handleCloseUpdate = () => {
    setUpdateModal(false);
  };

  return (
    <div
      className={`w-full ${
        updateModal ? "overflow-y-hidden" : "overflow-y-scroll"
      } relative overflow-hidden  h-[80.9vh] lg:h-full`}
    >
      {/* <div className="w-full  relative overflow-hidden overflow-y-scroll h-[80.9vh] lg:h-full"> */}
      {!filteredList || filteredList.length === 0 ? (
        <div className="absolute top-[50%] left-[50%] text-gray-400 hidden lg:block">
          No markers
        </div>
      ) : (
        ""
      )}
      {filteredList ? (
        <ul className="grid px-4 gap-3 my-2 sm:grid-cols-3 md:grid-cols-4 ">
          {filteredList.map((task) => {
            return (
              <MobViewListItem
                task={task}
                key={task._id}
                onClickUpd={handleOpenUpdate}
                setInfoState={setUserInfo}
              />
            );
          })}
          <CreateMarkerTemplate />
        </ul>
      ) : (
        "Loading..."
      )}
      {updateModal ? (
        <>
          <div
            // className="bg-slate-700 absolute w-full h-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-50"
            className="bg-slate-700 fixed w-full h-[100vh] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[800]"
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
      <SearchingButton />
    </div>
  );
};

export default MobView;
