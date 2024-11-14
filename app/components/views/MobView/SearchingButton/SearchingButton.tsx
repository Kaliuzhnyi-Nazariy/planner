import { addFilter } from "@/redux/features/MarkersPlan/filter-slice";
import { useAppDispatch } from "@/redux/hooks";
import React, { useState } from "react";

const SearchingButton = () => {
  const dispatch = useAppDispatch();

  const [isSearchModeOpen, setIsSearchModeOpen] = useState(false);
  return (
    <div
      className={`fixed top-[80px] right-[24px] flex gap-1 ${
        isSearchModeOpen ? "bg-slate-400/50" : ""
      } p-1 rounded-lg items-center sm:hidden`}
    >
      {isSearchModeOpen ? (
        <input
          type="text"
          className="border-b-2 border-b-orange-500"
          placeholder="Search..."
          value={localStorage.getItem("search") || ""}
          onChange={(e) => {
            dispatch(addFilter(e.target.value));
            localStorage.setItem("search", e.target.value);
          }}
        />
      ) : (
        ""
      )}
      <button
        className=" w-7 h-7 rounded-full bg-white text-orange-500 flex justify-center items-center"
        onClick={() => {
          setIsSearchModeOpen(!isSearchModeOpen);
        }}
      >
        S
      </button>
    </div>
  );
};

export default SearchingButton;
