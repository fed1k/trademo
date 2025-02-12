'use client'
import { Inter } from 'next/font/google';
import { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { HiXMark } from "react-icons/hi2";
export const inter = Inter({
    weight: ['400'],
    subsets: ['latin'],
  });
  import { FaAngleDown } from "react-icons/fa";
const WithDrawalsPage = () => {
    const [query, setQuery] = useState("");
    const [isExpanded, setIsExpanded] = useState(false);
    return (
        <div>
            <p className={`${inter.className} text-[24px] text-[#002269] leading-6 mb-6`}>Выплаты</p>

            <div className="bg-[#fbfcfe] rounded-2xl space-y-4 border border-[#eef2f9] p-[13px_20px_15px] mb-6">
                <p className={`${inter.className} text-[#002269] text-[14px] font-medium mb-5`}>ОБЪЕМ ДОСТУПНЫХ ВЫПЛАТ</p>
                <p className={`font-sans text-[#002269] text-[20px] font-semibold mb-6`}>100 000 RUB</p>
                <p className={`${inter.className} text-[#8091b5] text-[14px] font-medium mb-4`}>Объем выплат зависит от объема приема</p>
           </div>

           <label className="text-[#8091b5]  text-sm font-[500] mb-[10px]">Поиск по uuid</label>
              <div className="relative flex items-center border border-gray-300 rounded-2xl p-2 w-full bg-white shadow-sm my-[10px]">
              <CiSearch className="w-5 h-5 text-[#0052ff] mr-2" />
              <input
                type="text"
                placeholder="Искать выплаты"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="flex-1 bg-transparent outline-none h-8 w-full text-gray-700 placeholder-gray-400"
                />
                <CiSearch className="w-5 h-5 text-gray-400 cursor-pointer hover:text-[#0052ff] mr-2" />
                {(
                <HiXMark
                    className="w-5 h-5 text-gray-400 cursor-pointer hover:text-[#0052ff]"
                    onClick={() => setQuery("")}
                />
        )}
         </div>

         <button className="flex items-center justify-between bg-[#fbfcfe] px-4 py-2 rounded-lg shadow w-full mt-2">
            <span className="flex items-center w-full text-[12px] gap-1 text-[#002269] font-medium">
            <svg _ngcontent-ng-c3225173330="" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="styles_iconLeft__nPCI9"><path _ngcontent-ng-c3225173330="" d="M2.5 6.667h10m0 0a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0Zm-5 6.666h10m-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" stroke="#0052FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            <select className="bg-[#fbfcfe] p-2 border-none w-full">
                <option className="text-blue-600 font-medium">  Не выбраны </option>
          </select>
            </span>
          </button>

          <button className="flex items-center justify-between bg-[#fbfcfe] px-4 py-2 rounded-lg shadow w-full mt-2">
            <span className="flex items-center w-full text-[12px] gap-1 text-[#002269] font-medium">
            <svg _ngcontent-ng-c3225173330="" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-ng-c3225173330="" d="M14.167 3.333v13.334m0 0-3.334-3.334m3.334 3.334 3.333-3.334M5.833 16.667V3.333m0 0L2.5 6.667m3.333-3.334 3.334 3.334" stroke="#0052FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            <select className="bg-[#fbfcfe] p-2 border-none w-full">
                <option className="text-blue-600 font-medium"> Сначала новые</option>
          </select>
            </span>
          </button>

          <div onClick={() => setIsExpanded(!isExpanded)} className="flex items-center gap-1  mt-4 w-full">  
                <span className={`${inter.className} text-[16px] text-[#8091b5] leading-6`}>
                Расширенный поиск
                </span>
                <FaAngleDown className={`text-gray-600 transform transition-transform ${isExpanded ? "rotate-180" : ""}`} />
            </div>

          <div className="flex justify-center border rounded-2xl border-[#eef2f9] items-center h-32 bg-[#fbfcfe] mt-5 mb-32">
          <p className={`text-[18px] text-[#8091b5] font-medium ${inter.className} leading-5 font-serif`}>Выплаты не найдены</p>
        </div>
        </div>
    )
}

export default WithDrawalsPage