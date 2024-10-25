"use client";
import React, { useState } from "react";
import CreateBlock from "./function/CreateBlock";

interface BlockPosition {
  x: number;
  y: number;
}

const PlannerDesc = () => {
  const [positions, setPosition] = useState<BlockPosition[]>([]);

  const createAPlan = (e: any) => {
    console.log(e);
    // const x = e.clientX;
    //   const y = e.clientY;
    const x = e.screenX;
    const y = e.screenY;

    setPosition([...positions, { x, y }]);
    // console.log({ x, y });
  };

  return (
    <div
      className="w-full h-full relative overflow-hidden overflow-y-hidden"
      onClick={createAPlan}
      onMouseMove={(e) => console.log(e)}
    >
      {/* smth*/}
      {positions.length > 0
        ? positions.map((position, index) => (
            <CreateBlock x={position?.x} y={position?.y} key={index} />
          ))
        : ""}
    </div>
  );
};

export default PlannerDesc;

//  translate-x-[-190px] translate-y-[-150px]
