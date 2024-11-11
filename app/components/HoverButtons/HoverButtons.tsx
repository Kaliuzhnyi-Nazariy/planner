"use client";

import { deleteMarker } from "@/redux/features/MarkersPlan/marker-operations";
import { Marker } from "@/redux/features/MarkersPlan/typesOrInterfaces";
import { useAppDispatch } from "@/redux/hooks";

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
        }}
      >
        del
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          setUserFunc(task);
          onOpenUpd();
        }}
      >
        upd
      </button>
    </div>
  );
};

export default HoverButtons;
