"use client";

import {
  selectUserEmail,
  selectUserUsername,
} from "@/redux/features/auth/selectors";
import { useRouter } from "next/navigation";
import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { useSelector } from "react-redux";

const UserPageInfo = () => {
  const route = useRouter();

  const username = useSelector(selectUserUsername);
  const email = useSelector(selectUserEmail);

  return (
    <div className="flex justify-center h-full">
      <div className="flex flex-col items-center my-auto justify-around h-[60%]">
        <FaRegUserCircle size={128} />
        <h2>
          <b>Name:</b> {username}
        </h2>
        <h3>
          <b>Email:</b> {email}
        </h3>
        <button
          onClick={() => {
            console.log("update Info");
          }}
        >
          Update info
        </button>
        <button
          onClick={() => {
            console.log("Change password");
          }}
        >
          Change password
        </button>
        <button
          onClick={() => {
            console.log("Delete account");
            route.replace("/authorization/signup");
          }}
        >
          Delete account
        </button>
      </div>
    </div>
  );
};

export default UserPageInfo;
