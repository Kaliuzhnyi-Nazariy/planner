import React from "react";

type Props = {
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
};

const FormInput = ({ type, value, onChange, placeholder, required }: Props) => {
  return (
    <input
      className="text-black border-b-2 border-b-orange-500 rounded-lg py-1 px-2 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-orange-500 focus:border-orange-500 placeholder:italic placeholder:text-slate-400 "
      type={type}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      required={required}
    ></input>
  );
};

export default FormInput;
