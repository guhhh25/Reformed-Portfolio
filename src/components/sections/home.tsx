import Image from "next/image";
import { FunctionComponent, useEffect, useRef } from "react";
import Astronaut from "./../../images/Astronaut.png";
import Typewriter from "typewriter-effect";
import WavesWhite from "../waves/wavesWhite";

const Home: FunctionComponent = () => {
  return (
    <div className="roboto flex flex-col  lg:flex-row  text-[33px]  md:text-[40px] items-center md:py-0 justify-center h-screen  text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-800">
      <div className="flex flex-col gap-y-0 w-full mt-10  text-center">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("Gustavo Henrique")

              .start();
          }}
        />

        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .pauseFor(1000)
              .typeString("Desenvolvedor Fullstack")
              .start();
          }}
        />
      </div>

      <div className="flex flex-col-reverse justify-center items-center  w-full animating">
        <Image
          src={Astronaut}
          alt="eae"
          width={440}
          height={440}
          className="flip-horizontal"
        />
      </div>
      <WavesWhite />
    </div>
  );
};

export default Home;
