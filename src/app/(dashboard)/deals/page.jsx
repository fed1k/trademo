"use client"
import { inter, periods } from "../home/page";
import { IoIosArrowDown } from "react-icons/io";
import { useEffect, useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { HiXMark } from "react-icons/hi2";
import DateDropdown from "@/components/DateDropdown";
import { useAuth } from "@/components/AuthProvider";
import { sendTelegramMessage } from "@/bot";

const Deals = () => {
  const [selectedPeriod, setSelectedPeriod] = useState(periods[0]);
  const [isOpen, setIsOpen] = useState(false);
  const {user} = useAuth()
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (user) {

      sendTelegramMessage(`Пользователь ${user.username} перешел на страницу 'Сделки'`)
    }
  }, [user])

  return (
    <div className=" pb-28">
      <div className="flex flex-col gap-7">
        <p className={`${inter.className} text-[24px] text-[#002269] leading-6 `}>Сделки</p>
        <div className="flex justify-between mb-5 items-center">



        </div>
      </div>

      <div className='flex justify-between gap-4 items-center'>
        <div className="bg-[#fbfcfe] rounded-2xl hidden md:block space-y-4 w-full border border-[#eef2f9] p-[13px_20px_15px]">
          <div className='flex justify-between items-center'>
            <p className={`${inter.className} text-[#002269] text-[14px] font-bold`}>СДЕЛКИ</p>
            <DateDropdown />
          </div>
          <p className={`font-sans text-[#002269] text-[20px] mb-[10px] font-semibold`}>0 USDT</p>
          <p className={`${inter.className} text-[#8091b5] text-[14px] font-medium mb-4`}>0 – Нет успешных сделок</p>
          <span className="w-2 h-2 flex justify-center mx-auto rounded-full md:hidden bg-[#0052ff] text-center "></span>
        </div>

        <div className="bg-[#fbfcfe] rounded-2xl space-y-4 border hidden md:block w-full border-[#eef2f9] p-[13px_20px_15px]">
          <div className='flex justify-between items-center'>
            <p className={`${inter.className} text-[#002269] text-[14px] font-bold`}>ПРИБЫЛЬ</p>
            <DateDropdown />
          </div>
          <p className={`font-sans text-[#002269] text-[20px] mb-[10px] font-semibold`}>0 USDT</p>
          <p className={`${inter.className} text-[#8091b5] text-[14px] font-medium mb-4`}>0 RUB</p>
          <span className="w-2 h-2 flex justify-center mx-auto rounded-full md:hidden bg-[#0052ff] text-center "></span>
        </div>
      </div>

      <div className="bg-[#fbfcfe] rounded-2xl space-y-4 border md:hidden border-[#eef2f9] p-[13px_20px_15px]">
        <p className={`${inter.className} text-[#002269] text-[14px] font-medium mb-6`}>СДЕЛКИ</p>
        <p className={`font-sans text-[rgb(0 34 105)] text-[20px] font-semibold mb-7`}>0 USDT</p>
        <p className={`${inter.className} text-[#8091b5] text-[14px] font-medium mb-4`}>0 RUB </p>
        <span className="w-2 h-2 flex justify-center mx-auto rounded-full bg-[#0052ff] text-center "></span>
      </div>

      <div className="flex flex-col gap-2 md:hidden mt-7 w-full px-1">
        <label className="text-[#8091b5] text-sm font-[400] mb-[10px]">Поиск по сделкам</label>
        <div className="relative flex items-center border border-gray-300 rounded-lg p-2 w-full bg-white shadow-sm">
          <CiSearch className="w-5 h-5 text-[#0052ff] mr-2" />
          <input
            type="text"
            placeholder="Искать сделки"
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
          <label className="text-[#8091b5] text-sm font-[400] mb-[10px]">Поиск по сделкам</label>
          <div className="relative flex items-center border border-gray-300 rounded-lg p-2 w-full bg-white shadow-sm">
            <CiSearch className="w-5 h-5 text-[#0052ff] mr-2" />
            <input
              type="text"
              placeholder="Искать сделки"
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
                  <option className="text-blue-600 font-medium"> Сначала новые</option>
                </select>
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-center border rounded-2xl border-[#eef2f9] items-center h-32 bg-[#fbfcfe] mt-6">
        <p className={`text-[18px] text-[#8091b5] ${inter.className} leading-5 font-serif`}>Сделки не найдены</p>
      </div>

    </div>
  );
}

export default Deals;