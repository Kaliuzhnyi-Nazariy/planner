import React from "react";
import SignupForm from "../../components/SignupForm";

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[100vh]">
      <h2 className="mb-6 text-4xl font-bold">SignUp</h2>
      <SignupForm />
    </div>
  );
};

export default SignUp;
