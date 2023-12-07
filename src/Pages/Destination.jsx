import { useState, useEffect } from 'react'
import React from 'react'
import jsonData from '../data.json';
import Navbar from '../components/Navbar'

export default function Destination() {

  const [data, setData] = useState(null);
  const [selectedTab, setSelectedTab] = useState(0);

  useEffect(() => {

    console.log(jsonData);

    setData(jsonData);
  }, []);

  const handleTabClick = (index) => {
    setSelectedTab(index);
  };



  const tabButtons = data && data[0].destinations.map((destination, index) => (
    <button key={`button${index}`} onClick={() => handleTabClick(index)}>
      {destination.name}
    </button>
  ));

  return (
    <>
      <Navbar />
      {data && data[0].destinations.map((destination, index) => (
        <div key={`tab${index + 1}`} style={{ display: index === selectedTab ? 'block' : 'none' }}>

          <div className='font-Barlow p-5 w-full h-full bg-cover bg-center bg-no-repeat bg-destsm md:bg-destmd lg:bg-destlg'>
            <div className='mt-20 flex flex-col justify-center items-center'>
              <div> <p className='mb-5 text-whitecolor text-navtext'><span className='text-lightdarkcolor font-bold pr-4'>01</span>PICK YOUR DESTINATION</p>
              </div>
              <div> <img className='w-[170px] h-[170px] mb-5 md:w-[300px] md:h-[300px] lg:w-[445px] lg:h-[445px]' src={`./images/destination/${destination.images.png}`} alt={`${destination.name} PNG`}/></div>

            </div>
            <div className='text-blueish mb-5 flex flex-row justify-center gap-x-4 w-full'>
              {tabButtons}
            </div>

            <div className='flex flex-col justify-center items-center text-whitecolor'>

              <h1 className='font-Bellefair text-heading3'>{destination.name}</h1>
              <p className='text-blueish mb-5 font-Barlow text-navtext2 text-center px-[60px]'>{destination.description}</p>

              <div className='border-t-[1.1px] border-lightdarkcolor my-4 min-w-full '></div>
              <div className='flex flex-col text-center'>
                <div className='flex flex-col my-5 '>
                  <p className='text-blueish font-Barlow text-subheading3'>AVG. DISTANCE</p>
                  <p className='text-whitecolor font-Bellefair text-subheading1'>{destination.distance}</p></div>

                <div>
                  <p className='text-blueish font-Barlow text-subheading3 uppercase'>Est. travel time</p>
                  <p className='text-whitecolor font-Bellefair text-subheading1 uppercase'>{destination.travel}</p></div>
              </div>
            </div>
          </div>


        </div>
      ))}



    </>
  );
}
