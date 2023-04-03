
import { FunctionComponent, useEffect } from 'react';

import Card from '../card/card';

import projectData from './../../projectsData/projectsData';
import Waves from '../waves/wavesWhite';
import WavesBlack from '../waves/wavesBlack';



const Projects:FunctionComponent = () => {

   
    

    return (
        <div id='projects' className='text-black bg-white relative'>
        <div className='flex  flex-wrap  lg:py-16 lg:px-16 px-2 py-8 bg-white text-black w-full h-fit relative'>
            <p className='  bg-white text-black mb-10 lg:mb-0 font-bold text-3xl roboto'>Projetos</p>
            <div className='flex justify-around flex-wrap  w-full '>
            {projectData.map((items, key) => {
                return (
                    // eslint-disable-next-line react/jsx-key
                    <div data-aos="fade-up">
                    <Card key={key} image={items.image} title={items.title} description={items.description} btnClass={items.btnClass} tecnologies={items.tecnologies} href={items.href}/>
                    </div>
                )
            })}
            </div>
        </div>
        <div className='py-14'>
        <WavesBlack/>
            </div>
        </div>
    )
}


export default Projects