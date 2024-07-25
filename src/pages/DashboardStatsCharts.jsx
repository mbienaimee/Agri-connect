import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import { IoBagHandle } from "react-icons/io5";
import { MdIncompleteCircle } from "react-icons/md";
import { HiUsers } from "react-icons/hi";

const DashboardStatGrid = () => {
  return (
    <div className="flex gap-4 p-6 w-[80vw]">
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-[#3b9b3e]">
          <IoBagHandle className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">Total sales</span>
          <div className="flex items-center">
            <strong className="text-md text-gray-700 font-semibold">
              $3425.60
            </strong>
            <span className="text-sm text-green-500 pl-2">+234</span>
          </div>
        </div>
      </BoxWrapper>

      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-[#ff9d00]">
          <MdIncompleteCircle className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">
            Total expenses
          </span>
          <div className="flex items-center">
            <strong className="text-md text-gray-700 font-semibold">
              $3423.60
            </strong>
            <span className="text-sm text-green-500 pl-2">-234</span>
          </div>
        </div>
      </BoxWrapper>

      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-[#3b9b3e]">
          <HiUsers className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">Total sales</span>
          <div className="flex items-center">
            <strong className="text-md text-gray-700 font-semibold">
              $12313
            </strong>
            <span className="text-sm text-red-500 pl-2">-30</span>
          </div>
        </div>
      </BoxWrapper>

      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-[#FF9C00]">
          <FaCartShopping className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">Total sales</span>
          <div className="flex items-center">
            <strong className="text-md text-gray-700 font-semibold">
              $3425.60
            </strong>
            <span className="text-sm text-red-500 pl-2">-43</span>
          </div>
        </div>
      </BoxWrapper>
    </div>
  );
};

export default DashboardStatGrid;

function BoxWrapper({ children }) {
  return (
    <div className="bg-white rounded-xl p-16 flex-1 border border-gray-200 flex items-center">
      {children}
    </div>
  );
}
