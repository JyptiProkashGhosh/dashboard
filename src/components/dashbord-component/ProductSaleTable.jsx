import React from 'react'
import {HiOutlineSearch} from "react-icons/hi"
import {BiChevronDown} from "react-icons/bi"
import Abstract from "../../assets/abstract.png"
import sharpness from "../../assets/sharpness.jpg"

// const sellData =[
//   {
//     product_img: {Abstract},
//     product_name: 'Abstract 3d',
//     product_stock: 32 ,
//     product_price: 45.99,
//     total_sell:20

//   },
//   {
//     product_img: {sharpness},
//     product_name: 'Sharpness Illustration',
//     product_stock: 32 ,
//     product_price: 45.99,
//     total_sell:20

//   },
// ]




function ProductSaleTable() {
  return (
    <div className='table w-[81vw] h-[300px] bg-white rounded-lg'>
      <div className="tableTop h-12 flex flex-row justify-between rounded-md">
        <h2 className='font-bold text-lg ml-3 mt-2'>Product sell</h2>
        <div className='flex flex-row w-80 justify-between '>
          <div className="search content-center flex ">
          <HiOutlineSearch fontSize={17} className='absolute text-gray-400 mt-4' />
          <input type="text" placeholder='Search...' fontSize={10} className='pl-5 h-6 mt-3 rounded bg-neutral-100' />
          </div>
          <span className='mr-6 mt-4 font-thin text-xs flex flex-row'>Last 30 days <BiChevronDown className='mt-1'/> </span>
        </div>
      </div>
      <div className="mainTable">
        <table className='w-[78vw] ml-3 '>
          
            <tr className='  text-sm text-gray-400'>
              
              <td>product Name</td>
              <td >Stock</td>
              <td >Price</td>
              <td>Total Sales</td>
              
            </tr>
            <tr>
              
              <td className='flex flex-row gap-5'> <img src={Abstract} alt="" className='w-12 mt-3 rounded h-8' />
              <h3 className='flex flex-col font-semibold pl-28'>Abstracted 3d <span className='font-thin text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span></h3></td>
              <td >32 in stock</td>
              <td >$ 45.99</td>
              <td>20</td>
            </tr>
            <tr>
              
              <td className='flex flex-row gap-5'><img src={sharpness} alt="" className='w-12 mt-3 rounded h-8'/>
              <h3 className='flex flex-col font-semibold pl-28'>Sharpness Illustration <span className='font-thin text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span></h3></td>
              <td>32 in stock</td>
              <td>$ 45.99</td>
              <td>20</td>
            </tr>
            <tr>
              
              <td className='flex flex-row gap-5'> <img src={Abstract} alt="" className='w-12 mt-3 rounded h-8' />
              <h3 className='flex flex-col font-semibold pl-28'>Abstracted 3d <span className='font-thin text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span></h3></td>
              <td >32 in stock</td>
              <td >$ 45.99</td>
              <td>20</td>
            </tr>
            <tr>
              
              <td className='flex flex-row gap-5'><img src={sharpness} alt="" className='w-12 mt-3 rounded h-8'/>
              <h3 className='flex flex-col font-semibold pl-28'>Sharpness Illustration <span className='font-thin text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span></h3></td>
              <td>32 in stock</td>
              <td>$ 45.99</td>
              <td>20</td>
            </tr>
            
            
          
        </table>
    
       {/* {sellData.map((product) => (
        <div className='ml-[40vh]'><img src={product.product_img} alt="" /></div>
       ))} */}
      </div>     
    </div>
  )
}

export default ProductSaleTable
