import { FunctionComponent } from "react";
import menuItems from "../components/sidebar/menuItems";
import SideBar from "../components/sidebar/sidebar";
import Container from "../components/container/container";
import Home from "../components/sections/home";

const Main: FunctionComponent = () => {
  return (
    <div className="flex w-full">
      <SideBar item={menuItems as any} />
      <Container>
        <Home/>
      </Container>
      
 
      </div>
  );
};

export default Main;
