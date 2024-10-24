"use client";

import React, { useEffect, useState } from "react";
import FormView from "./FormView/FormView";
import FormInput from "./FormInput/FormInput";
import { useAppDispatch } from "@/redux/hooks";
import { resetPasswordReq } from "@/redux/features/auth/auth-operations";
import { useRouter } from "next/navigation";

const ForgotPasswordForm = () => {
  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [IDForRelocate, setIDForRelocate] = useState<null | string>(null);

  const router = useRouter();

  const dispatch = useAppDispatch();

  const handleSendRequest = async () => {
    const res = await dispatch(resetPasswordReq({ emailOrUsername }));
    setIDForRelocate(res.payload.link);
    localStorage.setItem("IDForChangePassword", res.payload.link);
    return;
  };

  return (
    <FormView
      onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleSendRequest();
        // Idea is to save this code which return into localStorage and then when operation is done just erase it.
      }}
    >
      <p>If you forgot your password do not worry! You can recover password!</p>

      <label>
        <h3>Email or username</h3>
        <FormInput
          type="text"
          value={emailOrUsername}
          onChange={(e) => {
            setEmailOrUsername(e.target.value);
          }}
        />
      </label>

      {IDForRelocate ? (
        <button
          type="submit"
          onClick={() => {
            router.replace("/authorization/createNewPassword");
          }}
        >
          Change password
        </button>
      ) : (
        <button type="submit">Send request</button>
      )}
    </FormView>
  );
};

export default ForgotPasswordForm;
