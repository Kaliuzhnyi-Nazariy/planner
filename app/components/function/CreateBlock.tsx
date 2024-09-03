import React from "react";

interface CreateBlockProps {
  x: number | undefined;
  y: number | undefined;
}

const CreateBlock = ({ x, y }: CreateBlockProps) => {
  return (
    <>
      {x !== undefined || y !== undefined ? (
        <div
          className="bg-red-600 w-[226px] h-[250px] absolute transform translate-x-[-85%] translate-y-[-58%]"
          style={{ top: y, left: x }}
        ></div>
      ) : (
        ""
      )}
    </>
  );
};

export default CreateBlock;
