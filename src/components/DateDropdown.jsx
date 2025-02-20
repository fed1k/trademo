"use client";

// import { inter } from "@/app/(dashboard)/bank-profiles/page";
import { periods } from "@/app/(dashboard)/home/page";
import { Inter } from "next/font/google";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

export const inter = Inter({
    weight: ['500'],
    subsets: ['latin'],
  });

const DateDropdown = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [selectedPeriod, setSelectedPeriod] = useState(periods[0]);

    return (

        <div className="relative flex">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-white hover:bg-[#e6eeff] flex items-center gap-1 px-2 py-1 rounded-md text-gray-800 focus:outline-none border border-[#eef2f9]"
            >
            <span className='text-[12px] text-[#8091b5] font-medium'>Период:</span> <span className="text-[#0052ff] font-medium text-[12px]">{selectedPeriod}</span> <IoIosArrowDown className={`${isOpen ? "custom-rotate" : ""} text-[#8091b5] transition-all`} />
            </button>

            {/* {isOpen && ( */}
            <div className={`absolute ${isOpen ? "max-h-[150px] visible" : "max-h-0 visibility-hidden"} dropdown-shadow py-2.5 px-0 overflow-hidden transition-all top-full left-0 mt-2 w-40 bg-white rounded-lg`}>
                {periods.map((period) => (
                    <button
                        key={period}
                        onClick={() => {
                            setSelectedPeriod(period);
                            setIsOpen(false);
                        }}
                        className={`block ${inter.className} w-full ${period === selectedPeriod ? "text-[#0052ff]" : "text-[#8091b5]"}  text-[14px] px-4 py-1.5 font-medium text-left hover:bg-[#eef2f9]`}
                    >
                        <span className='text-[14px]'>{period}</span>
                    </button>
                ))}
            </div>
            
        </div>
    )
}

export default DateDropdown