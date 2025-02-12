'use client'
import { Inter } from 'next/font/google';
import { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { HiXMark } from "react-icons/hi2";
export const inter = Inter({
    weight: ['400'],
    subsets: ['latin'],
  });
const MessagesPage = () => {
    const [query, setQuery] = useState("");
    return (
        <div>
             <p className={`${inter.className} text-[24px] text-[#002269] leading-6 mb-6`}>Сообщения</p>
             <label className="text-[#8091b5] text-sm font-[400] mb-[10px]">Поиск по сообщениям</label>
              <div className="relative flex items-center border border-gray-300 rounded-2xl p-2 w-full bg-white shadow-sm my-[10px]">
              <CiSearch className="w-5 h-5 text-[#0052ff] mr-2" />
              <input
                type="text"
                placeholder="Искать сообщения"
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
          <p className={`text-[18px] text-[#8091b5] font-medium ${inter.className} leading-5 font-serif`}>Сообщения не найдены</p>
        </div>
        </div>
    )
}

export default MessagesPage