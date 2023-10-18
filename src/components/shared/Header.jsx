import React from 'react'
import {FaHandsClapping} from "react-icons/fa6"
import {HiOutlineSearch} from "react-icons/hi"
export default function Header() {
  return (
    <div className='Header h-12 flex flex-row justify-between items-center my-4'>
      <h3 className='text-blue-800 font-medium flex flex-row ml-8' >Hello Shahrukh <span className='mt-1 ml-2'><FaHandsClapping/></span> </h3>
      <div className="search mr-8">
        <HiOutlineSearch fontSize={17} className='text-gray-400 absolute top-4 ml-1 mt-4'/>
        <input type="text" placeholder='Search...' fontSize={10} className='  focus:outline-none active:outline-none h-8 rounded-md mr-6 items-center px-6' />
      </div>
    </div>
  )
}
