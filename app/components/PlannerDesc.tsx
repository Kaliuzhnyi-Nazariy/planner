"use client";
import React, { useState } from "react";
import CreateBlock from "./function/CreateBlock";

import Draggable from "react-draggable";

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
      className="w-full h-full relative overflow-hidden"
      onClick={createAPlan}
      onMouseMove={(e) => console.log(e)}
    >
      {/* smth*/}
      {positions.length > 0
        ? positions.map((position, index) => (
            <CreateBlock x={position?.x} y={position?.y} key={index} />
          ))
        : ""}
      {/* <Draggable
        axis="x"
        handle=".handle"
        defaultPosition={{ x: 0, y: 0 }}
        position={null}
        grid={[25, 25]}
        scale={1}
        onStart={this.handleStart}
        onDrag={this.handleDrag}
        onStop={this.handleStop}
      >
        <div>
          <div className="handle">Drag from here</div>
          <div>This readme is really dragging on...</div>
        </div>
      </Draggable> */}
      {/* <div
        className="bg-red-600 w-[226px] h-[250px] absolute transform translate-x-[-85%] translate-y-[-58%]"
        style={{ top: Y, left: X }}
      ></div> */}
    </div>
  );
};

export default PlannerDesc;

//  translate-x-[-190px] translate-y-[-150px]
