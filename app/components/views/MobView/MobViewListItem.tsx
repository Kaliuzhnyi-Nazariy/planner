"use client";

import { Marker } from "@/redux/features/MarkersPlan/typesOrInterfaces";
import { useAppDispatch } from "@/redux/hooks";
import { deleteMarker } from "@/redux/features/MarkersPlan/marker-operations";

type Props = {
  task: Marker;
  onClickUpd: () => void;
  setInfoState: (task: Marker) => void;
};

const MobViewListItem = ({ task, onClickUpd, setInfoState }: Props) => {
  const dispatch = useAppDispatch();

  return (
    <li
      key={task._id}
      id={task._id}
      className="grid grid-rows-1 grid-cols-4 bg-yellow-200 p-2 max-h-[62px] overflow-hidden"
      onClick={() => {
        setInfoState(task);
        onClickUpd();
      }}
    >
      <h3 className="col-start-1 col-end-3 row-end-1 flex text-wrap break-words hyphens-auto">
        <b>{task.title}</b>
      </h3>
      <p className="col-start-1 col-end-3 row-end-2 flex text-wrap break-words hyphens-auto">
        {task.taskText}
      </p>
      <button
        onClick={(e) => {
          e.stopPropagation();
          dispatch(deleteMarker({ id: task._id }));
        }}
        className="col-start-3 row-span-3"
      >
        Del
      </button>
      <button
        onClick={() => {
          setInfoState(task);
          onClickUpd();
          window.scrollY;
        }}
        className="col-start-4 row-span-4 "
      >
        upd
      </button>
    </li>
  );
};

export default MobViewListItem;
