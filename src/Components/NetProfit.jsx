import React from "react";
import { IoBagHandle } from "react-icons/io5";

function NetProfit() {
  return (
    <div className="bg-white rounded-sm p-4 w-36 flex-1 border  border-gray-200 flex items-center justify-between">
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
  );
}

export default NetProfit;
