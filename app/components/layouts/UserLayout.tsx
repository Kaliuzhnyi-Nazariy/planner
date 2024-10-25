import AsideMenu from "../asideMenu/AsideMenu";

const UserLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex w-full">
      <AsideMenu />
      <div className="bg-gray-100 w-full">{children}</div>
    </div>
  );
};

export default UserLayout;
