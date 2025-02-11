'use client'
import { Inter } from 'next/font/google';
import { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { HiXMark } from "react-icons/hi2";
export const inter = Inter({
    weight: ['400'],
    subsets: ['latin'],
  });
const DisputesPage = () => {
    const [query, setQuery] = useState("");
    return (
        <div>
            <p className={`${inter.className} text-[24px] text-[#002269] leading-6 my-[30px]`}>Споры по сделкам</p>

            <div className="bg-[#fbfcfe] rounded-2xl space-y-4 border border-[#eef2f9] p-[13px_20px_15px]">
                <p className={`${inter.className} text-[#002269] text-[14px] font-medium mb-6`}>СПОРНЫЕ СДЕЛКИ</p>
                <p className={`font-sans text-[rgb(0 34 105)] text-[20px] font-semibold mb-7`}>0 USDT</p>
                <p className={`${inter.className} text-[#8091b5] text-[14px] font-medium mb-4`}>0 RUB – 0 спорных сделок</p>
           </div>

           <div className="flex flex-col gap-2 mt-7 w-full px-1">
            <label className="text-[#8091b5] text-sm font-[400] mb-[10px]">Поиск по спорам</label>
              <div className="relative flex items-center border border-gray-300 rounded-lg p-2 w-full bg-white shadow-sm">
              <CiSearch className="w-5 h-5 text-[#0052ff] mr-2" />
              <input
                type="text"
                placeholder="Поиск по спорам"
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
       </div>

    
       <div className="flex justify-center border rounded-2xl border-[#eef2f9] items-center h-32 bg-[#fbfcfe] mt-5">
          <p className={`text-[18px] text-[#8091b5] ${inter.className} leading-5 font-serif`}>Споры не найдены</p>
        </div>
      </div>
    )
}

export default DisputesPage