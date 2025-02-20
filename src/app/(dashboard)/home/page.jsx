'use client'
import { Inter } from 'next/font/google';
import { useState } from "react";
import { GoArrowRight } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import { FaPlus } from "react-icons/fa";
import DateDropdown from '@/components/DateDropdown';
export const periods = ["за сегодня", "за неделю", "за месяц", "за год"];
export const inter = Inter({
  weight: ['400'],
  subsets: ['latin'],
});
const HomePage = () => {
  const [selectedPeriod, setSelectedPeriod] = useState(periods[0]);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`flex pb-28 flex-col gap-7 ${inter.className}`}>
      <div className="flex justify-between md:justify-start md:gap-2 mb-5 items-center">
        <p className={`${inter.className} text-[16px] md:text-[20px] text-[#002269]`}>Финансы</p>
        <div className='block sm:hidden'>
          <DateDropdown />
        </div>
      </div>

      <div className='flex justify-between gap-4 items-center'>
        <div className="bg-[#fbfcfe] rounded-2xl space-y-4 w-full border border-[#eef2f9] p-[13px_20px_15px]">
          <div className='flex justify-between items-center'>
            <p className={`${inter.className} text-[#002269] text-[14px] font-semibold`}>СДЕЛКИ</p>
            <div className='hidden md:block'>

              <DateDropdown />
            </div>
          </div>
          <p className={`font-sans text-[rgb(0 34 105)] text-[20px] mb-[10px] font-semibold`}>0 USDT</p>
          <p className={`${inter.className} text-[#8091b5] text-[14px] font-medium mb-4`}>0 RUB</p>
          <span className="w-2 h-2 flex justify-center mx-auto rounded-full md:hidden bg-[#0052ff] text-center "></span>
        </div>

        <div className="bg-[#fbfcfe] rounded-2xl space-y-4 border hidden md:block w-full border-[#eef2f9] p-[13px_20px_15px]">
          <div className='flex justify-between items-center'>
            <p className={`${inter.className} text-[#002269] text-[14px] font-semibold`}>ПРИБЫЛЬ</p>
            <DateDropdown />
          </div>
          <p className={`font-sans text-[rgb(0 34 105)] text-[20px] mb-[10px] font-semibold`}>0 USDT</p>
          <p className={`${inter.className} text-[#8091b5] text-[14px] font-medium mb-4`}>0 RUB</p>
          <span className="w-2 h-2 flex justify-center mx-auto rounded-full md:hidden bg-[#0052ff] text-center "></span>
        </div>
      </div>

      <div className='block md:hidden'>
        <p className={`pb-5 text-[16px]  text-[#002269] ${inter.className}`}>Последние события</p>
        <div className="flex justify-center border rounded-2xl border-[#eef2f9] items-center h-32 bg-[#fbfcfe]">
          <p className={`text-[18px] text-[#8091b5] ${inter.className} leading-5 font-serif`}>События не найдены</p>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="flex justify-between items-center">
          <p className={`pb-5 text-[20px] md:flex hidden text-[#002269] ${inter.className}`}>Последние события</p>
          <p className={`pb-5 text-[16px] flex md:hidden text-[#002269] ${inter.className}`}>Устройства</p>
          <p className={`pb-5 text-[20px] hidden md:block text-[#002269] ${inter.className}`}>Устройства</p>
          <button className="flex gap-2 items-center px-3 py-1 text-sm bg-[#E6EEFF] mb-6 md:mb-3 cursor-pointer p-1 rounded-md">
            <span className="text-[#0052ff] md:text-[#002269]"> Показать все</span>
            <GoArrowRight className="text-blue-700 border-spacing-1 border-[#0052ff]" />
          </button>
        </div>
        <div className='flex'>
          <div className='hidden md:block'>

            <div className="flex justify-center border rounded-2xl border-[#eef2f9] px-10 py-5 items-center h-32 bg-[#fbfcfe]">
              <p className={`text-[18px] text-[#8091b5] ${inter.className} leading-5 font-serif`}>События не найдены</p>
            </div>
          </div>
          <button className="flex items-center mx-auto rounded-md  gap-4 py-3 px-5 hover:bg-[#fbfcfe]  my-5">
            <FaPlus className="text-[20px] text-[#0052ff] " /><span className={`text-[16px] text-[#002269] ${inter.className}`}>Добавить устройство</span>
          </button>


        </div>
      </div>

      <div className="flex flex-col">
        <div className="flex justify-between items-center">
          <p className={`pb-5 text-[16px] md:text-[20px] text-[#002269] ${inter.className}`}>Открытые споры</p>
          <button className="flex gap-2 items-center  text-sm bg-[#E6EEFF] mb-6 md:mb-3 cursor-pointer px-2 py-1 rounded-md">
            <span className="text-[#0052ff]  text-sm md:text-[#002269]"> Показать все</span>
            <div><GoArrowRight className="text-blue-700 border-1 border-[#0052ff]-700" /></div>
          </button>
        </div>

        <div className="flex justify-center border rounded-2xl border-[#eef2f9] items-center h-32 bg-[#fbfcfe]">
          <p className={`text-[18px] text-[#8091b5] ${inter.className} leading-5 font-serif`} >События не найдены</p>
        </div>
      </div>

      <div className="flex flex-col  mb-20">
        <div className="flex justify-between items-center">
          <p className={`pb-5 text-[16px] md:text-[20px] text-[#002269] ${inter.className}`}>Последние сделки</p>
          <button className="flex gap-2 items-center px-3 py-1 text-sm bg-[#E6EEFF] md:mb-3  cursor-pointer p-1 rounded-md">
            <span className="text-[#0052ff] text-sm md:text-[#002269]"> Показать все</span>
            <GoArrowRight className="text-blue-700 border-1" />
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
