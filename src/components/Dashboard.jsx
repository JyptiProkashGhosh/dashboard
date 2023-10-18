import React from 'react';
import DashboardTopGrid from './dashbord-component/DashboardTopGrid';
import OvberViewChart from './dashbord-component/OvberViewChart';
import Customers from './dashbord-component/Customers';
import ProductSaleTable from './dashbord-component/ProductSaleTable';


export default function Dashboard() {
  return (
    <div className='flex flex-col gap-4'>
      <DashboardTopGrid />
      <div className='flex flex-row'>
      <OvberViewChart />
      <div className='pl-20 absolute'>
      <Customers/>
      </div>
     
     
      </div>
      <div className="table mt-[4vh] ml-8 w-[80vw] rounded-lg">
        <ProductSaleTable/>
      </div>
    </div>
  );
}
