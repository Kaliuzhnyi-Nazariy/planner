"use client";

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
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
          // router.push("/");
        }}
        className="flex flex-col items-center gap-3 bg-orange-50 text-slate-900 p-3"
      >
        <label>
          <p>Name</p>
          <input
            className="text-black bottom-1 outline-1 outline-orange-400 border-b-2 border-b-orange-500 rounded-lg focus:border-none py-1 px-2 "
            type="text"
            onChange={(event) => setName(event.target.value)}
            value={name}
            // required
          />
        </label>
        <label>
          <p>Email</p>
          <input
            className="text-black bottom-1 outline-1 outline-orange-400 border-b-2 border-b-orange-500 rounded-lg focus:border-none py-1 px-2 "
            type="email"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
            // required
          />
        </label>
        <label>
          <p>Password</p>
          <input
            className="text-black bottom-1 outline-1 outline-orange-400 border-b-2 border-b-orange-500 rounded-lg focus:border-none py-1 px-2 "
            type="password"
            onChange={(event) => setPassword(event.target.value)}
            value={password}
            // required
          />
        </label>
        <label>
          <p>Confirm Password</p>
          <input
            className="text-black bottom-1 outline-1 outline-orange-400 border-b-2 border-b-orange-500 rounded-lg focus:border-none py-1 px-2 "
            type="password"
            onChange={(event) => setConfirmPassword(event.target.value)}
            value={confirmPassword}
            // required
          />
        </label>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg"
        >
          Sign up
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
