import React from 'react'
import { useState, useEffect } from 'react'
import jsonData from '../data.json';
import Navbar from '../components/Navbar'

export default function Crew() {
  const [data, setData] = useState(null);
  const [selectedTab, setSelectedTab] = useState(0);

  useEffect(() => {
    console.log(jsonData);

    setData(jsonData);
  }, []);

  const handleTabClick = (index) => {
    setSelectedTab(index);
  };

  const tabButtons = data && data[0].crew.map((crew, index) => (
    <button key={`button${index}`} onClick={() => handleTabClick(index)} className={`${index === selectedTab ? 'bg-whitecolor' : 'bg-lightdarkcolor'}  transition ease-out duration-500 hover:bg-lightgrey h-3 w-3 rounded-full mr-5 mt-3 `}>

    </button>
  ));


  return (
    <div className='relative text-whitecolor font-Barlow w-full h-full bg-cover bg-center bg-no-repeat bg-crewsm md:bg-crewmd lg:bg-crewlg  text-center'>
      <Navbar />

      {data && data[0].crew.map((crew, index) => (
        <div key={`tab${index + 1}`} style={{ display: index === selectedTab ? 'block' : 'none' }}>
          <div className=' mt-[120px] md:text-left md:pl-10 md:mt-10 lg:absolute lg:left-5 lg:top-[200px]'> <p className='mb-5 text-whitecolor text-navtext '><span className='text-lightdarkcolor font-bold pr-4 '>02</span>MEET YOUR CREW</p></div>

          <div className='flex flex-col justify-center items-center mt-[100px] gap-y-5 p-5 md:flex-col-reverse md:mt-[50px] lg:mt-0 lg:flex-row-reverse lg:justify-around lg:gap-y-0 lg:p-0'>

            <div className='flex flex-col justify-center items-center md:flex-col-reverse lg:flex-row-reverse'>
              <div><img className='w-[200px] mx-auto md:h-[572px] md:w-[456.37px] md:mt-20 lg-mt-0 lg:h-[712px] lg:w-[568.07px]' src={`${crew.images.png}`} alt={`${crew.name} PNG`} />
              </div>
              <div className='border-t-[1.1px] border-lightdarkcolor min-w-[400px] p-5 md:hidden'></div>
              <div className='flex flex-row  lg:absolute lg:left-0 lg:bottom-0 lg:py-20 lg:px-[80px]'>{tabButtons}</div>
            </div>

            <div className='text-center lg:text-left'>
              <p className='font-Bellefair text-[1rem] lg:text-[2rem] text-lightdarkcolor uppercase'>{crew.role}</p>
              <p className='font-Bellefair text-[1.5rem] lg:text-[3rem] uppercase tracking-widest'>{crew.name}</p>
              <p className='font-barlow mt-5 pb-10 max-w-[350px] text-navtext2 lg:text-navtext3 md:pb-0'>{crew.bio}</p></div>

          </div>


        </div>
      ))}

    </div>
  );
}