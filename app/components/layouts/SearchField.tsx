"use client";

import { addFilter } from "@/redux/features/MarkersPlan/filter-slice";
import { useAppDispatch } from "@/redux/hooks";

const SearchField = () => {
  const dispatch = useAppDispatch();

  return (
    <input
      type="text"
      className="border-b-2 border-b-orange-500"
      placeholder="Search..."
      onChange={(e) => {
        dispatch(addFilter(e.target.value));
      }}
    />
  );
};

export default SearchField;
