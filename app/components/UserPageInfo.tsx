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
import toast from "react-hot-toast";

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
    <div className="flex justify-center h-[90vh] lg:h-[100vh]">
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
              onClick={async () => {
                setChangeInfoMode(false);
                console.log("Info updated", { newUsername, newEmail });
                await dispatch(
                  updateAcc({
                    id: userId,
                    UpdatedUserData: {
                      email: newEmail,
                      username: newUsername,
                    },
                  })
                );
                dispatch(refreshUser());
                toast.success("User info updated successfully!");
              }}
              className="w-[150px] px-3 py-2 rounded-2xl bg-orange-400 text-white transition-all hover:scale-110"
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
              className="w-[150px] px-3 py-2 rounded-2xl bg-orange-400 text-white transition-all hover:scale-110"
            >
              Update info
            </button>
          </>
        )}
        <button
          onClick={() => {
            route.replace("/authorization/forgotPassword");
          }}
          className="w-[150px] px-3 py-2 rounded-2xl bg-orange-400 text-white transition-all hover:scale-110"
        >
          Change password
        </button>
        <button
          onClick={() => {
            console.log("Delete account");
            // dispatch(deleteAccount());
            route.replace("/authorization/signup");
            toast.success("Account had been deleted!");
          }}
          className="px-3 py-2 w-[150px] bg-red-500 text-white rounded-2xl hover:scale-110 transition-all"
        >
          Delete account
        </button>
      </div>
    </div>
  );
};

export default UserPageInfo;
