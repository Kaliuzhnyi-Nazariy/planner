"use client";

import { addFilter } from "@/redux/features/MarkersPlan/filter-slice";
import { useAppDispatch } from "@/redux/hooks";
import FormInput from "../FormInput/FormInput";
import { useState } from "react";

const SearchField = () => {
  const dispatch = useAppDispatch();
  const [searchingQuery, setSearchingQuery] = useState(
    localStorage.getItem("search") || ""
  );

  return (
    <input
      type="text"
      className="border-b-2 border-b-orange-500"
      placeholder="Search..."
      value={searchingQuery}
      onChange={(e) => {
        setSearchingQuery(e.target.value);
        localStorage.setItem("search", e.target.value);
        dispatch(addFilter(e.target.value));
      }}
    />
  );
};

export default SearchField;
