"use client";

import React, { useState } from "react";
import FormView from "./FormView/FormView";
import FormInput from "./FormInput/FormInput";
import { useAppDispatch } from "@/redux/hooks";
import { resetPassword } from "@/redux/features/auth/auth-operations";
import { useRouter } from "next/navigation";

const NewPasswordForm = () => {
  const [newPassword, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleSubmit = () => {
    const passwordRecoverID = localStorage.getItem("IDForChangePassword");

    if (!passwordRecoverID) throw new Error("No request!");

    if (newPassword !== confirmPassword) {
      throw new Error("Passwords do not match");
    }

    dispatch(
      resetPassword({
        id: `${passwordRecoverID}`,
        newPasswordValue: { newPassword, confirmPassword },
      })
    );

    localStorage.removeItem("IDForChangePassword");

    router.replace("/authorization/login");
  };
  return (
    <FormView
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
        console.log("new password page");
      }}
    >
      <label className="flex flex-col">
        New password:
        <FormInput
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={newPassword}
          placeholder="input password"
          required
        />
      </label>
      <label className="flex flex-col">
        Confirm new password:
        <FormInput
          type="password"
          onChange={(e) => setConfirmPassword(e.target.value)}
          value={confirmPassword}
          placeholder="input password"
          required
        />
      </label>

      <button type="submit">Set new password</button>
    </FormView>
  );
};

export default NewPasswordForm;
