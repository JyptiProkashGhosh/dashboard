import React from "react";
import { PieChart, Pie, Cell } from "recharts";

const data = [
  { name: "Group A", value: 280 },
  { name: "Group B", value: 350 },
  { name: "Group C", value: 450 },
  
];

const COLORS = ["#db2777", "#e0f2fe", "#2563eb",];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index
}: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
     
    </text>
  );
};

export default function Customers() {
  return (
    <div className=" w-[25vw] h-[50vh] ml-[50vw]">
        <div className="fles flex-col absolute  w-[25vw] h-[50vh] bg-white ml-7 rounded-lg ">
        <h3 className="ml-4 mt-3 font-bold text-lg">Customers</h3>
        <span className="ml-4 font-thin text-xs ">Customers that by products</span>
        <div className="flex flex-col mt-24 ml-36">
            <h4 className="ml-4  font-bold text-lg">65%</h4>
            <span>Total new</span>
            <span>customers</span>
        </div>
        
        </div>
      <PieChart width={400} height={400} margin={30}  className="absolute pr-60">
      
      <Pie
        data={data}
        cx={200}
        cy={200}
        labelLine={false}
        label={renderCustomizedLabel}
        innerRadius={60}
        outerRadius={85}
        fill="#8884d8"
        dataKey="value"
        className="fixed"
        
        
        
        
        
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
    </div>
  )
}
