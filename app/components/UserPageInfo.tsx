"use client";

import {
  selectUserEmail,
  selectUserID,
  selectUserIsLoading,
  selectUserUsername,
} from "@/redux/features/auth/selectors";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
import FormInput from "./FormInput/FormInput";
import { useAppDispatch } from "@/redux/hooks";
import {
  deleteAccount,
  refreshUser,
  updateAcc,
} from "@/redux/features/auth/auth-operations";

const UserPageInfo = () => {
  const route = useRouter();

  const username = useSelector(selectUserUsername);
  const email = useSelector(selectUserEmail);
  const userId = useSelector(selectUserID);
  const isLoading = useSelector(selectUserIsLoading);

  const [changeInfoMode, setChangeInfoMode] = useState(false);
  const [newUsername, setNewUsername] = useState(username as string);
  const [newEmail, setNewEmail] = useState(email as string);

  const dispatch = useAppDispatch();

  return (
    <div className="flex justify-center h-full">
      <div className="flex flex-col items-center my-auto justify-around h-[60%]">
        <FaRegUserCircle size={128} />
        {changeInfoMode ? (
          <>
            <h2>
              <b>Name:</b>
              <FormInput
                type="text"
                value={newUsername}
                onChange={(e) => setNewUsername(e.target.value)}
              />
            </h2>
            <h3>
              <b>Email:</b>
              <FormInput
                type="text"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
              />
            </h3>
            <button
              onClick={() => {
                setChangeInfoMode(false);
                console.log("Info updated", { newUsername, newEmail });
                dispatch(
                  updateAcc({
                    id: userId,
                    UpdatedUserData: {
                      email: newEmail,
                      username: newUsername,
                    },
                  })
                );
                dispatch(refreshUser());
              }}
            >
              Save changes
            </button>
          </>
        ) : (
          <>
            <h2>
              <b>Name:</b>
              {isLoading ? "Loading..." : <>{username}</>}
            </h2>
            <h3>
              <b>Email:</b> {isLoading ? "Loading..." : <>{email}</>}
            </h3>
            <button
              onClick={() => {
                setChangeInfoMode(true);
              }}
            >
              Update info
            </button>
          </>
        )}
        <button
          onClick={() => {
            route.replace("/authorization/forgotPassword");
            console.log("Change password");
          }}
        >
          Change password
        </button>
        <button
          onClick={() => {
            console.log("Delete account");
            // dispatch(deleteAccount());
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
