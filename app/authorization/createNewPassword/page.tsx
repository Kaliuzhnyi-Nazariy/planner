import NewPasswordForm from "@/app/components/NewPasswordForm";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[100vh]">
      <h2 className="mb-6 text-4xl font-bold">New password?</h2>
      <NewPasswordForm />
    </div>
  );
};

export default page;
