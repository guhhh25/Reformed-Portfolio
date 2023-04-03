import Image from "next/image";
import { AiOutlineMenu } from "react-icons/ai";
import { useEffect, useState } from "react";
import { Link } from 'react-scroll';

import euImage from "./../../images/euImage.jpg";

const SideBar = (props) => {
  const { item } = props;

  const [isOpen, setIsOpen] = useState(false);
  const [isSelected, setIsSelected] = useState(0);
  const [positionY, setPositionY] = useState(0)
  const [name, setName] = useState("")




  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        setPositionY(window.scrollY)
      };

      window.addEventListener("scroll", handleScroll);

      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);



  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsOpen(window.innerWidth > 1024 ? true : false);
    }

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="fixed  z-20 ">
      <nav>
        <div className="lg:hidden flex items-center absolute ">
          <AiOutlineMenu
            className="
              
            text-white text-3xl cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
      </nav>
      <div
        className={`lg:flex flex flex-col items-center bg-[#1C1C1C] h-screen  ${
          isOpen ? "w-[320px]" : "w-0 hidden"
        } text-white transition-all duration-300 ease-in-out`}
      >
        <div
          className={`${
            isOpen ? "w-[130px]" : "w-0 hidden"
          }   h-32 w-32 md:mt-12 mb-12 mt-12   rounded-full bg-white  `}
        >
          <Image src={euImage} alt="eae" className="rounded-full" />
        </div>
        {item.map((item, key) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <div className="w-full">
               <Link
            activeClass="active"
            to={item.id}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
              <div
                key={key}
                className="flex w-full  items-center justify-between px-5 py-4 text-sm cursor-pointer"
              >
                <p className={`${name ===  item.Title ? "text-yellow-500" : ""}`}>
                  {item.Title}
                  {console.log(item.Title, name)}
                </p>
                <p className={`${isSelected > 0 ? "text-yellow-500" : ""}`}>
                  {item.Icon}
                </p>
              </div>
              <div className="px-5">
                <hr />
              </div>
              </Link>
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
