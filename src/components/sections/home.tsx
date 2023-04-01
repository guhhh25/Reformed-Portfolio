import Image from "next/image";
import { FunctionComponent, useEffect, useRef } from "react";
import Astronaut from "./../../images/Astronaut.png";
import Typewriter from "typewriter-effect";





const Home: FunctionComponent = () => {
  
  const myElement = useRef(null);

  

  return (
    <div className="flex flex-col  md:flex lg:flex-row Leckerli text-[40px] items-center md:py-24 md:px-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-800">
     
      <div className="flex flex-col gap-y-10 w-full mt-10  text-center">
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

      <div className="flex justify-end w-full">
     
        <Image
          src={Astronaut}
          alt="eae"
          width={440}
          height={440}
          className="flip-horizontal"
        />
          </div>
      <div className="absolute bottom-0 left-0 w-full">
        <svg
          className="waves"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shape-rendering="auto"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g className="parallax">
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="0"
              fill="rgba(255,255,255,0.7"
            />
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="3"
              fill="rgba(255,255,255,0.5)"
            />
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="5"
              fill="rgba(255,255,255,0.3)"
            />
            <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Home;
