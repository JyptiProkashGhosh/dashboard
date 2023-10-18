import React, { useCallback, useState } from 'react'
import {Bar, BarChart, Cell, ResponsiveContainer, XAxis } from 'recharts';
import { AiOutlineDown } from "react-icons/ai"; 

const data = [
  {
  name: 'Jan',
  income: 70
  },
  {
  name: 'Feb',
  income: 50
  },
  {
  name: 'Mar',
  income: 100
  },
  {
  name: 'Apr',
  income: 75
  },
  {
  name: 'May',
  income: 80
  },
  {
  name: 'Jun',
  income: 40
  },
  {
  name: 'Jul',
  income: 80
  },
  {
  name: 'Aug',
  income: 100
  },
  {
  name: 'Sep',
  income: 95
  },
  {
  name: 'Oct',
  income: 75
  },
  {
  name: 'Nov',
  income: 70
  },
  {
  name: 'Dec',
  income: 75
  },
]

export default function OvberViewChart() {

  const [activeIndex, setActiveIndex] = useState(0);


  const handleClick = useCallback(
    (entry: any, index: Number) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );
  return (
    <div className='w-[53vw]  object-cover ml-8 '>
      <div className='flex flex-row justify-between'>
    <h3 className='absolute mt-2 ml-3 font-bold '>Overview </h3>
    <span className='absolute mt-4 ml-[47vw] font-thin text-xs flex flex-row '>Quaterly<AiOutlineDown className='mt-1 ml-1'/></span>
    </div>
    <div className="chart h-[50vh] m-0 p-0 bg-white font-thin rounded-lg  flex flex-col flex-1 ">
     <ResponsiveContainer width="100%" height="100%" className='rounded-lg pt-6 '>
      <BarChart data={data} >
        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{stroke:'black', fontSize:'10px' }}/>
        <Bar dataKey="income" radius={[10,10,10,10]} onClick={handleClick}>
          {data.map((entry, index) => (
            <Cell
              cursor="pointer"
              fill={index === activeIndex ? "#3b82f6" : "#e0f2fe"}
              key={`cell-${index}`}
            />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
    </div>
  </div>
  )
}
