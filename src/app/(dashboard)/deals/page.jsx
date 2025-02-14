"use client"
import { inter, periods } from "../home/page";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { HiXMark } from "react-icons/hi2";
const Deals = () => {
  const [selectedPeriod, setSelectedPeriod] = useState(periods[0]);
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  return (
    <div className=" pb-28">
      <div className="flex flex-col gap-7">
        <p className={`${inter.className} text-[24px] text-[#002269] leading-6 `}>Сделки</p>
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

      <div className='flex justify-between gap-4 items-center'>
      <div className="bg-[#fbfcfe] rounded-2xl space-y-4 w-full border border-[#eef2f9] p-[13px_20px_15px]">
        <div className='flex justify-between items-center'>
         <p className={`${inter.className} text-[#002269] text-[14px] font-bold`}>СДЕЛКИ</p>
         <div className="relative hidden md:flex">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="bg-white flex items-center gap-1 px-2 py-1 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 border"
          >
            <span className='text-[12px]'>Период:</span> <span className="text-blue-600 text-[12px]">{selectedPeriod}</span> <IoIosArrowDown />
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
                  className="block w-full text-[12px] px-4 py-2 text-left hover:bg-blue-100 hover:text-blue-600 text-gray-800"
                >
                  <span className='text-[12px]'>{period}</span>
                </button>
              ))}
            </div>
          )}
        </div>
        </div>
        <p className={`font-sans text-[#002269] text-[20px] mb-[10px] font-semibold`}>0 USDT</p>
        <p className={`${inter.className} text-[#8091b5] text-[14px] font-medium mb-4`}>0 – Нет успешных сделок</p>
        <span className="w-2 h-2 flex justify-center mx-auto rounded-full md:hidden bg-[#0052ff] text-center "></span>
      </div>

      <div className="bg-[#fbfcfe] rounded-2xl space-y-4 border hidden md:block w-full border-[#eef2f9] p-[13px_20px_15px]">
        <div className='flex justify-between items-center'>
         <p className={`${inter.className} text-[#002269] text-[14px] font-bold`}>ПРИБЫЛЬ</p>
         <div className="relative hidden md:flex">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="bg-white flex items-center gap-1 px-2 py-1 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 border"
          >
            <span className='text-[12px]'>Период:</span> <span className="text-blue-600 text-[12px]">{selectedPeriod}</span> <IoIosArrowDown />
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
                  className="block w-full text-[12px] px-4 py-2 text-left hover:bg-blue-100 hover:text-blue-600 text-gray-800"
                >
                  <span className='text-[12px]'>{period}</span>
                </button>
              ))}
            </div>
          )}
        </div>
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

      <div className="flex flex-col gap-2 mt-7 w-full px-1">
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

      <div className='justify-between hidden md:flex items-center'>
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
        <div className='w-full flex justify-between items-center'>
            <div>
            <label className="text-[#8091b5] text-sm font-[400] mb-[10px]">Поиск по сделкам</label>
            <button></button>
            </div>
            <div>
            <label className="text-[#8091b5] text-sm font-[400] mb-[10px]">Поиск по сделкам</label>
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