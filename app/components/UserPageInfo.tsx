"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { FaRegUserCircle } from "react-icons/fa";

const UserPageInfo = () => {
  const route = useRouter();

  return (
    <div className="flex justify-center h-full">
      <div className="flex flex-col items-center my-auto justify-around h-[60%]">
        <FaRegUserCircle size={128} />
        <h2>Name: User&apos;s name</h2>
        <h3>Email: users email</h3>
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
