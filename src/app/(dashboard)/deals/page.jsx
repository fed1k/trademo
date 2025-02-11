"use client"

import { useState } from "react";
import { inter, periods } from "../home/page";
import { IoIosArrowDown } from "react-icons/io";

const Deals = () => {
  const [selectedPeriod, setSelectedPeriod] = useState(periods[0]);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col gap-7">
      <h2>Deals</h2>
      <div className="flex justify-between mb-5 items-center">
        <p className={`${inter.className} text-[16px] text-[#002269]`}>Finance</p>
        <div className="relative inline-block">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="bg-gray-100 flex items-center gap-1 px-4 py-2 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Period: <span className="text-blue-600">{selectedPeriod}</span> <IoIosArrowDown />
          </button>

          {isOpen && (
            <div className="absolute left-0 mt-2 w-40 bg-white border rounded-lg shadow-lg">
              {periods.map((period) => (
                <button
                  key={period}
                  onClick={() => {
                    setSelectedPeriod(period);
                    setIsOpen(false);
                  }}
                  className="block w-full px-4 py-2 text-left hover:bg-blue-100 hover:text-blue-600 text-gray-800"
                >
                  {period}
                </button>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
 
export default Deals;