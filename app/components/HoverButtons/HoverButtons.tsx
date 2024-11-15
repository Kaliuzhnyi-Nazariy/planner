"use client";

import { deleteMarker } from "@/redux/features/MarkersPlan/marker-operations";
import { Marker } from "@/redux/features/MarkersPlan/typesOrInterfaces";
import { useAppDispatch } from "@/redux/hooks";
import { TfiWrite } from "react-icons/tfi";
import { MdDeleteForever } from "react-icons/md";
import toast from "react-hot-toast";

type Prop = {
  setUserFunc: (task: Marker) => void;
  onOpenUpd: () => void;
  task: Marker;
};

const HoverButtons = ({ setUserFunc, onOpenUpd, task }: Prop) => {
  const dispatch = useAppDispatch();

  return (
    <div className="absolute top-0 right-0 invisible group-hover:visible flex gap-1 p-1">
      <button
        onClick={(e) => {
          e.stopPropagation();
          dispatch(deleteMarker({ id: task._id }));
          toast.success("Marker deleted!");
        }}
      >
        <MdDeleteForever />
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          setUserFunc(task);
          onOpenUpd();
        }}
      >
        <TfiWrite />
      </button>
    </div>
  );
};

export default HoverButtons;
