import React from 'react'
import Navbar from '../components/Navbar'
export default function Home() {
    return (
        <div className=' w-full h-full bg-homesm bg-cover bg-center bg-no-repeat md:bg-homemd lg:bg-homelg'>
            <Navbar />
            <div className=' mt-20 p-10 w-full git statush-full flex flex-col lg:flex-row lg:justify-around lg:text-left lg:pb-40 text-whitecolor justify-center items-center text-center'>

                <div className='flex flex-col '>
                    <p className=' font-Barlow uppercase text-navtext2'>So, you want to travel to</p>
                    <h1 className='font-Bellefair block text-heading2 '>SPACE</h1>
                    <p className='text-navtext2 font-Barlow text-center max-w-[444px] lg:text-left'>Let’s face it; if you want to go to space, you might as well genuinely go to
                        outer space and not hover kind of on the edge of it. Well sit back, and relax
                        because we’ll give you a truly out of this world experience!</p>
                </div>

                <div className='font-Bellefair text-navtext3  flex justify-center items-center bg-whitecolor rounded-full w-10 h-10 p-20 text-darkcolor mt-10 neon-button transition ease-in-out duration-500'>EXPLORE</div>
            </div>
        </div>
    )
}






