import React from "react";
import { IoBagHandle, IoPieChart, IoPeople, IoCart } from "react-icons/io5";

export default function DashboardStatsGrid() {
  return (
    <div className="flex flex-wrap gap-4">
      <BoxWrapper className="flex-1 min-w-[200px]">
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500">
          <IoBagHandle className="text-2xl text-white" />
        </div>
        <div>
          <span className="text-sm text-gray-500 font-light">Total Orders</span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">75</strong>
            <span className="text-sm text-green-500 pl-2">+343</span>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper className="flex-1 min-w-[200px]">
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-orange-600">
          <IoPieChart className="text-2xl text-white" />
        </div>
        <div>
          <span className="text-sm text-gray-500 font-light">
            Total Delivered
          </span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">$3423</strong>
            <span className="text-sm text-green-500 pl-2">-343</span>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper className="flex-1 min-w-[200px]">
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-yellow-400">
          <IoPeople className="text-2xl text-white" />
        </div>
        <div>
          <span className="text-sm text-gray-500 font-light">
            Total Cancelled
          </span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">12313</strong>
            <span className="text-sm text-red-500 pl-2">-30</span>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper className="flex-1 min-w-[200px]">
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-green-600">
          <IoCart className="text-2xl text-white" />
        </div>
        <div>
          <span className="text-sm text-gray-500 font-light">Total Revenue</span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">16432</strong>
            <span className="text-sm text-red-500 pl-2">-43</span>
          </div>
        </div>
      </BoxWrapper>
      <div className="bg-white rounded-sm p-4 w-36 flex-1 border border-gray-200 flex items-center justify-between min-w-[200px]">
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">Net Profit</span>
          <div className="flex items-center">
            <strong className="text-2xl text-gray-800 font-bold">$6759.25</strong>
          </div>
          <div className="text-sm text-green-500">3%</div>
        </div>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500">
          <IoBagHandle className="text-2xl text-white" />
        </div>
      </div>
    </div>
  );
}

function BoxWrapper({ children }) {
  return (
    <div className="bg-white rounded-sm p-4 border border-gray-200 flex flex-col items-start w-[calc(100%-1rem)] md:w-[215px]">
      {children}
    </div>
  );
}
