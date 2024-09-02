"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const SignupForm: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const router = useRouter();

  const handleSubmit = () => {
    if (password !== confirmPassword) {
      throw new Error("Passwords are not matched!");
    } else {
      console.log({ name, email, password, confirmPassword });
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
        router.push("/");
      }}
      className="flex flex-col items-center gap-3 bg-auth-background text-slate-900 p-3 w-96 rounded-2xl"
    >
      <label>
        <p>Name</p>
        <input
          className="text-black border-b-2 border-b-orange-500 rounded-lg py-1 px-2 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-orange-500 focus:border-orange-500 placeholder:italic placeholder:text-slate-400 "
          type="text"
          onChange={(event) => setName(event.target.value)}
          value={name}
          placeholder="Enter your name"
          required
        />
      </label>
      <label>
        <p>Email</p>
        <input
          className="text-black border-b-2 border-b-orange-500 rounded-lg py-1 px-2 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-orange-500 focus:border-orange-500 placeholder:italic placeholder:text-slate-400 "
          type="email"
          onChange={(event) => setEmail(event.target.value)}
          value={email}
          placeholder="Enter your e-mail"
          required
        />
      </label>
      <label>
        <p>Password</p>
        <input
          className="text-black border-b-2 border-b-orange-500 rounded-lg py-1 px-2 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-orange-500 focus:border-orange-500 placeholder:italic placeholder:text-slate-400 "
          type="password"
          onChange={(event) => setPassword(event.target.value)}
          value={password}
          placeholder="Enter your password"
          required
        />
      </label>
      <label>
        <p>Confirm Password</p>
        <input
          className="text-black border-b-2 border-b-orange-500 rounded-lg py-1 px-2 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-orange-500 focus:border-orange-500 placeholder:italic placeholder:text-slate-400 "
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

      <button
        type="submit"
        className="px-4 py-2 border-[1px] border-transparent bg-orange-400 hover:bg-orange-500 hover:border-[1px] hover:border-white focus:border-white focus:outline-none text-white rounded-lg"
      >
        Sign up
      </button>
    </form>
  );
};

export default SignupForm;
