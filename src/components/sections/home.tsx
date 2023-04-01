import Image from 'next/image';
import { FunctionComponent } from 'react';
import Astronaut from './../../images/Astronaut.png'
import Typewriter from 'typewriter-effect';
import { motion, easeInOut } from "framer-motion";

const Home:FunctionComponent = () => {
    return (
        <div className='hidden md:block Leckerli text-5xl items-center py-24 px-10 text-[#5b21b6]' >
        <Typewriter  options={{
        strings: ['Desenvolvedor Fullstack'],
        autoStart: true,
        delay: 50,
        cursor: '_',
        wrapperClassName: 'typewriter-wrapper',
        cursorClassName: 'typewriter-cursor',
        loop: true,
        
      }}></Typewriter>
        <div className='flex justify-end'>
        <motion.div animate={{ y: [-20, 20] }}
         transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", ease: easeInOut }}>
        <Image src={Astronaut} alt="eae" width={540} height={540} className='flip-horizontal'/>
        </motion.div>
        </div>
        </div>
    )
}


export default Home