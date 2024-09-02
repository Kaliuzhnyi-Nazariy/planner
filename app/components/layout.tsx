// import { useRouter } from "next/navigation";
import React from "react";

const AppLayout = ({ children }) => {
  // const router = useRouter();

  const options = { year: "numeric", month: "2-digit", day: "2-digit" };
  const currentDate = new Date().toLocaleDateString(undefined, options);

  return (
    <main className="flex ">
      <aside className="bg-black text-white w-20 flex flex-col items-center h-[100vh]">
        <ul className="mt-8 flex flex-col gap-4">
          <li>
            <button>🏠</button>
          </li>
          <li>
            <button>👳🏻‍♂️</button>
          </li>
        </ul>
        <button
          className="mt-auto mb-10"
          // onClick={() => router.replace("/authorization/login")}
        >
          exit
        </button>
      </aside>
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

          <span>👨🏻</span>
        </div>
        <div className="bg-gray-100 w-full h-[91.7%]">{children}</div>
      </div>
    </main>
  );
};

export default AppLayout;
