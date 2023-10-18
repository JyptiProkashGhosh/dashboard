import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Header from './Header'
function Layout() {
  return (
    <div className='layout flex flex-row w-screen  overflow-hidden bg-neutral-100'>
      <div className="sidebar fixed h-screen">
        <Sidebar />
      </div>
      <div className="main w-screen ml-40  bg-neutral-100"> 
      <Header/>
      <div> {<Outlet/>} </div>
      </div>
      
    </div>
  )
}

export default Layout
