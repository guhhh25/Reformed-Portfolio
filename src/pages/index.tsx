import { FunctionComponent } from "react";
import menuItems from "../components/sidebar/menuItems";
import SideBar from "../components/sidebar/sidebar";

const Main: FunctionComponent = () => {
  return (
    <>
      <SideBar item={menuItems as any} />
    </>
  );
};

export default Main;
