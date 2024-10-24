import ForgotPasswordForm from "@/app/components/ForgotPasswordForm";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[100vh]">
      <h2 className="mb-6 text-4xl font-bold">Forgot Password?</h2>
      <ForgotPasswordForm />
    </div>
  );
};

export default page;
