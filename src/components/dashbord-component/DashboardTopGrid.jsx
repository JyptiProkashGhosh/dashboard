import React from 'react'
import {AiOutlineDollar} from "react-icons/ai"
import {CgLoadbarDoc} from "react-icons/cg"
import {IoWalletOutline} from "react-icons/io5"
import {HiOutlineShoppingBag} from "react-icons/hi2"
import {AiOutlineArrowUp} from "react-icons/ai"

export default function DashboardTopGrid() {
  return (
    <div className='TopMain flex gap-6 ml-8'>
        <div className="earning flex flex-row bg-white rounded-md p-1 pt-4 gap-6 w-60 h-28">
            <div className="logo ml-2 w-20 h-20 bg-green-100 rounded-full">
                <AiOutlineDollar className='absoulate h-14 w-14 text-green-600 ml-3 mt-3'/>
            </div>
            <div className="information leading-3 mt-3">
                <span className='text-[10px]  text-gray-400'>Earning</span>
                <h2 className='text-black font-bold text-lg mt-[-3px]'>$198k</h2>
                <h5 className='flex flex-row text-green-600 text-[11px] font-medium'> <AiOutlineArrowUp /> 37.8% <span className='text-black font-thin ml-1 '> this month</span></h5>
            </div>
        </div>
        <div className="orders flex flex-row bg-white rounded-md p-1 pt-4 gap-6 w-60 h-28">
        <div className="logo ml-2 w-20 h-20 bg-purple-100 rounded-full">
                <CgLoadbarDoc className='absoulate h-14 w-14 text-purple-600 ml-3 mt-3'/>
            </div>
            <div className="information leading-3 mt-3">
                <span className='text-[10px]  text-gray-400'>Orders</span>
                <h2 className='text-black font-bold text-lg mt-[-3px]'>$2.4k</h2>
                <h5 className='flex flex-row text-red-600 text-[11px] font-medium '> 2% <span className='text-black font-thin ml-1 '> this month</span></h5>
            </div>
        </div>
        <div className="balance flex flex-row bg-white rounded-md p-1 pt-4 gap-6 w-60 h-28">
        <div className="logo ml-2 w-20 h-20 bg-blue-100 rounded-full">
                <IoWalletOutline className='absoulate h-14 w-14 text-blue-700 ml-3 mt-3'/>
            </div>
            <div className="information leading-3 mt-3">
                <span className='text-[10px]  text-gray-400'>Balance</span>
                <h2 className='text-black font-bold text-lg mt-[-3px]'>$2.4k</h2>
                <h5 className='flex flex-row text-red-600 text-[11px] font-medium'> 2% <span className='text-black font-thin ml-1'> this month</span></h5>
            </div>
        </div>
        <div className="total_sales flex flex-row bg-white rounded-md p-1 pt-4 gap-6 w-60 h-28">
        <div className="logo ml-2 w-20 h-20 bg-red-100 rounded-full">
                <HiOutlineShoppingBag className='absoulate h-14 w-14 text-red-600 ml-3 mt-2.5'/>
            </div>
            <div className="information leading-3 mt-3">
                <span  className='text-[10px]  text-gray-400'>Total Sales</span>
                <h2 className='text-black font-bold text-lg mt-[-3px]'>$89k</h2>
                <h5 className='flex flex-row text-green-600 text-[11px] font-medium '> 11% <span className='text-black font-thin ml-1 '> this month</span></h5>
            </div>
        </div>
      

    </div>
  )
}
