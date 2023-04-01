import Image from "next/image";
import { AiOutlineMenu } from "react-icons/ai";
import { useEffect, useState } from "react";



const SideBar = (props) => {
  const { item } = props;

  const [isOpen, setIsOpen] = useState(false);
  const [isSelected, setIsSelected] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsOpen(window.innerWidth > 768 ? true : false);
    }

    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(true);
      }else{
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="absolute md:static z-20">
      <nav>
        <div className="md:hidden flex items-center absolute ">
          <AiOutlineMenu
            className={`${
              isOpen ? "text-white" : "text-black"
            } text-3xl cursor-pointer`}
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
      </nav>
      <div
  className={`md:flex flex flex-col items-center bg-[#1C1C1C] h-screen ${
    isOpen ? "w-[320px]" : "w-0 hidden"
  } text-white transition-all duration-300 ease-in-out`}
>
        <div className={`${
    isOpen ? "w-[130px]" : "w-0 hidden"}   h-32 w-32 md:mt-12 mb-12 mt-12   rounded-full bg-white  `}/>
        {item.map((item, key) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <div className="w-full">
              <div
                key={key}
                className="flex w-full  items-center justify-between px-5 py-4 text-sm cursor-pointer"
              >
                <p className={`${isSelected === key ? "text-yellow-500" : ""}`}>{item.Title}</p>
                <p className={`${isSelected === key ? "text-yellow-500" : ""}`}>{item.Icon}</p>
              </div>
              <div className="px-5">
                <hr />
              </div>
            </div>
          );
        })}
        <p className="text-xs mt-8 m-auto text-center w-full">
          Copyright ©2023 Todos os direitos reservados.
        </p>
        
      </div>
      </div>
  );
};

export default SideBar;
