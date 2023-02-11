import Image from "next/image";
import Img from '../../images/solo-leveling.jpg'
import { FunctionComponent } from "react";

interface SideBarProps {
  item: string[] | [];
}

const SideBar = (props: SideBarProps) => {
  const { item } = props;

  return (
    <div className="bg-[#b10303] h-screen w-64 text-white">

      <div className="bg-black h-48 w-full border-white border-2">
        <Image src={Img} alt="any" className="w-full h-full" />
      </div>
      {item.map((item, key) => {
        return (
          <div
            key={key}
            className="flex border-b-2 w-full items-center justify-between px-5 py-4 text-xl hover:bg-[#920a0a] cursor-pointer"
          >
            <p>{item.Title}</p>
            <p>{item.Icon}</p>
          </div>

          
        );
      })}
    </div>
  );
};

export default SideBar;
