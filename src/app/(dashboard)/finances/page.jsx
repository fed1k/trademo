'use client'
import { Inter } from 'next/font/google';
import { useState } from 'react';
import {  FaCreditCard, FaExchangeAlt, FaAngleDown, FaSort,FaSearch } from "react-icons/fa";
export const inter = Inter({
    weight: ['400'],
    subsets: ['latin'],
  });
const FinancesPage = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isExpanded, setIsExpanded] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);
    return (
        <div className='pb-10'>
            <p className={`${inter.className} text-[24px] md:text-[32px] text-[#002269] leading-6 mb-[30px] `}>Финансы</p>
            <p className={`${inter.className} text-[20px] text-[#8091b5] leading-6 mb-[30px] `}>Балансы</p>
            <div className='w-full flex md:hidden gap-2 items-center mb-6'>
                <button className='flex gap-[10px] border px-5 py-[10px] w-[50%] bg-[#f9fafb] items-center rounded-[6px]'>
                <svg _ngcontent-ng-c3644767295="" width='16' height='16' _ngcontent-ng-c1898598531="" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-ng-c3644767295="" _ngcontent-ng-c1898598531="" d="M6.75 12 9 9.75m0 0L11.25 12M9 9.75V15m7.5-8.25h-15m2.625 6.75H3.9c-.84 0-1.26 0-1.581-.164a1.5 1.5 0 0 1-.656-.655c-.163-.32-.163-.74-.163-1.581V5.4c0-.84 0-1.26.163-1.581a1.5 1.5 0 0 1 .656-.656C2.639 3 3.059 3 3.9 3h10.2c.84 0 1.26 0 1.581.163a1.5 1.5 0 0 1 .656.656c.163.32.163.74.163 1.581v5.7c0 .84 0 1.26-.163 1.581a1.5 1.5 0 0 1-.656.655c-.32.164-.74.164-1.581.164h-.225" stroke="#0052FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                <span className={`${inter.className} text-[12px] text-[#002269] font-medium `}>Пополнить Траст</span>
                </button>
                
                <button className='flex gap-[10px] border px-4 py-[10px] w-[50%] bg-[#f9fafb] items-center rounded-[6px]'>
                <svg _ngcontent-ng-c3644767295="" width='16' height='16' _ngcontent-ng-c1898598531="" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-ng-c3644767295="" _ngcontent-ng-c1898598531="" d="m9 17 3 3m0 0 3-3m-3 3v-7m10-4H2m3.5 9h-.3c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874C2 16.48 2 15.92 2 14.8V7.2c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874C3.52 4 4.08 4 5.2 4h13.6c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874C22 5.52 22 6.08 22 7.2v7.6c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874C20.48 18 19.92 18 18.8 18h-.3" stroke="#7ED06A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                <span className={`${inter.className} text-[12px] text-[#002269] font-medium `}>Вывести прибыль</span>
                </button>
            </div>

            <div className="relative w-full overflow-hidden bg-[#fbfcfe] rounded-2xl space-y-4 border border-[#eef2f9]">
              <div className="flex transition-transform duration-300 ease-in-out"
               style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              <div className="w-full flex-shrink-0 h-40 flex flex-col justify-center bg-[#fbfcfe] rounded-2xl space-y-0 border border-[#eef2f9] p-5 py-4">
              <div className='w-full flex justify-between'>
                <p className={`${inter.className} text-[#002269] text-[14px] font-medium mb-6`}>ТРАСТ</p>
                <button className='py-4 px-6 h-6 flex  gap-1 text-[#8091b5] rounded-2xl items-center bg-[#EBEEF8]'>
                    <svg _ngcontent-ng-c3644767295="" width='23'height='20' _ngcontent-ng-c1898598531="" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-ng-c3644767295="" _ngcontent-ng-c1898598531="" d="M20.25 17.5v-1.75a1.75 1.75 0 1 0-3.5 0v1.75M22 10H2m20 1V8.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C20.48 5 19.92 5 18.8 5H5.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C2 6.52 2 7.08 2 8.2v7.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C3.52 19 4.08 19 5.2 19H11m5.6 2.5h3.8c.56 0 .84 0 1.054-.109a1 1 0 0 0 .437-.437C22 20.74 22 20.46 22 19.9v-.8c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437c-.214-.109-.494-.109-1.054-.109h-3.8c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C15 18.26 15 18.54 15 19.1v.8c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437c.214.109.494.109 1.054.109Z" stroke="#8091b5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                    <span className={`${inter.className} text-[#8091b5] text-[12px]`}>0</span>
                </button>
               </div>
              <p className={`font-sans text-[#002269] text-[20px] font-semibold mb-16`}>0 USDT</p>   
              <p className='flex gap-2 items-center top-8'>
                <span className='text-[#8091b5] text-sm leading-6 font-medium'>В резерве</span>
                <span className={`${inter.className} text-[14px] font-medium text-[#002269] leading-6 `}>0 USDT</span>
                <span><svg _ngcontent-ng-c3644767295="" width='16' height='16' _ngcontent-ng-c1898598531="" className='text-[#8091b5] styles_helpIcon__CzWkW' viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" ><g _ngcontent-ng-c3644767295="" _ngcontent-ng-c1898598531="" clipPath="url(#help-circle_svg__a)"><path _ngcontent-ng-c3644767295="" _ngcontent-ng-c1898598531="" d="M6.817 6.75a2.25 2.25 0 0 1 4.373.75c0 1.5-2.25 2.25-2.25 2.25m.06 3h.008M16.5 9a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Z" stroke="#0052FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></g><defs _ngcontent-ng-c3644767295="" _ngcontent-ng-c1898598531=""><clipPath _ngcontent-ng-c3644767295="" _ngcontent-ng-c1898598531="" id="help-circle_svg__a"><path _ngcontent-ng-c3644767295="" _ngcontent-ng-c1898598531="" fill="#fff" d="M0 0h18v18H0z"></path></clipPath></defs></svg></span>
                </p>
            </div>
        <div className="w-full flex-shrink-0 h-40 flex-col items-center justify-center bg-[#fbfcfe] rounded-2xl space-y-4 border border-[#eef2f9] py-5 px-4">
            <p className={`${inter.className} text-[#002269] lowercase text-[18px] font-medium`}>Компенсация выплат</p>
            <p className={`font-sans text-[#002269] text-[20px] mb-[10px] font-semibold`}>0 USDT</p>
            <p className={`${inter.className} text-[#8091b5] text-[14px] font-medium mb-4`}>0 RUB</p>
        </div>
        <div className="w-full flex-shrink-0 h-40 flex-col items-center justify-center bg-[#fbfcfe] rounded-2xl space-y-4 border border-[#eef2f9] py-5 px-4">
            <p className={`${inter.className} text-[#002269] lowercase text-[18px] font-medium`}>Прибыль с приема</p>
            <p className={`font-sans text-[#002269] text-[20px] mb-[10px] font-semibold`}>0 USDT</p>
            <p className={`${inter.className} text-[#8091b5] text-[14px] font-medium mb-4`}>0 RUB</p>
        </div>
        <div className="w-full flex-shrink-0 h-40 flex-col items-center justify-center bg-[#fbfcfe] rounded-2xl space-y-4 border border-[#eef2f9] py-5 px-4">
            <p className={`${inter.className} text-[#002269] lowercase text-[18px] font-medium`}>Прибыль с выплат</p>
            <p className={`font-sans text-[#002269] text-[20px] mb-[10px] font-semibold`}>0 USDT</p>
            <p className={`${inter.className} text-[#8091b5] text-[14px] font-medium mb-4`}>0 RUB</p>
        </div>
        <div className="w-full flex-shrink-0 h-40 flex-col items-center justify-center bg-[#fbfcfe] rounded-2xl space-y-4 border border-[#eef2f9] py-5 px-4">
            <p className={`${inter.className} text-[#002269] lowercase text-[18px] font-medium`}>ЭСКРОУ-СЧЕТ (ПРОВОДИТСЯ СДЕЛКА)</p>
            <p className={`font-sans text-[#002269] text-[20px] mb-[10px] font-semibold`}>0 USDT</p>
            <p className={`${inter.className} text-[#8091b5] text-[14px] font-medium mb-4`}>0 RUB</p>
        </div>
      </div>
    </div>
        <div className="flex justify-center my-2 gap-2 mb-8">
        {[...Array(5)].map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${currentIndex === index ? "bg-[#0052ff] " : "bg-gray-300"}`}
          />
        ))}
         </div>

         {/* */}
           <div className='md:grid hidden grid-cols-2 items-center gap-6 justify-between'>

           <div className="w-full flex-shrink-0 h-40 flex flex-col justify-center bg-[#fbfcfe] rounded-2xl space-y-0      border border-[#eef2f9] p-5 py-4">
              <div className='w-full flex justify-between'>
                <p className={`${inter.className} text-[#002269] text-[14px] font-medium mb-6`}>ТРАСТ</p>
                <button className='py-4 px-6 h-6 flex  gap-1 text-[#8091b5] rounded-2xl items-center bg-[#EBEEF8]'>
                    <svg _ngcontent-ng-c3644767295="" width='23'height='20' _ngcontent-ng-c1898598531="" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-ng-c3644767295="" _ngcontent-ng-c1898598531="" d="M20.25 17.5v-1.75a1.75 1.75 0 1 0-3.5 0v1.75M22 10H2m20 1V8.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C20.48 5 19.92 5 18.8 5H5.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C2 6.52 2 7.08 2 8.2v7.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C3.52 19 4.08 19 5.2 19H11m5.6 2.5h3.8c.56 0 .84 0 1.054-.109a1 1 0 0 0 .437-.437C22 20.74 22 20.46 22 19.9v-.8c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437c-.214-.109-.494-.109-1.054-.109h-3.8c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C15 18.26 15 18.54 15 19.1v.8c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437c.214.109.494.109 1.054.109Z" stroke="#8091b5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                    <span className={`${inter.className} text-[#8091b5] text-[12px]`}>0</span>
                </button>
               </div>
              <p className={`font-sans text-[#002269] text-[20px] font-semibold mb-16`}>0 USDT</p>   
              <p className='flex gap-2 items-center top-8'>
                <span className='text-[#8091b5] text-sm leading-6 font-medium'>В резерве</span>
                <span className={`${inter.className} text-[14px] font-medium text-[#002269] leading-6 `}>0 USDT</span>
                <span><svg _ngcontent-ng-c3644767295="" width='16' height='16' _ngcontent-ng-c1898598531="" className='text-[#8091b5] styles_helpIcon__CzWkW' viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" ><g _ngcontent-ng-c3644767295="" _ngcontent-ng-c1898598531="" clipPath="url(#help-circle_svg__a)"><path _ngcontent-ng-c3644767295="" _ngcontent-ng-c1898598531="" d="M6.817 6.75a2.25 2.25 0 0 1 4.373.75c0 1.5-2.25 2.25-2.25 2.25m.06 3h.008M16.5 9a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Z" stroke="#0052FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></g><defs _ngcontent-ng-c3644767295="" _ngcontent-ng-c1898598531=""><clipPath _ngcontent-ng-c3644767295="" _ngcontent-ng-c1898598531="" id="help-circle_svg__a"><path _ngcontent-ng-c3644767295="" _ngcontent-ng-c1898598531="" fill="#fff" d="M0 0h18v18H0z"></path></clipPath></defs></svg></span>
                </p>
            </div>
            <div className="w-full flex-shrink-0 h-40 flex-col items-center justify-center bg-[#fbfcfe] rounded-2xl space-y-2 border border-[#eef2f9] py-5 px-4">
            <p className={`${inter.className} text-[#002269] lowercase text-[18px] font-medium`}>Компенсация выплат</p>
            <p className={`font-sans text-[#002269] text-[20px] mb-[10px] font-semibold`}>0 USDT</p>
            <p className={`${inter.className} text-[#8091b5] text-[14px] font-medium mb-4`}>0 RUB</p>
        </div>
          <div className="w-full flex-shrink-0 h-40 flex-col items-center justify-center bg-[#fbfcfe] rounded-2xl space-y-2 border border-[#eef2f9] py-5 px-4">
            <p className={`${inter.className} text-[#002269] lowercase text-[18px] font-medium`}>Прибыль с приема</p>
            <p className={`font-sans text-[#002269] text-[20px] mb-[10px] font-semibold`}>0 USDT</p>
            <p className={`${inter.className} text-[#8091b5] text-[14px] font-medium mb-4`}>0 RUB</p>
        </div>
          <div className="w-full flex-shrink-0 h-40 flex-col items-center justify-center bg-[#fbfcfe] rounded-2xl space-y-2 border border-[#eef2f9] py-5 px-4">
            <p className={`${inter.className} text-[#002269] lowercase text-[18px] font-medium`}>Прибыль с выплат</p>
            <p className={`font-sans text-[#002269] text-[20px] mb-[10px] font-semibold`}>0 USDT</p>
            <p className={`${inter.className} text-[#8091b5] text-[14px] font-medium mb-4`}>0 RUB</p>
        </div>
        <div className="w-full flex-shrink-0 h-40 flex-col items-center justify-center bg-[#fbfcfe] rounded-2xl space-y-2 border border-[#eef2f9] py-5 px-4">
            <p className={`${inter.className} text-[#002269] lowercase text-[18px] font-medium`}>ЭСКРОУ-СЧЕТ (ПРОВОДИТСЯ СДЕЛКА)</p>
            <p className={`font-sans text-[#002269] text-[20px] mb-[10px] font-semibold`}>0 USDT</p>
            <p className={`${inter.className} text-[#8091b5] text-[14px] font-medium mb-4`}>0 RUB</p>
        </div>

        <div className="w-full flex-shrink-0 h-40 flex-col items-center justify-center bg-[#fbfcfe] rounded-2xl space-y-2 border border-[#eef2f9] py-5 px-4">
            <p className={`${inter.className} text-[#002269] lowercase text-[18px] font-medium`}>СПОРНЫЕ СДЕЛКИ</p>
            <p className={`font-sans text-[#002269] text-[20px] mb-[10px] font-semibold`}>0 USDT</p>
            <p className={`${inter.className} text-[#8091b5] text-[14px] font-medium mb-4`}>0 RUB – Споров: 0</p>
        </div>
           </div>




       <div>
      <button className="flex items-center gap-2 bg-[#f0f4fc] px-7 py-[14px] rounded-lg shadow mt-4 w-full justify-center mb-16">
         <svg _ngcontent-ng-c3644767295="" className='mt-[2px]' width='18' height='18' viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-ng-c3644767295="" d="M15 7.125V5.4c0-.84 0-1.26-.164-1.581a1.5 1.5 0 0 0-.655-.656C13.861 3 13.441 3 12.6 3H3.9c-.84 0-1.26 0-1.581.163a1.5 1.5 0 0 0-.656.656c-.163.32-.163.74-.163 1.581v7.2c0 .84 0 1.26.163 1.581a1.5 1.5 0 0 0 .656.655c.32.164.74.164 1.581.164h8.7c.84 0 1.26 0 1.581-.164a1.5 1.5 0 0 0 .655-.655c.164-.32.164-.74.164-1.581v-1.725M11.25 9c0-.348 0-.523.029-.668a1.5 1.5 0 0 1 1.178-1.178c.145-.029.32-.029.668-.029h1.5c.348 0 .523 0 .668.029a1.5 1.5 0 0 1 1.178 1.178c.029.145.029.32.029.668 0 .348 0 .523-.029.668a1.5 1.5 0 0 1-1.178 1.178c-.145.029-.32.029-.668.029h-1.5c-.348 0-.523 0-.668-.029a1.5 1.5 0 0 1-1.178-1.178c-.029-.145-.029-.32-.029-.668Z" stroke="#0052FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
        <span className="text-[#002269] text-sm font-medium">Операции по счету</span>
      </button>

      
        <p className={`${inter.className} text-[16px] text-[#8091b5] leading-6`}>Операции по счету</p>
      

        <div className="mt-4 mb-28">
            <div onClick={() => setIsExpanded(!isExpanded)} className="flex items-center gap-1  mt-4 w-full">  
                <span className={`${inter.className} text-[16px] text-[#8091b5] leading-6`}>
                 Расширенный поиск
                </span>
                <FaAngleDown className={`text-gray-600 transform transition-transform ${isExpanded ? "rotate-180" : ""}`} />
            </div>
            {isExpanded && (
        <div className="mt-4">
          <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="flex items-center justify-between bg-[#fbfcfe] px-4 py-2 rounded-lg shadow w-full">
            <span className="flex text-[12px] items-center w-full gap-2 text-[#002269] font-medium">
            <svg _ngcontent-ng-c3644767295="" width='20' height='20' viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-ng-c3644767295="" d="M16.5 7.5h-15m6.75 3H4.5m-3-4.35v5.7c0 .84 0 1.26.163 1.581a1.5 1.5 0 0 0 .656.655c.32.164.74.164 1.581.164h10.2c.84 0 1.26 0 1.581-.164a1.5 1.5 0 0 0 .656-.655c.163-.32.163-.74.163-1.581v-5.7c0-.84 0-1.26-.163-1.581a1.5 1.5 0 0 0-.656-.656c-.32-.163-.74-.163-1.581-.163H3.9c-.84 0-1.26 0-1.581.163a1.5 1.5 0 0 0-.656.656c-.163.32-.163.74-.163 1.581Z" stroke="#0052FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg> 
                <select className="bg-[#fbfcfe] p-2 w-full border-none">
                <option className="text-blue-600 font-medium">Все типы</option>
                <option className="text-gray-500">Вывод прибыли</option>
                <option className="text-gray-500">Пополнение</option>
            </select>
            </span>
          </button>
          <button  onClick={() => setIsDropdownOpen1(!isDropdownOpen1)} className="flex items-center justify-between bg-[#fbfcfe] px-4 py-2 rounded-lg shadow w-full mt-2">
            <span className="flex items-center w-full text-[12px] gap-1 text-[#002269] font-medium">
            <svg _ngcontent-ng-c3644767295="" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-ng-c3644767295="" d="M14.167 3.333v13.334m0 0-3.334-3.334m3.334 3.334 3.333-3.334M5.833 16.667V3.333m0 0L2.5 6.667m3.333-3.334 3.334 3.334" stroke="#0052FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            <select className="bg-[#fbfcfe] p-2 border-none w-full">
                <option className="text-blue-600 font-medium"> Сначала новые</option>
                <option className="text-gray-500"> Сначала старые</option>
          </select>
            </span>
          </button>
        </div>
      )}

        <p className={`${inter.className} text-[16px] text-[#002269] leading-6 mt-3`} >Операции не найдены  </p>
         </div>
         



     </div>
    )
}

export default FinancesPage