import LoginForm from "@/app/components/LoginForm";
import React from "react";

const LoginPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[100vh]">
      <h2 className="mb-6 text-4xl font-bold">Login</h2>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
