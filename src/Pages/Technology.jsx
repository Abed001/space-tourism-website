import React from 'react'

import { useState, useEffect } from 'react'
import jsonData from '../data.json';
import Navbar from '../components/Navbar'

export default function Technology() {
  const [data, setData] = useState(null);
  const [selectedTab, setSelectedTab] = useState(0);

  useEffect(() => {
    console.log(jsonData);

    setData(jsonData);
  }, []);

  const handleTabClick = (index) => {
    setSelectedTab(index);
  };

  const tabButtons = data && data[0].technology.map((technology, index) => (
    <button key={`button${index}`} onClick={() => handleTabClick(index)} className={`${index === selectedTab ? ' bg-whitecolor text-darkcolor rounded-full' : 'border-darkcolor text-whitecolor'}  transition ease-out duration-500  mr-5 mt-3 `}>
      <div className=' flex justify-center items-center h-5 w-5 lg:w-[70px] lg:h-[70px]  p-5 border-[1.2px] border-lightdarkcolor rounded-full hover:border-whitecolor'>{index + 1}</div>
    </button>
  ));


  return (
    <div className='relative text-whitecolor font-Barlow w-full h-full bg-cover bg-center bg-no-repeat bg-techsm md:bg-techmd lg:bg-techlg  text-center'>
      <Navbar />

      {data && data[0].technology.map((technology, index) => (
        <div key={`tab${index + 1}`} style={{ display: index === selectedTab ? 'block' : 'none' }}>
          <div className=' mt-[120px] md:text-left md:pl-10 md:mt-10 lg:ml-20 '> <p className='mb-5 text-whitecolor text-navtext '><span className='text-lightdarkcolor font-bold pr-4 '>03</span>SPACE LAUNCH 101</p></div>

          <div className=' flex flex-col justify-center items-center mt-5 gap-y-5  md:mt-[50px] lg:flex-row-reverse lg:justify-between lg:p-0 lg:mt-0 '>

            <div className='flex flex-col justify-center items-center '>

              <div class="hidden lg:block">
                <img src={`${technology.images.portrait}`} alt="Large Image" />
              </div>

              <div class="block lg:hidden ">
                <img  src={`${technology.images.landscape}`} alt="Small/Medium Image" />
              </div>



            </div>

            <div className='flex flex-col justify-center items-center text-center lg:flex-row lg:ml-20 '>
              <div className='flex flex-row mt-10 mb-10 lg:flex-col lg:gap-y-5 lg:mr-5'>{tabButtons}</div>
              <div className=' flex flex-col justify-center items-center  lg:w-full text-left'>
                <p className=' lg:w-full  font-Barlow text-subheading2 text-blueish uppercase'>the terminology...</p>
                <p className='  lg:w-full  font-Bellefair text-[1.5rem]  text-whitecolor uppercase lg:text-heading3'>{technology.name}</p>
                <p className='  font-barlow text-center mt-5 p-5 pb-10 max-w-[600px] text-[1rem]  text-blueish md:px-20 lg:px-0 lg:max-w-[500px] lg:text-left lg:text-[18px]  '>{technology.description}</p>
              </div>
            </div>
          </div>


        </div>
      ))}

    </div>
  );
}