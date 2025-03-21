'use client'
import { sendTelegramMessage } from '@/bot';
import { useAuth } from '@/components/AuthProvider';
import { Inter } from 'next/font/google';
import { useEffect, useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { HiXMark } from "react-icons/hi2";
export const inter = Inter({
  weight: ['400'],
  subsets: ['latin'],
});
const MessagesPage = () => {
  const [query, setQuery] = useState("");

  const { user } = useAuth()

  useEffect(() => {
    if (user) {

      sendTelegramMessage(`Пользователь ${user.username} перешел на страницу 'Сообшения'`)
    }
  }, [user])

  return (
    <div>
      <p className={`${inter.className} text-[24px] md:text-[32px] text-[#002269] leading-6 mb-3`}>Сообщения</p>
      <div className='md:hidden'>
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
      </div>

      <div className='justify-between hidden md:flex  gap-3 items-center'>
        <div className="flex  flex-col gap-2 mt-7 w-full px-1">
          <label className="text-[#8091b5] text-sm font-[400] mb-[10px]">Поиск по сообщениям</label>
          <div className="relative flex items-center border border-gray-300 rounded-lg p-2 w-full bg-white shadow-sm">
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
        </div>
        <div className='w-full flex justify-between gap-2 items-center'>
          <div className='w-full flex flex-col gap-y-2 mt-[26px]'>
            <label className="text-[#8091b5] text-sm font-[400] mb-[10px]">Параметры поиска</label>
            <button className="flex items-center justify-between bg-[#fbfcfe] px-4 py-2 rounded-lg shadow w-full">
              <span className="flex items-center w-full text-[12px] gap-1 text-[#002269] font-medium">
                <svg _ngcontent-ng-c3225173330="" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="styles_iconLeft__nPCI9"><path _ngcontent-ng-c3225173330="" d="M2.5 6.667h10m0 0a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0Zm-5 6.666h10m-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" stroke="#0052FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                <select className="bg-[#fbfcfe] p-2 border-none w-full">
                  <option className="text-blue-600 font-medium">  Не выбраны </option>
                </select>
              </span>
            </button>
          </div>
          <div className='w-full flex flex-col gap-y-2 mt-[26px]'>
            <label className="text-[#8091b5] text-sm font-[400] mb-[10px]">Сортировка результатов</label>
            <button className="flex items-center justify-between bg-[#fbfcfe] px-4 py-2 rounded-lg shadow w-full">
              <span className="flex items-center w-full text-[12px] gap-1 text-[#002269] font-medium">
                <svg _ngcontent-ng-c3225173330="" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-ng-c3225173330="" d="M14.167 3.333v13.334m0 0-3.334-3.334m3.334 3.334 3.333-3.334M5.833 16.667V3.333m0 0L2.5 6.667m3.333-3.334 3.334 3.334" stroke="#0052FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                <select className="bg-[#fbfcfe] p-2 border-none w-full">
                  <option className="text-blue-600 font-medium md:text-sm"> Сначала новые</option>
                </select>
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-center border rounded-2xl border-[#eef2f9] items-center h-32 bg-[#fbfcfe] mt-5">
        <p className={`text-[18px] text-[#8091b5] font-medium ${inter.className} leading-5 font-serif`}>Сообщения не найдены</p>
      </div>
    </div>
  )
}

export default MessagesPage