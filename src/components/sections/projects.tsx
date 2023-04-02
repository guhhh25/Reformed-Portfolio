
import { FunctionComponent, useEffect } from 'react';

import Card from '../card/card';
import quiz from './../../images/quiz.png'



const Projects:FunctionComponent = () => {

   
    

    return (
        <div className='text-black bg-white'>
        <div className='flex flex-col  lg:py-16 lg:px-16 px-2 py-8 bg-white text-black w-full h-[700px]'>
            <p className='  bg-white text-black mb-10 lg:mb-0 font-bold text-3xl roboto'>Projetos</p>
            <div className='flex justify-center items-center'>
            <Card image={quiz} title={"quiz"} description={"Quiz com tempo e perguntas genericas brasileiras."} btnClass={"btn-grad"}/>
            </div>
        </div>
        </div>
    )
}


export default Projects