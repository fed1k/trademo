'use client'
import { Inter } from 'next/font/google';
import { useState } from 'react';
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
export const inter = Inter({
    weight: ['400'],
    subsets: ['latin'],
  });
function DevicePage() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div> 
      <div className='flex justify-between w-full items-center'>
                <p className={`${inter.className} text-[24px] md:text-[32px] text-[#002269] leading-6 mb-7`}>Устройства</p>
                <div className='flex gap-4 font-bold items-center'>
                  <p className={`text-[#FEC065] text-sm ${inter.className}`}>offline</p>
                   <button className='flex gap-1 items-center bg-[#FBFCFE] rounded-[8px] py-2.5 px-5'>
                      <svg _ngcontent-ng-c2661008953="" className='w-5 h-5' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-ng-c2661008953="" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z" stroke="#0052FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path _ngcontent-ng-c2661008953="" d="M9.5 8.965c0-.477 0-.716.1-.849a.5.5 0 0 1 .364-.199c.166-.012.367.117.769.375l4.72 3.035c.349.224.523.336.583.478a.5.5 0 0 1 0 .39c-.06.142-.234.254-.583.478l-4.72 3.035c-.402.258-.603.387-.769.375a.5.5 0 0 1-.364-.2c-.1-.132-.1-.371-.1-.848v-6.07Z" stroke="#0052FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                      <p className={`${inter.className} text-[#002269] text-sm `}> Запустить устройство</p>
                       </button>

                       <div className="dropdown dropdown-sm  dropdown-end ">
                       <button
                      tabIndex={0}
                        className="py-2 px-4 border border-[#eef2f9] rounded-[8px] bg-[#FBFCFE] hover:bg-[#fafbff] flex items-center gap-2" 
                        onClick={() => setIsOpen(!isOpen)}
                      >
                        <span className={`${inter.className} text-[#002269] text-sm `}>Ещё</span> {isOpen ? <IoIosArrowUp/> : <IoIosArrowDown/>}
                            </button>
                      <ul
                    tabIndex={0}
                    className={`absolute right-[1px] top-12 flex flex-col gap-y-2 p-3 shadow bg-[#FBFCFE] hover:bg-[#fafbff] rounded-box w-52 ${
                      isOpen ? "block" : "hidden"
                    }`}
                  >
                    <li className='flex gap-2 items-center hover:bg-[#e2ece5] p-[6px] hover:cursor-pointer transition duration-300 rounded-[8px]'>
                         <svg _ngcontent-ng-c2661008953="" width='15' height='15' viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-ng-c2661008953="" d="M4.875 4.875h.008m8.242 0h.008m-8.258 8.25h.008M9.75 9.75h.008m3.367 3.375h.008m-.383 2.625h3v-3m-5.25-.375v3.375m5.25-5.25h-3.375m-.675-3h2.85c.42 0 .63 0 .79-.082a.75.75 0 0 0 .328-.328c.082-.16.082-.37.082-.79V3.45c0-.42 0-.63-.082-.79a.75.75 0 0 0-.327-.328c-.16-.082-.371-.082-.791-.082H11.7c-.42 0-.63 0-.79.082a.75.75 0 0 0-.328.328c-.082.16-.082.37-.082.79V6.3c0 .42 0 .63.082.79a.75.75 0 0 0 .327.328c.16.082.371.082.791.082Zm-8.25 0H6.3c.42 0 .63 0 .79-.082a.75.75 0 0 0 .328-.328c.082-.16.082-.37.082-.79V3.45c0-.42 0-.63-.082-.79a.75.75 0 0 0-.328-.328c-.16-.082-.37-.082-.79-.082H3.45c-.42 0-.63 0-.79.082a.75.75 0 0 0-.328.328c-.082.16-.082.37-.082.79V6.3c0 .42 0 .63.082.79a.75.75 0 0 0 .328.328c.16.082.37.082.79.082Zm0 8.25H6.3c.42 0 .63 0 .79-.082a.75.75 0 0 0 .328-.327c.082-.16.082-.371.082-.791V11.7c0-.42 0-.63-.082-.79a.75.75 0 0 0-.328-.328c-.16-.082-.37-.082-.79-.082H3.45c-.42 0-.63 0-.79.082a.75.75 0 0 0-.328.327c-.082.16-.082.371-.082.791v2.85c0 .42 0 .63.082.79a.75.75 0 0 0 .328.328c.16.082.37.082.79.082Z" stroke="#0052FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                         <span className={`${inter.className} text-[#002269] text-sm `}>Показать QR-код</span>
                    </li>
                    <li className='flex gap-2 items-center hover:bg-[#e2ece5] p-[6px] hover:cursor-pointer transition duration-300 rounded-[8px]'>
                      <svg width='15' height='15' _ngcontent-ng-c2661008953="" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-ng-c2661008953="" d="M11 4H6.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C2 6.28 2 7.12 2 8.8v8.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C4.28 22 5.12 22 6.8 22h8.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C20 19.72 20 18.88 20 17.2V13M8 16h1.675c.489 0 .733 0 .963-.055.204-.05.4-.13.579-.24.201-.123.374-.296.72-.642L21.5 5.5a2.121 2.121 0 0 0-3-3l-9.563 9.563c-.346.346-.519.519-.642.72a2 2 0 0 0-.24.579c-.055.23-.055.474-.055.963V16Z" stroke="#0052ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                         <span className={`${inter.className} text-[#002269] text-sm `}>Редактировать</span>
                    </li>
                    <li className='flex gap-2 items-center hover:bg-[#e2ece5] p-[6px] hover:cursor-pointer transition duration-300 rounded-[8px]'>
                      <svg _ngcontent-ng-c2661008953="" width='15' height='15'  viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-ng-c2661008953="" d="M12 4.5v-.6c0-.84 0-1.26-.164-1.581a1.5 1.5 0 0 0-.655-.656c-.32-.163-.74-.163-1.581-.163H8.4c-.84 0-1.26 0-1.581.163a1.5 1.5 0 0 0-.656.656C6 2.639 6 3.059 6 3.9v.6m1.5 4.125v3.75m3-3.75v3.75M2.25 4.5h13.5m-1.5 0v8.4c0 1.26 0 1.89-.245 2.371-.216.424-.56.768-.984.984-.48.245-1.11.245-2.371.245h-3.3c-1.26 0-1.89 0-2.371-.245a2.25 2.25 0 0 1-.984-.983C3.75 14.79 3.75 14.16 3.75 12.9V4.5" stroke="#FB6C6C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg> 
                         <span className={`${inter.className} text-[#002269] text-sm `}>Удалить устройство</span>
                    </li>
                  </ul>
                </div>
              </div>
             </div>

      <div className='flex justify-between mt-10 w-full'>
          <div className=''>
              <svg _ngcontent-ng-c2661008953="" className='absolute z-0' height='592' width='296' viewBox="0 0 300 600" fill="none" xmlns="http://www.w3.org/2000/svg" class="styles_deviceImage__NMpHC"><path _ngcontent-ng-c2661008953="" fill-rule="evenodd" clip-rule="evenodd" d="M32 4h234c15.464 0 28 12.536 28 28v536c0 15.464-12.536 28-28 28H32c-15.464 0-28-12.536-28-28V32C4 16.536 16.536 4 32 4ZM1 32C1 14.88 14.88 1 32 1h234c17.121 0 31 13.88 31 31v189.354c-.622.705-1 1.632-1 2.646v67c0 1.014.378 1.941 1 2.646V568c0 17.121-13.879 31-31 31H32c-17.12 0-31-13.879-31-31V32Z" fill="#343443"></path><path _ngcontent-ng-c2661008953="" fill-rule="evenodd" clip-rule="evenodd" d="M32 1h234c17.121 0 31 13.88 31 31v189.354a4.032 4.032 0 0 1 1-.819V32c0-17.673-14.327-32-32-32H32C14.327 0 0 14.327 0 32v536c0 17.673 14.327 32 32 32h234c17.673 0 32-14.327 32-32V294.465a4.032 4.032 0 0 1-1-.819V568c0 17.121-13.879 31-31 31H32c-17.12 0-31-13.879-31-31V32C1 14.88 14.88 1 32 1Z" fill="#1A1A27"></path><rect _ngcontent-ng-c2661008953="" x="5.5" y="5.5" width="287" height="589" rx="26.5" stroke="#1A1A27" stroke-width="3"></rect><rect _ngcontent-ng-c2661008953="" x="8" y="8" width="282" height="584" rx="24" stroke="#222232" stroke-width="2"></rect><rect _ngcontent-ng-c2661008953="" x="12.5" y="12.5" width="273" height="575" rx="19.5" stroke="#F0F4FC" stroke-width="7"></rect><rect _ngcontent-ng-c2661008953="" x="16" y="16" width="266" height="568" rx="16" fill="#F9FBFF"></rect><path _ngcontent-ng-c2661008953="" d="M298 120h.5a1.5 1.5 0 0 1 1.5 1.5v77a1.5 1.5 0 0 1-1.5 1.5h-.5v-80Z" fill="url(#device-body_svg__a)"></path><path _ngcontent-ng-c2661008953="" d="M296 230h.5a1.5 1.5 0 0 1 1.5 1.5v52a1.5 1.5 0 0 1-1.5 1.5h-.5v-55Z" fill="url(#device-body_svg__b)"></path><defs _ngcontent-ng-c2661008953=""><linearGradient _ngcontent-ng-c2661008953="" id="device-body_svg__a" x1="300" y1="120.571" x2="298" y2="120.571" gradientUnits="userSpaceOnUse"><stop _ngcontent-ng-c2661008953="" stop-color="#343443"></stop><stop _ngcontent-ng-c2661008953="" offset="1" stop-color="#272733"></stop></linearGradient><linearGradient _ngcontent-ng-c2661008953="" id="device-body_svg__b" x1="298" y1="230.393" x2="296" y2="230.393" gradientUnits="userSpaceOnUse"><stop _ngcontent-ng-c2661008953="" stop-color="#343443"></stop><stop _ngcontent-ng-c2661008953="" offset="1" stop-color="#272733"></stop></linearGradient></defs></svg>

               <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 '>
             
              <p></p>
             </div>
             
          </div>

          <div className='left-auto w-[65%]'> 
            <div className='p-5 mb-5 w-full  border border-[#eef2f9] rounded-[16px] bg-[#FBFCFE] flex items-center gap-2 h-[104px]'>
              <svg _ngcontent-ng-c2661008953="" className='w-8 h-8' viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-ng-c2661008953="" d="M6 8.75h.005M4.1 11h3.8c.56 0 .84 0 1.054-.109a1 1 0 0 0 .437-.437C9.5 10.24 9.5 9.96 9.5 9.4V2.6c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437C8.74 1 8.46 1 7.9 1H4.1c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C2.5 1.76 2.5 2.04 2.5 2.6v6.8c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437C3.26 11 3.54 11 4.1 11Zm2.15-2.25a.25.25 0 1 1-.5 0 .25.25 0 0 1 .5 0Z" stroke="#0052ff" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></path></svg>
              <div className='ml-5'>
                <p className={`${inter.className} font-medium text-[#8091B5] text-[18px] `}>Название устройства</p>
                <p className={`${inter.className} text-[#002269] text-[900] text-[22px] `}>24123423</p>
              </div>
            </div>
             <div className='p-5 mb-5 w-full  border border-[#eef2f9] rounded-[16px] bg-[#FBFCFE] flex items-center gap-2 h-[104px]'>
            <svg _ngcontent-ng-c2661008953="" className='w-8 h-8' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-ng-c2661008953="" d="M4 6.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C6.28 2 7.12 2 8.8 2h3.212c.733 0 1.1 0 1.446.083.306.073.598.195.867.36.303.185.562.444 1.08.963l3.19 3.188c.518.519.777.778.963 1.081a3 3 0 0 1 .36.867c.082.346.082.712.082 1.446V17.2c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C17.72 22 16.88 22 15.2 22H8.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C4 19.72 4 18.88 4 17.2V6.8Z" stroke="#0052FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path _ngcontent-ng-c2661008953="" d="M8 13.8c0-.28 0-.42.055-.527a.5.5 0 0 1 .218-.218C8.38 13 8.52 13 8.8 13h6.4c.28 0 .42 0 .527.055a.5.5 0 0 1 .218.218c.055.107.055.247.055.527v3.4c0 .28 0 .42-.055.527a.5.5 0 0 1-.218.218C15.62 18 15.48 18 15.2 18H8.8c-.28 0-.42 0-.527-.055a.5.5 0 0 1-.218-.218C8 17.62 8 17.48 8 17.2v-3.4Z" stroke="#0052FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
              <div className='ml-5'>
                <p className={`${inter.className} font-medium text-[#8091B5] text-[18px] `}>Номер SIM</p>
              </div>
            </div>
            <div className='p-5 mb-5 w-full  border border-[#eef2f9] rounded-[16px] bg-[#FBFCFE]  items-center gap-2 h-[133px]'>
            <svg _ngcontent-ng-c2661008953="" className='w-6 h-6 mb-2' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-ng-c2661008953="" d="m15 9-6 6m0-6 6 6m7-3c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z" stroke="#0052ff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
              <div>
                <p className={`${inter.className} text-[#002269] text-[900] text-[16px] `}>Не в работе</p>
                <p className={`${inter.className} font-medium text-[#8091B5] text-[14px] `}>Устройство не в работе</p>
                
              </div>
            </div>
            <div className='p-5 mb-5 w-full  border border-[#eef2f9] rounded-[16px] bg-[#FBFCFE]  items-center gap-2 h-[133px]'>
              <svg _ngcontent-ng-c2661008953="" className='w-6 h-6 mb-2' viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g _ngcontent-ng-c2661008953="" clip-path="url(#wifi_svg__a)"><path _ngcontent-ng-c2661008953="" d="M12.5 19.5h.01M23.306 8.7A15.942 15.942 0 0 0 12.5 4.5c-4.166 0-7.96 1.592-10.807 4.2m3.539 3.543A10.958 10.958 0 0 1 12.5 9.5c2.786 0 5.33 1.036 7.268 2.743m-3.57 3.532A5.974 5.974 0 0 0 12.5 14.5c-1.416 0-2.718.49-3.745 1.312" stroke="#0052FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></g><defs _ngcontent-ng-c2661008953=""><clipPath _ngcontent-ng-c2661008953="" id="wifi_svg__a"><path _ngcontent-ng-c2661008953="" fill="#fff" transform="translate(.5)" d="M0 0h24v24H0z"></path></clipPath></defs></svg>
              <div>
                <p className={`${inter.className} text-[#002269] text-[900] text-[16px] `}>Нет данных</p>
                <p className={`${inter.className} font-medium text-[#8091B5] text-[14px] `}>Нет данных о скорости</p>
                
              </div>
            </div>

            <div className='p-5 mb-5 w-full  border border-[#eef2f9] rounded-[16px] bg-[#FBFCFE]  items-center gap-2 h-[244px]'>
              <p className={`${inter.className} text-[#002269] text-[900] text-[18px] mb-6 `}>Данные об устройстве</p>

              <div>
                <div className='flex items-center gap-10 mb-3'>
                 <div className='flex items-center gap-2'>
                  <svg _ngcontent-ng-c2661008953="" className='w-3 h-3' viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><g _ngcontent-ng-c2661008953="" clip-path="url(#settings-02_svg__a)" stroke="#0052FF" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path _ngcontent-ng-c2661008953="" d="m4.698 9.686.292.657a1.106 1.106 0 0 0 2.022 0l.292-.657a1.213 1.213 0 0 1 1.235-.712l.715.076a1.106 1.106 0 0 0 1.011-1.751l-.423-.582A1.214 1.214 0 0 1 9.612 6c0-.257.081-.507.232-.714l.424-.582a1.105 1.105 0 0 0-1.012-1.751l-.715.076a1.213 1.213 0 0 1-1.235-.714l-.294-.658a1.106 1.106 0 0 0-2.022 0l-.292.657a1.213 1.213 0 0 1-1.235.715l-.718-.076a1.106 1.106 0 0 0-1.01 1.75l.423.583a1.214 1.214 0 0 1 0 1.428l-.424.582a1.106 1.106 0 0 0 1.011 1.751l.715-.076a1.217 1.217 0 0 1 1.238.715Z"></path><path _ngcontent-ng-c2661008953="" d="M6 7.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path></g><defs _ngcontent-ng-c2661008953=""><clipPath _ngcontent-ng-c2661008953="" id="settings-02_svg__a"><path _ngcontent-ng-c2661008953="" fill="#fff" d="M0 0h12v12H0z"></path></clipPath></defs></svg>
                    <p className={`${inter.className} font-medium text-[#8091B5] text-sm `}>Модель</p>
                  </div>
                  <p className={`${inter.className} text-[#002269] text-[900] text-[16px]  `}>Нет данных</p>
                </div>

                <div className='flex items-center gap-10 mb-3'>
                 <div className='flex items-center gap-2'>
                  <svg _ngcontent-ng-c2661008953="" className='w-3 h-3' viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-ng-c2661008953="" d="M4.355 13.898A10.437 10.437 0 0 0 6 8.25a3 3 0 0 1 6 0c0 .763-.052 1.514-.152 2.25m-1.589 5.133c.46-.916.835-1.88 1.119-2.883m2.88.849c.483-1.7.742-3.494.742-5.349a6 6 0 0 0-9-5.197m-3.75 8.47c.48-.989.75-2.1.75-3.273 0-1.093.292-2.117.803-3M9 8.25c0 2.638-.757 5.1-2.065 7.178" stroke="#0052ff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                    <p className={`${inter.className} font-medium text-[#8091B5] text-sm `}>
                    Fingerprint</p>
                  </div>
                  <p className={`${inter.className} text-[#002269] text-[900] text-[16px]  `}>Нет данных</p>
                </div>

                <div className='flex items-center gap-10 mb-3'>
                 <div className='flex items-center gap-2'>
                    <svg _ngcontent-ng-c2661008953="" className='w-3 h-3'  viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-ng-c2661008953="" d="M8.5 5V4a2.5 2.5 0 0 0-5 0v1M6 7.25v1M4.4 10.5h3.2c.84 0 1.26 0 1.581-.164a1.5 1.5 0 0 0 .656-.655C10 9.361 10 8.941 10 8.1v-.7c0-.84 0-1.26-.163-1.581a1.5 1.5 0 0 0-.656-.656C8.861 5 8.441 5 7.6 5H4.4c-.84 0-1.26 0-1.581.163a1.5 1.5 0 0 0-.656.656C2 6.139 2 6.559 2 7.4v.7c0 .84 0 1.26.163 1.581a1.5 1.5 0 0 0 .656.655c.32.164.74.164 1.581.164Z" stroke="#0052FF" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                    <p className={`${inter.className} font-medium text-[#8091B5] text-sm `}>UUID (Ключ)</p>
                  </div>
                  <p className={`${inter.className} text-[#002269] text-[900] text-[16px]  `}>
                  b1ece9cfc83c1ae251f0ee6a1b8f1f7a</p>
                </div>

                <div className='flex items-center gap-10 '>
                 <div className='flex items-center gap-2'>
                 <svg _ngcontent-ng-c2661008953="" className='w-3 h-3'  viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><g _ngcontent-ng-c2661008953="" clip-path="url(#calendar-plus-02_svg__a)"><path _ngcontent-ng-c2661008953="" d="M10.5 5.75V4.4c0-.84 0-1.26-.164-1.581a1.5 1.5 0 0 0-.655-.656C9.361 2 8.941 2 8.1 2H3.9c-.84 0-1.26 0-1.581.163a1.5 1.5 0 0 0-.656.656c-.163.32-.163.74-.163 1.581v4.2c0 .84 0 1.26.163 1.581a1.5 1.5 0 0 0 .656.655c.32.164.74.164 1.581.164h2.35m4.25-6h-9M8 1v2M4 1v2m5 7.5v-3M7.5 9h3" stroke="#0052FF" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path></g><defs _ngcontent-ng-c2661008953=""><clipPath _ngcontent-ng-c2661008953="" id="calendar-plus-02_svg__a"><path _ngcontent-ng-c2661008953="" fill="#fff" d="M0 0h12v12H0z"></path></clipPath></defs></svg>
                    <p className={`${inter.className} font-medium text-[#8091B5] text-sm `}>Добавлено</p>
                  </div>
                  <p className={`${inter.className} text-[#002269] text-[900] text-[16px]  `}>21 февраля 12:45</p>
                </div>
              </div>


            </div>
          </div>
      </div>
    </div>
  )
}

export default DevicePage
