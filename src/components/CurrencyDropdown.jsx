"use client"

import { useState } from "react";
import { inter } from "./DateDropdown";
import { IoIosArrowDown } from "react-icons/io";

const CurrencyDropdown = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [selectedPeriod, setSelectedPeriod] = useState("RUB");

    return (

        <div className="relative hidden md:flex">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`bg-[#fbfcfe] ${inter.className} hover:bg-[#e6eeff] flex items-center gap-1 px-5 py-1.5 rounded-md text-gray-800 focus:outline-none border border-[#eef2f9]`}
            >
                <span className=' text-[#002269] text-base font-medium'>Регион:</span> <span className="text-[#8091b5] pl-1 flex gap-1 items-center font-medium text-[16px]">{selectedPeriod}</span> <IoIosArrowDown className={`${isOpen ? "custom-rotate" : ""} text-[#8091b5] transition-all`} />
            </button>

            <div className={`absolute ${isOpen ? "max-h-[150px] visible" : "max-h-0 visibility-hidden"} dropdown-shadow py-2.5 px-0 overflow-hidden transition-all top-full left-0 mt-2 w-40 bg-white rounded-lg`}>

                <button
                    onClick={() => {
                        setSelectedPeriod("RUB");
                        setIsOpen(false);
                    }}
                    className={`block ${inter.className} w-full text-[#0052ff] text-[14px] px-4 py-1.5 font-medium text-left hover:bg-[#eef2f9]`}
                >
                    <span className='text-[14px] flex items-center gap-2'>Россия (RUB)</span>
                </button>
            </div>

        </div>
    )
}

export default CurrencyDropdown