"use client";


// import { periods } from "@/app/(dashboard)/home/page";
import { Inter } from "next/font/google";
import Image from "next/image";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

export const inter = Inter({
    weight: ['500'],
    subsets: ['latin'],
});

const options = [
    "Русский",
    "Англиский"
]

const flags = [
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOgAAACUCAMAAACul5XwAAAAGFBMVEX///8AOabVKx5SVq8AM6QAOahIOJvkKQA8Z3E5AAAAlklEQVR4nO3PQQGDAAwAsTJg+HeMCj7XxEFmAAAAAAAAAAAAAIDPnEvMtcQcS4jWiNaI1ojWiNaI1ojWiNaI1ojWiNaI1ojWiNaI1ojWiNaI1ojWiNaI1ojWiNbsid5LzH+JeZaY3xKiNaI1ojWiNaI1ojWiNaI1ojWiNaI1ojWiNaI1ojWiNaI1ojWiNaI1ojWiNaI1L169l1nPe0wvAAAAAElFTkSuQmCC",
    "data:image/png;base64,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"
]

const LanguageDropdown = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [selectedPeriod, setSelectedPeriod] = useState(options[0]);

    return (

        <div className="relative hidden md:flex">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`bg-[#fbfcfe] ${inter.className} hover:bg-[#e6eeff] flex items-center gap-1 px-5 py-1.5 rounded-md text-gray-800 focus:outline-none border border-[#eef2f9]`}
            >
                <span className=' text-[#002269] text-base font-medium'>Язык:</span> <span className="text-[#8091b5] pl-1 flex gap-1 items-center font-medium text-[16px]"><Image width={22} height={22} src={selectedPeriod === options[0] ? flags[0] : flags[1]} alt="russia logo" />{selectedPeriod === options[0] ? "RU" : "EN"}</span> <IoIosArrowDown className={`${isOpen ? "custom-rotate" : ""} text-[#8091b5] transition-all`} />
            </button>

            {/* {isOpen && ( */}
            <div className={`absolute ${isOpen ? "max-h-[150px] visible" : "max-h-0 visibility-hidden"} dropdown-shadow py-2.5 px-0 overflow-hidden transition-all top-full left-0 mt-2 w-40 bg-white rounded-lg`}>
                {options.map((period, index) => (
                    <button
                        key={period}
                        onClick={() => {
                            setSelectedPeriod(period);
                            setIsOpen(false);
                        }}
                        className={`block ${inter.className} w-full ${period === selectedPeriod ? "text-[#0052ff]" : "text-[#8091b5]"}  text-[14px] px-4 py-1.5 font-medium text-left hover:bg-[#eef2f9]`}
                    >
                        <span className='text-[14px] flex items-center gap-2'><Image width={20} height={20} src={flags[index]} alt="Flag" /> {period}</span>
                    </button>
                ))}
            </div>

        </div>
    )
}

export default LanguageDropdown