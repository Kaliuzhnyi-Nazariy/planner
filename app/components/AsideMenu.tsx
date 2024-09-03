"use client";
import React from "react";

const AsideMenu = () => {
  return (
    <aside className="bg-black text-white w-20 flex flex-col items-center h-[100vh]">
      <ul className="mt-8 flex flex-col gap-5">
        <li>
          <button
            className="border-2 w-14 h-14 rounded-full flex justify-center items-center border-white bg-white bg-opacity-20 p-3 transition-all hover:bg-opacity-100"
            onClick={() => console.log("🏠")}
          >
            🏠
          </button>
        </li>
        <li>
          <button
            className="border-2 w-14 h-14 rounded-full flex justify-center items-center border-white bg-white bg-opacity-20 p-3 transition-all hover:bg-opacity-100"
            onClick={() => console.log("👳🏻‍♂️")}
          >
            👳🏻‍♂️
          </button>
        </li>
      </ul>
      <button className="mt-auto mb-10 " onClick={() => console.log("exit")}>
        🚶🏻‍♀️
      </button>
    </aside>
  );
};

export default AsideMenu;
