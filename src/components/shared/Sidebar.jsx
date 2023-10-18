import React from 'react'
import logo from "../../assets/download.png"
import {DASHBOARD_SIDEBAR_LINKS} from "../../constants/Navigation"
import { Link, } from 'react-router-dom'
import ProfilePic from "../../assets/jyoti.png"


const MenuLinksClasses ="flex item-center gap-2 px-1 py-3 font-light text-xs hover:bg-blue-900 hover:no-underline focus:outline-none focus:bg-blue-900 rounded ";
export default function Sidebar() {
  return (
    <div>
      <div className="sidebar bg-sidebar-bg h-screen w-40 p-1.5">
        <div className="logo flex flex-row justify-between">
            <img src={logo}alt="img" />
            <h3 className='text-white mr-3 p-2 font-bold'>Dashboard</h3>
        </div>
        <div className="sideMenu">
        <div className="menu  text-white">
          {DASHBOARD_SIDEBAR_LINKS.map((item)=>(
            <MenuLinks key={item.key} item={item} />
          ))}
        </div>
        <div className="profile flex flex-row mt-56 bg-blue-900 rounded-lg h-11 text-white ml-2">
          <img className = "object-contain h-8 w-8 pl-2 mt-2" src={ProfilePic} alt="" />
          <h5 className='flex flex-col font-bold p-2 text-xs'>JYOTI <span className='text-xs font-thin '>Project Manager</span></h5>
        </div>
        </div>
      </div>
    </div>
  )
}
function MenuLinks ({item}) {
  return(
    <Link to={item.path} className={MenuLinksClasses} >
      <span className='text-xl'>{item.icon}</span>
      <div className='mt-1'>{item.label}</div>
      
    </Link>
  )
}