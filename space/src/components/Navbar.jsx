import React, { useState, useEffect } from 'react'
import Hamburger from 'hamburger-react'
import { Link, useNavigate, NavLink } from "react-router-dom";





export default function Navbar() {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false)

  const [iconState, setIconState] = useState("hamburger")


  const handleMenuToggle = () => {
    setOpen(!open);
    if (iconState === 'hamburger') {
      setIconState('close');
    } else {
      setIconState('hamburger');
    }
  };

  function handleNavigation(buttonId) {
    switch (buttonId) {
      case 1:
        navigate("/destination");

        break;
      case 2:
        navigate("/crew");

        break;
      case 3:
        navigate("/technology");

        break;
      default:
        navigate("/");

    }
  }

  const isActive = (match, location) => {
    // Add custom logic here to determine if the link is active
    return match !== null;
  };


  return (
    <>
      <div className='font-Barlow text-navtext relative flex flex-row items-center justify-between lg:pt-10  pl-5 md:pt-0 '>
        <div className=' py-8 px-10 left-0 top-0 flex justify-center items-center logo-pos '>
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><g fill="none" fill-rule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF" /><path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z" /></g>
          </svg></div>




        <div className='bg-transparent backdrop-blur-[10px] flex min-w-[350px] absolute  top-0 right-0 p-30'>

          {open && (
            <ul className='py-10 px-5 text-whitecolor min-h-[570px] '>
              <Link to="/"><li className='mt-10 p-5 py-6 hover:border-b-2 hover:border-lightdarkcolor transition ease-out duration-500'><span className='font-bold'>00</span> HOME</li></Link>
              <li className='p-5 py-6 hover:border-b-2 hover:border-lightdarkcolor transition ease-out duration-500' onClick={() => handleNavigation(1)} ><span className='font-bold'>01</span> DESTINATION</li>
              <li className='p-5 py-6 hover:border-b-2 hover:border-lightdarkcolor transition ease-out duration-500' onClick={() => handleNavigation(2)} ><span className='font-bold'>02</span> CREW</li>
              <li className='p-5 py-6 hover:border-b-2 hover:border-lightdarkcolor transition ease-out duration-500' onClick={() => handleNavigation(3)}><span className='font-bold'>03</span> TECHNOLOGY</li>

            </ul>


          )}</div>
        <button className='text-whitecolor md:hidden lg:hidden absolute right-0 top-0 p-10' onClick={handleMenuToggle}>
          <Hamburger toggled={open} size={20} toggle={setOpen} />

        </button>

        <div className='lg:min-w-[800px] md:min-w-[300px] flex-start bg-transparent backdrop-blur-[110px]  hidden-on-phone ' >
          <ul className=' text-whitecolor flex gap-x-5 items-center pl-10   '>
            <Link to="/"><div className='flex '><li className='py-6 hover:border-b-2 hover:border-lightdarkcolor transition ease-out duration-500'><span className='font-bold remove-spanontablet'>00</span> HOME</li></div></Link>
            <div><li className='p-5 py-6 hover:border-b-2 hover:border-lightdarkcolor transition ease-out duration-500 cursor-pointer' onClick={() => { handleNavigation(1); }}><span className='font-bold remove-spanontablet'>01</span> DESTINATION</li></div>
            <div><li className='py-6 hover:border-b-2 hover:border-lightdarkcolor transition ease-out duration-500 cursor-pointer' onClick={() => { handleNavigation(2); }}><span className='font-bold remove-spanontablet'>02</span> CREW</li></div>
            <div><li className='py-6 hover:border-b-2 hover:border-lightdarkcolor transition ease-out duration-500 cursor-pointer ' onClick={() => { handleNavigation(3); }}><span className='font-bold remove-spanontablet'>03</span> TECHNOLOGY</li></div>

          </ul>

        </div>
        <div className='hidden-on-tablet lineshrink absolute left-[120px] h-[1px] bg-whitecolor'>

        </div>

      </div>




    </>

  )
}
