import { FunctionComponent } from "react";

import menuItems from "../components/sidebar/menuItems";
import SideBar from "../components/sidebar/sidebar";
import Container from "../components/card/container/container";
import Home from "../components/sections/home";

import Projects from "../components/sections/projects";
import Experiences from "../components/sections/experiences";
import Contact from "../components/sections/contact";





const Main: FunctionComponent = () => {


 
  return (
    <div className="md:flex w-full">
      <SideBar item={menuItems as any} />
      <Container>
        <Home/>
        
        <Projects/>

        <Experiences/>
       <Contact/>
      </Container>
      
      </div>
  );
};

export default Main;
