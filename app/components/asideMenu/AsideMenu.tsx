"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { FaHome, FaUser } from "react-icons/fa";
import LogOutButton from "./LogOutButton";
import { useAppDispatch } from "@/redux/hooks";
import { refreshUser } from "@/redux/features/auth/auth-operations";

const AsideMenu = () => {
  const router = useRouter();

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <aside className="bg-black text-white w-20 flex flex-col items-center h-[100vh]">
      <ul className="mt-8 flex flex-col gap-5">
        <li>
          <button
            className="border-2 w-14 h-14 rounded-full flex justify-center items-center border-white bg-white bg-opacity-20 p-3 transition-all hover:bg-opacity-100"
            onClick={() => {
              router.replace("/home");
              console.log("🏠");
            }}
          >
            <FaHome />
          </button>
        </li>
        <li>
          <button
            className="border-2 w-14 h-14 rounded-full flex justify-center items-center border-white bg-white bg-opacity-20 p-3 transition-all hover:bg-opacity-100"
            onClick={() => {
              router.replace("/me");
              console.log("👳🏻‍♂️");
            }}
          >
            <FaUser />
          </button>
        </li>
      </ul>
      {/* <button className="mt-auto mb-10" onClick={() => console.log("exit")}>
        <IoMdExit />
      </button> */}
      <div className="mt-auto mb-10">
        <LogOutButton />
      </div>
    </aside>
  );
};

export default AsideMenu;
