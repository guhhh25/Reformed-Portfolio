import { FunctionComponent } from 'react';
import Typewriter from 'typewriter-effect';

const Home:FunctionComponent = () => {
    return (
        <div className='Leckerli text-5xl items-center py-24 px-10' >

<Typewriter
  options={{
    strings: ['Desenvolvedor Fullstack'],
    autoStart: true,
    loop: true,
  }}
/>
            
        </div>
    )
}


export default Home