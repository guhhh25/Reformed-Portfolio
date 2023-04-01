import Image from "next/image";
import Img from "../../images/solo-leveling.jpg";
import { FunctionComponent } from "react";

interface SideBarProps {
  item: string[] | [];
}

const SideBar = (props: SideBarProps) => {
  const { item } = props;

  return (
    <div className=" flex flex-col items-center bg-[#1C1C1C] h-screen w-[320px] text-white">
      <div className=" h-32 w-32 mt-12 mb-12   rounded-full bg-white">
    
      </div>
      {item.map((item, key) => {
        return (
          // eslint-disable-next-line react/jsx-key
          <div className="w-full">
            <div
              key={key}
              className="flex   w-full items-center justify-between px-5 py-4 text-sm hover:bg-[#920a0a] cursor-pointer"
            >
              <p>{item.Title}</p>
              <p>{item.Icon}</p>
            
          </div>
          <div className="px-5">
            <hr/> 
          </div>
            </div>
        );
      })}

      <p className="text-xs mt-8">Copyright ©2023 All rights reserved</p>
    </div>
  );
};

export default SideBar;
