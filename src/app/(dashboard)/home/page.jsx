'use client'
import { Inter } from 'next/font/google';
import { useState } from "react";
import { GoArrowRight } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import { FaPlus } from "react-icons/fa";
export const periods = ["за сегодня", "за неделю", "за месяц", "за год"];
export const inter = Inter({
  weight: ['400'],
  subsets: ['latin'],
});
const HomePage = () => {
  const [selectedPeriod, setSelectedPeriod] = useState(periods[0]);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`flex flex-col gap-7 ${inter.className}`}>
      <div className="flex justify-between mb-5 items-center">
        <p className={`${inter.className} text-[16px] text-[#002269]`}>Финансы</p>
        <div className="relative inline-block">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="bg-gray-100 flex items-center gap-1 px-4 py-2 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Период: <span className="text-blue-600">{selectedPeriod}</span> <IoIosArrowDown />
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

      <div className="bg-[#fbfcfe] rounded-2xl space-y-4 border border-[#eef2f9] p-[13px_20px_15px]">
        <p className={`${inter.className} text-[#002269] text-[14px] font-medium`}>Deals</p>
        <p className={`font-sans text-[rgb(0 34 105)] text-[20px] mb-[10px] font-semibold`}>0 USDT</p>
        <p className={`${inter.className} text-[#8091b5] text-[14px] font-medium mb-4`}>0 RUB</p>
        <span className="w-2 h-2 flex justify-center mx-auto rounded-full bg-[#0052ff] text-center "></span>
      </div>

      <div>
        <p className={`pb-5 text-[16px] text-[#002269] ${inter.className}`}>Последние события</p>
        <div className="flex justify-center border rounded-2xl border-[#eef2f9] items-center h-32 bg-[#fbfcfe]">
          <p className={`text-[18px] text-[#8091b5] ${inter.className} leading-5 font-serif`}>События не найдены</p>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="flex justify-between items-center">
          <p className={`pb-5 text-[16px] text-[#002269] ${inter.className}`}>Устройства</p>
          <button className="flex gap-2 items-center bg-[#e6eeff] cursor-pointer p-1 rounded-md">
            <span className="text-[#0052ff]"> Показать все</span>
            <GoArrowRight className="text-blue-700 border-1 border-[#0052ff]-700" />
          </button>
        </div>
        <button className="flex items-center mx-auto rounded-md  gap-4 py-3 px-5 hover:bg-[#fbfcfe]  my-5">
          <FaPlus className="text-[20px] text-[#0052ff] " /><span className={`text-[16px] text-[#002269] ${inter.className}`}>Добавить устройство</span>
        </button>
      </div>

      <div className="flex flex-col">
        <div className="flex justify-between items-center">
          <p className={`pb-5 text-[16px] text-[#002269] ${inter.className}`}>Открытые споры</p>
          <button className="flex gap-2 items-center bg-[#e6eeff] cursor-pointer px-2 py-1 rounded-md">
            <h3 className="text-[#0052ff]"> Показать все</h3>
            <div><GoArrowRight className="text-blue-700 border-1 border-[#0052ff]-700" /></div>
          </button>
        </div>

        <div className="flex justify-center border rounded-2xl border-[#eef2f9] items-center h-32 bg-[#fbfcfe]">
          <p className={`text-[18px] text-[#8091b5] ${inter.className} leading-5 font-serif`} >События не найдены</p>
        </div>
      </div>

      <div className="flex flex-col  mb-20">
        <div className="flex justify-between items-center">
          <p className={`pb-5 text-[16px] text-[#002269] ${inter.className}`}>Последние сделки</p>
          <button className="flex gap-2 items-center bg-[#e6eeff] cursor-pointer p-1 rounded-md">
            <span className="text-[#0052ff]"> Показать все</span>
            <GoArrowRight className="text-blue-700 border-1 border-[#0052ff]-700" />
          </button>
        </div>

        <div className="flex justify-center border rounded-2xl border-[#eef2f9] items-center h-32 bg-[#fbfcfe]">
          <p className={`text-[18px] text-[#8091b5] ${inter.className} leading-5 font-serif`} >Сделки не найдены</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
