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
  }, []);

  return (
    // <aside className="bg-black text-white w-20 flex flex-col items-center h-[100vh]">
    <aside className="bg-black py-2 text-white w-full absolute bottom-0  flex items-center justify-between px-12 lg:relative lg:w-20 lg:h-[100vh] lg:flex-col lg:py-0">
      {/* <ul className="mt-8 flex flex-col gap-5"> w-full */}
      <ul className="lg:mt-8 flex w-full justify-between lg: lg:flex-col gap-5 items-center">
        <li>
          <button
            className="border-2 w-14 h-14 rounded-full flex justify-center items-center border-white bg-white bg-opacity-20 p-3 transition-all hover:bg-opacity-100"
            onClick={() => {
              router.replace("/home");
            }}
          >
            <FaHome />
          </button>
        </li>
        <li className=" lg:ml-0 lg:min-w-none lg:max-w-none">
          <button
            className="border-2 w-14 h-14 rounded-full flex justify-center items-center border-white bg-white bg-opacity-20 p-3 transition-all hover:bg-opacity-100 "
            onClick={() => {
              router.replace("/me");
            }}
          >
            <FaUser />
          </button>
        </li>
        <li className=" w-14 h-14 flex justify-center items-center lg:ml-0 lg:min-w-none lg:hidden">
          <LogOutButton />
        </li>
      </ul>

      <div className="lg:mt-auto lg:mb-10 hidden lg:block">
        <LogOutButton />
      </div>
    </aside>
  );
};

export default AsideMenu;
