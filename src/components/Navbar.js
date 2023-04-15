import React from 'react'
import logo from '../assets/logo.png';
import {FiMenu} from 'react-icons/fi';
import {ImDownload} from 'react-icons/im';
export const Navbar = () => {
  return (
    <div className='bg-[rgba(1,0,0)]'>
    <div className='flex items-center mx-auto max-w-[70vw]'>
        {/*left*/}
        <div className="flex items-center justify-center md:py-6 md:px-8 md:justify-start py-2 px-3 w-full md:w-auto">
          <div className="md:hidden left-4 top-4 absolute text-white">
            <FiMenu className="text-[30px]"/>
          </div>
        <div className="flex items-center justify-center text-white font-cursive text-[31px]">
<img src={logo} alt="" className="w-12 h-12" />
          <p className='px-1'>Steam</p>
          </div>
        </div>
        {/*middle*/}
        <div className='hidden md:flex pl-10'>
          <ul className='flex gap-5 text-white text-[13px]'>
            <li><p>SHOP</p></li>
            <li><p>EXPLORE</p></li>
            <li><p>INFO</p></li>
            <li><p>CONTACT</p></li>
          </ul>
        </div>
        {/*right*/}
        <div className='hidden md:flex absolute right-0.5 top-0 text-white px-1.5 mt-1 text-[13px] flex items-center'>
          <div className='bg-green-500 flex items-center hover:opacity-[80%] rounded-[0.1rem]' style={{'cursor':'pointer'}}>
            <ImDownload className='ml-1 mr-1'/>
            <p className='mr-2'>Download Steam</p>
          </div>
          <div className='bg-white rounded-[0.4rem] font-semibold text-[grey] ml-2 pl-2 hover:text-white hover:bg-black duration-500 ease-out' style={{'cursor':'pointer'}}>
            <p className='pr-2 duration-100 ease-out'>Sign up</p>
          </div>
          <div className='h-[14px] w-[1px] bg-white mx-2'></div>
          <div className='bg-white rounded-[0.4rem] font-semibold text-[grey] ml-0.5 pl-2 hover:text-white hover:bg-black duration-500 ease-out' style={{'cursor':'pointer'}}>
            <p className='mr-2'>Location</p>
          </div>
        </div>
    </div>
    </div>
  )
}
