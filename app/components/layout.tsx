// import { useRouter } from "next/navigation";
import React from "react";
import AsideMenu from "./AsideMenu";

const AppLayout = ({ children }) => {
  // const router = useRouter();

  const options = { year: "numeric", month: "2-digit", day: "2-digit" };
  const currentDate = new Date().toLocaleDateString(undefined, options);

  return (
    <main className="flex ">
      <AsideMenu />
      <div className="w-full">
        <div className="bg-white w-full h-16 flex items-center justify-around">
          <label>
            <span>Search: </span>
            <input
              type="text"
              className="border-b-2 border-b-orange-500"
              placeholder="Search..."
            />
          </label>
          <span>{currentDate}</span>

          <button>add todo</button>
        </div>
        <div className="bg-gray-100 w-full h-[91.7%]">{children}</div>
      </div>
    </main>
  );
};

export default AppLayout;
