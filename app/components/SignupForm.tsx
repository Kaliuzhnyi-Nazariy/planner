"use client";

import { register } from "@/redux/features/auth/auth-operations";
import { useAppDispatch } from "@/redux/hooks";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import FormView from "./FormView/FormView";
import FormInput from "./FormInput/FormInput";
import { useSelector } from "react-redux";
import { selectUserIsLoading } from "@/redux/features/auth/selectors";
import toast from "react-hot-toast";

const SignupForm: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const dispatch = useAppDispatch();
  const router = useRouter();
  const isLoading = useSelector(selectUserIsLoading);

  const handleSubmit = async () => {
    if (password !== confirmPassword) {
      toast.error("Passwords are not matched!");
      return;
    }

    await dispatch(
      register({
        username: name,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
      })
    )
      .unwrap()
      .then(() => {
        toast.success("You signed up successfully!");
        router.replace("/authorization/login");
      })
      .catch((err) => {
        toast.error(err);
      });
  };

  return (
    <FormView
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
        // router.replace("/authorization/login");
      }}
    >
      <label>
        <p>Name</p>
        <FormInput
          type="text"
          onChange={(event) => setName(event.target.value)}
          value={name}
          placeholder="Enter your name"
          required
        />
      </label>
      <label>
        <p>Email</p>
        <FormInput
          type="email"
          onChange={(event) => setEmail(event.target.value)}
          value={email}
          placeholder="Enter your e-mail"
          required
        />
      </label>
      <label>
        <p>Password</p>
        <FormInput
          type="password"
          onChange={(event) => setPassword(event.target.value)}
          value={password}
          placeholder="Enter your password"
          required
        />
      </label>
      <label>
        <p>Confirm Password</p>
        <FormInput
          type="password"
          onChange={(event) => setConfirmPassword(event.target.value)}
          value={confirmPassword}
          placeholder="Confirm your password"
          required
        />
      </label>

      <Link
        href={"/authorization/login"}
        className="font-tiny text-[12px] w-[228px] text-gray-500 hover:text-slate-900"
      >
        I already have an account
      </Link>

      {isLoading ? (
        "Loading..."
      ) : (
        <button
          type="submit"
          className="px-4 py-2 border-[1px] border-transparent bg-orange-400 hover:bg-orange-500 hover:border-[1px] hover:border-white focus:border-white focus:outline-none text-white rounded-lg"
        >
          Sign up
        </button>
      )}
    </FormView>
  );
};

export default SignupForm;
