import { FunctionComponent } from "react";

import menuItems from "../components/sidebar/menuItems";
import SideBar from "../components/sidebar/sidebar";
import Container from "../components/container/container";
import Home from "../components/sections/home";
import About from "../components/sections/about";




const Main: FunctionComponent = () => {


 
  return (
    <div className="md:flex w-full">
      <SideBar item={menuItems as any} />
      <Container>
        <Home/>
 
        <About/>
      </Container>
      
      </div>
  );
};

export default Main;
