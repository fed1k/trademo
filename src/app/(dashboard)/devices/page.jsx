'use client'
import { Inter } from 'next/font/google';
import { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { HiXMark } from "react-icons/hi2";
export const inter = Inter({
    weight: ['400'],
    subsets: ['latin'],
  });
const DevicesPage = () => {
    const [query, setQuery] = useState("");
    return (
        <div>
             <div className='flex justify-between w-full items-center'>
                <p className={`${inter.className} text-[24px] text-[#002269] leading-6 mb-7`}>Устройства</p>
                <button className='bg-[#e6eeff] flex items-center gap-[10px] py-[6px] px-[10px] rounded-[6px] mb-4 z-10'>
                    <span className='text-[#0052ff] leading-2 text-[12px] font-medium'>Добавить устройство
                    </span>
                    <div>
                    <svg _ngcontent-ng-c2941981905="" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className='mt-[1px]' width="16" height="16"><path _ngcontent-ng-c2941981905="" d="M12.182 4.318a4.5 4.5 0 0 1 0 6.364m-6.364 0a4.5 4.5 0 0 1 0-6.364m-2.121 8.485a7.5 7.5 0 0 1 0-10.606m10.606 0a7.5 7.5 0 0 1 0 10.606M9 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm0 0v6.75" stroke="#0052FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                    </div>
                    </button>
             </div>
             <label className="text-[#8091b5]  text-sm font-[500] mb-[10px]">Поиск по устройствам</label>
              <div className="relative flex items-center border border-gray-300 rounded-2xl p-2 w-full bg-white shadow-sm my-[10px]">
              <CiSearch className="w-5 h-5 text-[#0052ff] mr-2" />
              <input
                type="text"
                placeholder="Искать устройства"
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

         <div className="flex justify-center border rounded-2xl border-[#eef2f9] items-center h-32 bg-[#fbfcfe] mt-5">
          <p className={`text-[18px] text-[#8091b5] font-medium ${inter.className} leading-5 font-serif`}>Устройства не найдены</p>
        </div>
        </div>
    )
}

export default DevicesPage