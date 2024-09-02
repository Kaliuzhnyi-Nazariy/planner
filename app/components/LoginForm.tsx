"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const router = useRouter();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log({ email, password });
        router.replace("/home");
      }}
      className="flex flex-col items-center gap-3 bg-auth-background text-slate-900 p-3 w-96 rounded-2xl"
    >
      <label>
        <p>Email:</p>
        <input
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className="text-black border-b-2 border-b-orange-500 rounded-lg py-1 px-2 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-orange-500 focus:border-orange-500 placeholder:italic placeholder:text-slate-400 "
          placeholder="Enter your e-mail"
          required
        />
      </label>
      <label>
        <p>Password:</p>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          className="text-black border-b-2 border-b-orange-500 rounded-lg py-1 px-2 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-orange-500 focus:border-orange-500 placeholder:italic placeholder:text-slate-400 "
          placeholder="Enter your password"
          required
        />
      </label>

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
    </form>
  );
};

export default LoginForm;
