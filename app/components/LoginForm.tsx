"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import FormView from "./FormView/FormView";
import FormInput from "./FormInput/FormInput";

const LoginForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const router = useRouter();

  return (
    <FormView
      onSubmit={(e) => {
        e.preventDefault();
        console.log({ email, password });
        router.replace("/home");
      }}
    >
      <label>
        <p>Email:</p>
        <FormInput
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="Enter your e-mail"
          required
        />
      </label>
      <label>
        <p>Password:</p>
        <FormInput
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="Enter your password"
          required
        />
      </label>

      <Link
        href="/authorization/forgotPassword"
        className="font-tiny text-[12px] w-[228px] text-gray-500 hover:text-slate-900"
      >
        Forgot password
      </Link>

      <Link
        href="/authorization/signup"
        className="font-tiny text-[12px] w-[228px] text-gray-500 hover:text-slate-900"
      >
        I don&apos;t have an account
      </Link>
      <button
        type="submit"
        className="px-4 py-2 border-[1px] border-transparent bg-orange-400 hover:bg-orange-500 hover:border-[1px] hover:border-white focus:border-white focus:outline-none text-white rounded-lg"
      >
        Login
      </button>
    </FormView>
  );
};

export default LoginForm;
