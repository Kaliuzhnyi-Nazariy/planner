"use client";
import React from "react";

interface CreateBlockProps {
  x: number | undefined;
  y: number | undefined;
}

const CreateBlock = ({ x, y }: CreateBlockProps) => {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const x = e.clientX;
    const y = e.clientY;
  };

  return (
    <>
      {x !== undefined || y !== undefined ? (
        <div
          className="bg-red-600 w-[226px] h-[250px] absolute transform translate-x-[-85%] translate-y-[-80%]"
          style={{ top: y, left: x }}
        >
          <div
            className=" w-full absolute h-3"
            // onDragCapture={(e) => console.log(e)}
          ></div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default CreateBlock;
