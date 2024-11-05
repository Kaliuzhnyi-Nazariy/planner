// import { useRouter } from "next/navigation";4
import React from "react";
import AsideMenu from "../asideMenu/AsideMenu";
import CalendarView from "../CalendarView";
import DashboardLayoutAddTaskButton from "./DashboardLayoutAddTaskButton/DashboardLayoutAddTaskButton";
import SearchField from "./SearchField";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex ">
      <AsideMenu />
      <div className="w-full">
        <div className="bg-white w-full h-16 flex items-center justify-around">
          <label>
            <span>Search: </span>
            <SearchField />
          </label>
          <div className="relative">
            <CalendarView />
          </div>
          <DashboardLayoutAddTaskButton />
        </div>
        <div className="bg-gray-100 w-full h-[91.68%]">{children}</div>
      </div>
    </main>
  );
};

export default AppLayout;
