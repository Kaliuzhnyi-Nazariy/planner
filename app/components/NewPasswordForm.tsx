"use client";

import React, { useState } from "react";
import FormView from "./FormView/FormView";
import FormInput from "./FormInput/FormInput";
import { useAppDispatch } from "@/redux/hooks";
import { resetPassword } from "@/redux/features/auth/auth-operations";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const NewPasswordForm = () => {
  const [newPassword, setPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleSubmit = () => {
    const passwordRecoverID = localStorage.getItem("IDForChangePassword");

    if (!passwordRecoverID) throw new Error("No request!");

    if (newPassword !== confirmNewPassword) {
      toast.error("Passwords do not match");
      return;
    }

    dispatch(
      resetPassword({
        id: `${passwordRecoverID}`,
        newPasswordValue: { newPassword, confirmNewPassword },
      })
    );

    localStorage.removeItem("IDForChangePassword");

    router.replace("/authorization/login");
    toast.success("Password successfully changed!");
  };
  return (
    <FormView
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
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
          onChange={(e) => setConfirmNewPassword(e.target.value)}
          value={confirmNewPassword}
          placeholder="input password"
          required
        />
      </label>

      <button type="submit">Set new password</button>
    </FormView>
  );
};

export default NewPasswordForm;
