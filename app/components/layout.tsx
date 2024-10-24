// import { useRouter } from "next/navigation";4
import React from "react";
import AsideMenu from "./AsideMenu";
import CalendarView from "./CalendarView";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
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
          <div className="relative mx-auto">
            <CalendarView />
          </div>
          <button>add todo</button>
        </div>
        <div className="bg-gray-100 w-full h-[91.7%]">{children}</div>
      </div>
    </main>
  );
};

export default AppLayout;
