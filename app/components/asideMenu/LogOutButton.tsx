"use client";

import { logout } from "@/redux/features/auth/auth-operations";
import { selectUserIsAuth } from "@/redux/features/auth/selectors";
import { useAppDispatch } from "@/redux/hooks";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { IoMdExit } from "react-icons/io";
import { useSelector } from "react-redux";

const LogOutButton = () => {
  const dispatch = useAppDispatch();
  const isAuth = useSelector(selectUserIsAuth);
  const router = useRouter();

  useEffect(() => {
    if (!isAuth) router.replace("/authorization/login");
  }, [isAuth, router]);

  const handleLogOut = () => {
    dispatch(logout({ id: "671a5f3cb8ea7e88c0bb5d8d" }));
  };

  return (
    <button
      onClick={() => {
        handleLogOut();
        console.log("exit");
      }}
    >
      <IoMdExit />
    </button>
  );
};

export default LogOutButton;
