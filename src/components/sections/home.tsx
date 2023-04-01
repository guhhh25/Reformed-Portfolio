import Image from 'next/image';
import { FunctionComponent } from 'react';
import Astronaut from './../../images/Astronaut.png'
import Typewriter from 'typewriter-effect';
import { motion, Easing, easeInOut } from "framer-motion";

const Home:FunctionComponent = () => {
    return (
        <div className='Leckerli text-5xl items-center py-24 px-10' >
        
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