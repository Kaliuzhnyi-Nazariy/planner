import CreateMarkerView from "@/app/components/function/CreateMarkerView";
import HoverButtons from "@/app/components/HoverButtons/HoverButtons";
import {
  IReceivedMarker,
  Marker,
} from "@/redux/features/MarkersPlan/typesOrInterfaces";
import React from "react";

type Props = {
  task: IReceivedMarker;
  onOpen: () => void;
  setUserInfo: (t: Marker) => void;
};

const LiItem = ({ task, onOpen, setUserInfo }: Props) => {
  return (
    <li
      key={task._id}
      onClick={(e) => {
        e.stopPropagation();
        setUserInfo(task);
        onOpen();
      }}
      style={{ top: task.coordinates.y, left: task.coordinates.x }}
      className="absolute w-[226px] h-min-[250px] group translate-x-[-95%] translate-y-[-50%]"
    >
      <HoverButtons setUserFunc={setUserInfo} onOpenUpd={onOpen} task={task} />
      <CreateMarkerView
        id={task._id}
        title={task.title}
        taskText={task.taskText}
      />
    </li>
  );
};

export default LiItem;
