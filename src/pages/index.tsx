import { FunctionComponent } from "react";
import menuItems from "../components/sidebar/menuItems";
import SideBar from "../components/sidebar/sidebar";

const Main: FunctionComponent = () => {
  return (
    <div className="text-white text-lg bg-red-200 w-32 h-screen">
      <SideBar item={menuItems as any} />
    </div>
  );
};

export default Main;
