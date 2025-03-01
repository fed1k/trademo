'use client'
import { Inter } from 'next/font/google';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { useState } from 'react';
export const inter = Inter({
  weight: ['400'],
  subsets: ['latin'],
});
const BankProfile = () => {
    const [active, setActive] = useState(false)
  return (
    <div>
      <div className='flex items-center mb-8'>
        <p className={`${inter.className} text-[#002269] text-[32px] `}>User (FISH)</p>
        <div className='flex flex-col gap-y-2 ml-auto'>
        <button onClick={() => setActive((prev) => (!prev))} className="flex items-center max-w-[136px] justify-between border border-[#eef2f9] bg-[#fbfcfe] px-4 py-1 rounded-lg  w-full">
          <span className="flex items-center max-w-[620px] text-[12px] p-1 gap-3 text-[#C2C2D2] font-medium">
            <span className={`${inter.className} text-sm text-[#002269]`}>Управление </span>
          </span>
          {!active && <IoIosArrowDown className='text-[#0052FF]'
            onClick={() => setActive(true)}
          />}
          {active && <IoIosArrowUp className='text-[#0052FF]'
            onClick={() => setActive(false)}
          />}
        </button>
        {active && <div className='bg-white transition duration-700 rounded-md   min-w-[250px] max-h-auto shadow-lg'>
           <button className='flex items-center gap-2 h-full py-4 px-5 w-full border-b-[1px] hover:bg-[#e9fce6] group mb-2'>
                <svg _ngcontent-ng-c1210880631="" className='w-4 h-4' viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><g _ngcontent-ng-c1210880631="" clip-path="url(#plus-circle_svg__a)"><path _ngcontent-ng-c1210880631="" d="M9 6v6M6 9h6m4.5 0a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Z" stroke="#0052FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></g><defs _ngcontent-ng-c1210880631=""><clipPath _ngcontent-ng-c1210880631="" id="plus-circle_svg__a"><path _ngcontent-ng-c1210880631="" fill="#fff" d="M0 0h18v18H0z"></path></clipPath></defs></svg>
                <span className={`${inter.className} text-sm group-hover:text-[#0052FF] text-[#002269]`}>Добавить реквизит</span>
           </button>

           <button className='flex items-center gap-2 h-full py-2 px-5 w-full hover:bg-[#e9fce6]'>
           <svg _ngcontent-ng-c1210880631="" className='w-4 h-4' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-ng-c1210880631="" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z" stroke="#0052FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path _ngcontent-ng-c1210880631="" d="M9.5 8.965c0-.477 0-.716.1-.849a.5.5 0 0 1 .364-.199c.166-.012.367.117.769.375l4.72 3.035c.349.224.523.336.583.478a.5.5 0 0 1 0 .39c-.06.142-.234.254-.583.478l-4.72 3.035c-.402.258-.603.387-.769.375a.5.5 0 0 1-.364-.2c-.1-.132-.1-.371-.1-.848v-6.07Z" stroke="#0052FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                <span className={`${inter.className} text-sm text-[#002269]`}>Запустить реквизиты</span>
           </button>

           <button className='flex items-center gap-2 h-full py-2 px-5 w-full hover:bg-[#e9fce6]'>
                <svg _ngcontent-ng-c1210880631="" className='w-4 h-4' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-ng-c1210880631="" d="M9.5 15V9m5 6V9m7.5 3c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z" stroke="#0052FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                <span className={`${inter.className} text-sm  text-[#002269]`}>Остановить реквизиты</span>
           </button>
            <div className='w-[210px] my-2 mx-auto h-[2px] bg-[#f3f4f8] '></div>

            <button className='flex items-center gap-2 h-full py-2 px-5 w-full hover:bg-[#e9fce6]'>
                <svg _ngcontent-ng-c1210880631="" className='w-4 h-4' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-ng-c1210880631="" d="m16.5 16 5 5m0-5-5 5M22 10H2m20 2V8.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C20.48 5 19.92 5 18.8 5H5.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C2 6.52 2 7.08 2 8.2v7.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C3.52 19 4.08 19 5.2 19H12" stroke="#FB6C6C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                <span className={`${inter.className} text-sm  text-[#002269]`}>Вкл. прием на карты</span>
           </button>

           <button className='flex items-center gap-2 h-full py-2 px-5 w-full hover:bg-[#e9fce6]'>
                <svg _ngcontent-ng-c1210880631="" className='w-4 h-4' viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g _ngcontent-ng-c1210880631="" clip-path="url(#sbp_svg__a)"><path _ngcontent-ng-c1210880631="" d="M.5 4.816 2.825 8.81v2.436L.503 15.232.5 4.816Z" fill="#5B57A2"></path><path _ngcontent-ng-c1210880631="" d="m9.428 7.358 2.178-1.284 4.46-.004-6.638 3.908v-2.62Z" fill="#D90751"></path><path _ngcontent-ng-c1210880631="" d="m9.415 4.792.012 5.288-2.33-1.376V.8l2.318 3.992Z" fill="#FAB718"></path><path _ngcontent-ng-c1210880631="" d="m16.065 6.07-4.46.003-2.19-1.28L7.097.8l8.968 5.27Z" fill="#ED6F26"></path><path _ngcontent-ng-c1210880631="" d="M9.427 15.254V12.69l-2.33-1.35.001 7.912 2.33-3.997Z" fill="#63B22F"></path><path _ngcontent-ng-c1210880631="" d="M11.6 13.983 2.826 8.81.5 4.816l15.555 9.162-4.454.005Z" fill="#1487C9"></path><path _ngcontent-ng-c1210880631="" d="m7.098 19.25 2.329-3.996 2.173-1.271 4.455-.006-8.957 5.274Z" fill="#017F36"></path><path _ngcontent-ng-c1210880631="" d="m.503 15.23 6.613-3.893-2.223-1.31-2.068 1.217L.503 15.23Z" fill="#984995"></path></g><defs _ngcontent-ng-c1210880631=""><clipPath _ngcontent-ng-c1210880631="" id="sbp_svg__a"><path _ngcontent-ng-c1210880631="" fill="#fff" transform="translate(.5)" d="M0 0h16v20H0z"></path></clipPath></defs></svg>
                <span className={`${inter.className} text-sm  text-[#002269]`}>Включить СБП</span>
           </button>

           <button className='flex items-center gap-2 h-full py-2 px-5 w-full hover:bg-[#e9fce6]'>
                <svg _ngcontent-ng-c1210880631="" className='w-4 h-4' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-ng-c1210880631="" d="M11 4H6.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C2 6.28 2 7.12 2 8.8v8.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C4.28 22 5.12 22 6.8 22h8.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C20 19.72 20 18.88 20 17.2V13M8 16h1.675c.489 0 .733 0 .963-.055.204-.05.4-.13.579-.24.201-.123.374-.296.72-.642L21.5 5.5a2.121 2.121 0 0 0-3-3l-9.563 9.563c-.346.346-.519.519-.642.72a2 2 0 0 0-.24.579c-.055.23-.055.474-.055.963V16Z" stroke="#0052FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                <span className={`${inter.className} text-sm  text-[#002269]`}>Редактировать</span>
           </button>

           <button className='flex items-center gap-2 h-full py-2 px-5 w-full hover:bg-[#e9fce6]'>
                 <svg _ngcontent-ng-c1210880631="" className='w-4 h-4' viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-ng-c1210880631="" d="M9.75 1.5 3.07 9.516c-.261.314-.392.47-.394.603a.375.375 0 0 0 .14.298c.102.083.307.083.715.083h5.47l-.75 6 6.679-8.016c.262-.314.393-.47.395-.603a.375.375 0 0 0-.14-.298c-.103-.083-.307-.083-.716-.083H9l.75-6Z" stroke="#0052FF" strokeWidth="1.5" strokeLinecap="round" stroke-linejoin="round"></path></svg>
                <span className={`${inter.className} text-sm  text-[#002269]`}>Включить ограничения</span>
           </button>

           <div className='w-[210px] my-2 mx-auto h-[1px] bg-[#f3f4f8] '></div>
           <button className='flex items-center gap-2 h-full py-2 px-5 w-full mb-4 hover:bg-[#e9fce6]'>
                 <svg _ngcontent-ng-c1210880631="" className='w-4 h-4' viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-ng-c1210880631="" d="M12 4.5v-.6c0-.84 0-1.26-.164-1.581a1.5 1.5 0 0 0-.655-.656c-.32-.163-.74-.163-1.581-.163H8.4c-.84 0-1.26 0-1.581.163a1.5 1.5 0 0 0-.656.656C6 2.639 6 3.059 6 3.9v.6m1.5 4.125v3.75m3-3.75v3.75M2.25 4.5h13.5m-1.5 0v8.4c0 1.26 0 1.89-.245 2.371-.216.424-.56.768-.984.984-.48.245-1.11.245-2.371.245h-3.3c-1.26 0-1.89 0-2.371-.245a2.25 2.25 0 0 1-.984-.983C3.75 14.79 3.75 14.16 3.75 12.9V4.5" stroke="#0052FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                <span className={`${inter.className} text-sm  text-[#002269]`}>Удалить профиль </span>
           </button>
        </div>}
      </div>
      </div>

     <p className={`${inter.className} text-[18px] text-[#8091B5] mb-4`} >Данные </p>
      <div className='lg:flex block gap-4 mb-7'>
            <div className='w-full'>
                <div className='flex items-center gap-6 h-[88px] p-5 w-full rounded-[16px] bg-[#F9FAFB] mb-5 border border-[#eef2f9]'>
                <svg _ngcontent-ng-c1210880631="" className='w-6 h-6' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-ng-c1210880631="" d="M3 20c2.336-2.477 5.507-4 9-4 3.493 0 6.664 1.523 9 4M16.5 7.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z" stroke="#0052FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                <p className='flex flex-col'>
                    <span className={`${inter.className} text-sm text-[#8091B5] mb-1`}>Статус профиля </span> 
                    <span className={`${inter.className} text-[18px] text-[900] text-[#0052FF]`}>Приостановлено  </span>
                </p>
                </div>
                <div className='flex items-center gap-6 h-[88px] p-5 w-full rounded-[16px] bg-[#F9FAFB] mb-5 border border-[#eef2f9]'>
                  <img src="https://trademo.top/assets/banks/vtb.svg" className='w-6 h-6 p-3 bg-white rounded-full' alt="" />
                <p className='flex flex-col'>
                    <span className={`${inter.className} text-sm mb-1 text-[#8091B5]`}>Банк профиля </span> 
                    <span className={`${inter.className} text-[18px] font-bold text-[#002269]`}>VTB  </span>
                </p>
                </div>
                <div className='flex items-center gap-6 h-[88px] p-5 w-full rounded-[16px] bg-[#F9FAFB] mb-5 border border-[#eef2f9]'>
                    <svg _ngcontent-ng-c1210880631="" className='w-6 h-6' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-ng-c1210880631="" d="M4 6.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C6.28 2 7.12 2 8.8 2h3.212c.733 0 1.1 0 1.446.083.306.073.598.195.867.36.303.185.562.444 1.08.963l3.19 3.188c.518.519.777.778.963 1.081a3 3 0 0 1 .36.867c.082.346.082.712.082 1.446V17.2c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C17.72 22 16.88 22 15.2 22H8.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C4 19.72 4 18.88 4 17.2V6.8Z" stroke="#0052FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path _ngcontent-ng-c1210880631="" d="M8 13.8c0-.28 0-.42.055-.527a.5.5 0 0 1 .218-.218C8.38 13 8.52 13 8.8 13h6.4c.28 0 .42 0 .527.055a.5.5 0 0 1 .218.218c.055.107.055.247.055.527v3.4c0 .28 0 .42-.055.527a.5.5 0 0 1-.218.218C15.62 18 15.48 18 15.2 18H8.8c-.28 0-.42 0-.527-.055a.5.5 0 0 1-.218-.218C8 17.62 8 17.48 8 17.2v-3.4Z" stroke="#0052FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                <p className='flex flex-col'>
                    <span className={`${inter.className} text-sm mb-1 text-[#8091B5]`}>Номер телефона </span> 
                    <span className={`${inter.className} text-[18px] font-semibold text-[#002269]`}>+998904033880  </span>
                </p>
                </div>
            </div>

            <div className='w-full min-h-[350px] p-5 rounded-[16px] bg-[#F9FAFB] mb-5 border border-[#eef2f9] '>
                <div className='flex items-center justify-between w-full mb-5'>
                    <span className={`${inter.className} text-[18px] font-semibold text-[#002269]`}>Источник </span>
                    <span className={`${inter.className} text-[12px] text-[900] text-[#0052FF]`}>Изменить  </span>
                </div>
                <div className='flex gap-3 justify-between '>
                    <div className='relative text-center lg:w-full w-[35%]'>
                        <svg _ngcontent-ng-c1210880631="" className='w-[146px] h-[249px] absolute z-0 ' viewBox="0 0 300 600" fill="none" xmlns="http://www.w3.org/2000/svg" class="styles_deviceImage__SvmJn"><path _ngcontent-ng-c1210880631="" fill-rule="evenodd" clip-rule="evenodd" d="M32 4h234c15.464 0 28 12.536 28 28v536c0 15.464-12.536 28-28 28H32c-15.464 0-28-12.536-28-28V32C4 16.536 16.536 4 32 4ZM1 32C1 14.88 14.88 1 32 1h234c17.121 0 31 13.88 31 31v189.354c-.622.705-1 1.632-1 2.646v67c0 1.014.378 1.941 1 2.646V568c0 17.121-13.879 31-31 31H32c-17.12 0-31-13.879-31-31V32Z" fill="#343443"></path><path _ngcontent-ng-c1210880631="" fill-rule="evenodd" clip-rule="evenodd" d="M32 1h234c17.121 0 31 13.88 31 31v189.354a4.032 4.032 0 0 1 1-.819V32c0-17.673-14.327-32-32-32H32C14.327 0 0 14.327 0 32v536c0 17.673 14.327 32 32 32h234c17.673 0 32-14.327 32-32V294.465a4.032 4.032 0 0 1-1-.819V568c0 17.121-13.879 31-31 31H32c-17.12 0-31-13.879-31-31V32C1 14.88 14.88 1 32 1Z" fill="#1A1A27"></path><rect _ngcontent-ng-c1210880631="" x="5.5" y="5.5" width="287" height="589" rx="26.5" stroke="#1A1A27" stroke-width="3"></rect><rect _ngcontent-ng-c1210880631="" x="8" y="8" width="282" height="584" rx="24" stroke="#222232" stroke-width="2"></rect><rect _ngcontent-ng-c1210880631="" x="12.5" y="12.5" width="273" height="575" rx="19.5" stroke="#F0F4FC" stroke-width="7"></rect><rect _ngcontent-ng-c1210880631="" x="16" y="16" width="266" height="568" rx="16" fill="#F9FBFF"></rect><path _ngcontent-ng-c1210880631="" d="M298 120h.5a1.5 1.5 0 0 1 1.5 1.5v77a1.5 1.5 0 0 1-1.5 1.5h-.5v-80Z" fill="url(#device-body_svg__a)"></path><path _ngcontent-ng-c1210880631="" d="M296 230h.5a1.5 1.5 0 0 1 1.5 1.5v52a1.5 1.5 0 0 1-1.5 1.5h-.5v-55Z" fill="url(#device-body_svg__b)"></path><defs _ngcontent-ng-c1210880631=""><linearGradient _ngcontent-ng-c1210880631="" id="device-body_svg__a" x1="300" y1="120.571" x2="298" y2="120.571" gradientUnits="userSpaceOnUse"><stop _ngcontent-ng-c1210880631="" stop-color="#343443"></stop><stop _ngcontent-ng-c1210880631="" offset="1" stop-color="#272733"></stop></linearGradient><linearGradient _ngcontent-ng-c1210880631="" id="device-body_svg__b" x1="298" y1="230.393" x2="296" y2="230.393" gradientUnits="userSpaceOnUse"><stop _ngcontent-ng-c1210880631="" stop-color="#343443"></stop><stop _ngcontent-ng-c1210880631="" offset="1" stop-color="#272733"></stop></linearGradient></defs></svg>
                        <p className='absolute ml-10 z-10 -mt-2 flex gap-2 text-center mx-auto'>
                            <svg _ngcontent-ng-c1210880631="" className='w-16 h-16' viewBox="0 0 145 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="styles_logo__SDUqm"><path _ngcontent-ng-c1210880631="" fill-rule="evenodd" clip-rule="evenodd" d="M5.86 5.035c1.176-.675 2.996-.385 3.447 1.362.032.174-.02.269-.311.186-.927-.43-1.724-.313-2.494.127-1.648.941-3.295 1.885-4.938 2.836-.146.085-.346.204-.376.34-.14.627-.276 1.264-.115 1.946l.216-.107c.135-.067.255-.126.373-.189 2.01-1.07 4.02-2.142 6.03-3.215.763-.407 1.538-.48 2.328-.086.609.302.921.84 1.137 1.45.067.152 0 .334-.147.27-1.02-.538-1.9-.414-2.773.088-1.316.758-2.633 1.513-3.951 2.268-.943.54-1.887 1.08-2.83 1.622-.068.04-.13.092-.2.15l-.113.094.392 1.415.265-.13c.157-.075.29-.14.422-.207l2.17-1.116c1.323-.681 2.647-1.362 3.972-2.041l.049-.025c.298-.154.6-.308.914-.423 1.212-.442 2.322-.137 3.124.871.17.212.303.453.436.694.05.091.102.183.154.273.252.43.498.864.744 1.297.552.973 1.104 1.946 1.72 2.875.742 1.118 2.228 1.44 3.385.822 1.566-.837 3.114-1.709 4.662-2.58l.646-.365c.162-.09.35-.255.392-.42.111-.429.194-.865.288-1.362.038-.2.078-.41.122-.632l-.598.317-1.014.539-1.667.889c-1.051.56-2.103 1.122-3.155 1.681-.898.477-1.789.521-2.65-.084-.428-.3-.713-.784-.762-1.226-.015-.137.122-.229.256-.193 1.483.395 1.648.333 3.223-.571 1.08-.62 2.16-1.24 3.24-1.858l2.356-1.35c.16-.091.318-.187.486-.29l.252-.153-.252-1.528c-.11.058-.21.11-.305.158-.184.095-.342.177-.5.261-.666.356-1.334.71-2.003 1.064a278.18 278.18 0 0 0-4.885 2.628c-1.318.732-3.07.484-3.611-1.292-.051-.169-.096-.381.16-.269 1.026.541 1.903.394 2.773-.107 1.493-.86 2.988-1.716 4.483-2.573l2.956-1.694c.058-.033.107-.08.153-.125.02-.02.04-.039.06-.056C22.554 3.099 17.698-.07 12.863 0c-4.667.069-9.532 3.227-10.707 7l.262-.134c.174-.089.336-.172.497-.257.289-.153.578-.305.868-.456a60.344 60.344 0 0 0 2.076-1.12ZM3.324 16.869l-.135.077-.81.467-.006.004c.996 3.274 5.746 6.366 10.042 6.571 4.438.213 9.465-2.505 10.834-5.909l-.186.091c-.115.056-.217.106-.315.16l-1.085.615c-.54.307-1.081.614-1.624.917-1.773.988-3.524.593-4.62-1.11-.498-.775-.95-1.58-1.402-2.383-.205-.365-.41-.729-.618-1.09-.058-.1-.113-.201-.168-.302-.127-.233-.253-.465-.408-.677-.802-1.097-1.957-1.426-3.224-.93a5.93 5.93 0 0 0-.747.37c-1.83 1.031-3.657 2.067-5.528 3.13Z" fill="url(#logo-accent_svg__a)"></path><path _ngcontent-ng-c1210880631="" d="M38.996 6.516h-5.688V3.804h14.564v2.712h-5.688v14.542h-3.188V6.516ZM52.577 9.818c.882-1.38 2.435-2.07 4.658-2.07v2.933a3.872 3.872 0 0 0-.71-.074c-1.194 0-2.126.354-2.796 1.06-.67.69-1.005 1.693-1.005 3.007v6.384h-3.065V7.896h2.918v1.922ZM64.766 7.748c1.928 0 3.4.468 4.413 1.405 1.03.92 1.545 2.317 1.545 4.19v7.715H67.83v-1.602c-.376.575-.915 1.019-1.618 1.33-.686.297-1.52.445-2.5.445-.982 0-1.84-.165-2.575-.493-.736-.346-1.308-.814-1.717-1.405a3.693 3.693 0 0 1-.588-2.046c0-1.183.433-2.128 1.3-2.835.882-.723 2.263-1.084 4.143-1.084h3.384v-.197c0-.92-.278-1.627-.834-2.12-.54-.493-1.348-.74-2.427-.74-.736 0-1.463.115-2.182.345-.703.23-1.3.551-1.79.962l-1.202-2.243c.687-.526 1.512-.929 2.477-1.208.964-.28 1.986-.419 3.065-.419Zm-.417 11.24c.768 0 1.446-.173 2.035-.518a2.923 2.923 0 0 0 1.275-1.528v-1.528h-3.163c-1.766 0-2.648.583-2.648 1.75 0 .558.22 1.002.662 1.33.441.33 1.054.494 1.839.494ZM87.6 2.769v18.289h-2.942v-1.7a4.726 4.726 0 0 1-1.888 1.404c-.735.313-1.553.469-2.452.469-1.258 0-2.394-.28-3.408-.839a6.05 6.05 0 0 1-2.354-2.366c-.572-1.035-.858-2.218-.858-3.549s.286-2.506.858-3.525a6.05 6.05 0 0 1 2.354-2.366c1.014-.559 2.15-.838 3.408-.838.867 0 1.66.148 2.379.444.719.295 1.332.74 1.839 1.33V2.77H87.6Zm-6.914 15.824c.736 0 1.398-.164 1.986-.493a3.731 3.731 0 0 0 1.398-1.454c.343-.624.515-1.347.515-2.169 0-.822-.172-1.545-.515-2.17a3.559 3.559 0 0 0-1.398-1.429c-.588-.345-1.25-.517-1.986-.517-.735 0-1.397.172-1.986.517a3.558 3.558 0 0 0-1.398 1.43c-.343.624-.514 1.347-.514 2.169 0 .822.171 1.545.514 2.169A3.73 3.73 0 0 0 78.7 18.1c.589.329 1.25.493 1.986.493ZM103.919 14.55c0 .214-.016.518-.049.913H93.596c.18.97.646 1.742 1.398 2.317.768.558 1.716.838 2.844.838 1.439 0 2.624-.477 3.555-1.43l1.643 1.898a5.532 5.532 0 0 1-2.231 1.602c-.9.362-1.913.543-3.04.543-1.439 0-2.706-.288-3.801-.863-1.095-.575-1.945-1.372-2.55-2.391-.588-1.035-.883-2.202-.883-3.5 0-1.282.286-2.432.858-3.45a6.252 6.252 0 0 1 2.428-2.416c1.03-.575 2.19-.863 3.482-.863 1.275 0 2.41.288 3.408.863a5.81 5.81 0 0 1 2.354 2.39c.572 1.02.858 2.203.858 3.55Zm-6.62-4.337c-.981 0-1.815.296-2.501.887-.67.575-1.08 1.348-1.226 2.317H101c-.131-.953-.531-1.725-1.201-2.317-.67-.591-1.504-.887-2.501-.887ZM122.923 21.058l-.024-11.437-5.64 9.465h-1.422l-5.639-9.317v11.289h-3.041V3.804h2.624l6.816 11.437 6.694-11.437h2.624l.024 17.254h-3.016ZM136.166 21.23c-1.324 0-2.518-.287-3.58-.862a6.382 6.382 0 0 1-2.501-2.391c-.589-1.035-.883-2.202-.883-3.5s.294-2.457.883-3.475a6.382 6.382 0 0 1 2.501-2.391c1.062-.575 2.256-.863 3.58-.863 1.34 0 2.542.288 3.604.863a6.214 6.214 0 0 1 2.477 2.39c.604 1.02.907 2.178.907 3.476s-.303 2.465-.907 3.5a6.214 6.214 0 0 1-2.477 2.39c-1.062.576-2.264.864-3.604.864Zm0-2.637c1.128 0 2.059-.378 2.795-1.134.736-.756 1.103-1.75 1.103-2.982 0-1.232-.367-2.227-1.103-2.982-.736-.756-1.667-1.134-2.795-1.134s-2.06.378-2.795 1.133c-.72.756-1.079 1.75-1.079 2.983 0 1.232.359 2.226 1.079 2.982.735.756 1.667 1.134 2.795 1.134Z" fill="#0052FF"></path><defs _ngcontent-ng-c1210880631=""><linearGradient _ngcontent-ng-c1210880631="" id="logo-accent_svg__a" x1="0.922" y1="11.539" x2="25.08" y2="11.578" gradientUnits="userSpaceOnUse"><stop _ngcontent-ng-c1210880631="" stop-color="#0052FF"></stop><stop _ngcontent-ng-c1210880631="" offset="1" stop-color="#0036A7"></stop></linearGradient></defs></svg>
                        </p>

                        <svg _ngcontent-ng-c1210880631="" className='absolute w-6 h-6 mt-20 ml-14' viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-ng-c1210880631="" d="M15.338.004c2.266.048 4.405.584 6.415 1.608a15.25 15.25 0 0 1 3.151 2.137c.037.032.072.03.105-.004.289-.316.59-.617.901-.902.242-.22.53-.27.864-.15.256.087.428.26.517.517a.839.839 0 0 1-.116.832c-.24.261-.55.578-.932.95-.03.028-.031.058-.003.09a15.408 15.408 0 0 1 2.954 5.079c.534 1.54.803 3.146.806 4.82 0 2.46-.56 4.768-1.68 6.925a14.928 14.928 0 0 1-3.536 4.469 15.057 15.057 0 0 1-5.041 2.86c-1.489.497-3.04.753-4.654.765-2.746.017-5.295-.668-7.646-2.053a15.53 15.53 0 0 1-2.367-1.721c-.022-.019-.042-.018-.061.002-.295.325-.604.63-.928.917-.257.227-.552.274-.884.14a.814.814 0 0 1-.538-.642c-.055-.268-.01-.489.135-.662.166-.21.324-.375.476-.496.123-.115.247-.24.372-.372.106-.105.147-.17.124-.197a14.4 14.4 0 0 1-1.624-2.203 14.604 14.604 0 0 1-2.135-7.09c-.096-2.362.325-4.596 1.262-6.703.91-2.072 2.246-3.86 4.007-5.363a14.273 14.273 0 0 1 3.143-2.048C10.584.453 12.888-.05 15.338.004Zm.728 2.208c-.311-.273-.65-.423-1.018-.45a1.182 1.182 0 0 0-.579.104c-.31.129-.58.327-.811.594a6.535 6.535 0 0 0-.983 1.541 19.538 19.538 0 0 0-1.329 3.988c-.05.23-.109.484-.178.76-.01.045.007.067.053.067h7.57c.027 0 .038-.013.033-.04a21.84 21.84 0 0 0-1.216-4.154 8.908 8.908 0 0 0-.905-1.701 4.321 4.321 0 0 0-.637-.709ZM5.282 6.02A14.453 14.453 0 0 0 3.336 8.73c-.03.057-.014.085.05.085h5.932c.035 0 .055-.017.06-.051a17.65 17.65 0 0 1 2.262-6.492c.03-.052.016-.07-.041-.054a13.189 13.189 0 0 0-4.55 2.196 12.963 12.963 0 0 0-1.767 1.604Zm15.975 1.458a234.28 234.28 0 0 1 2.397-2.398c.03-.03.029-.058-.003-.085-1.553-1.332-3.255-2.242-5.104-2.73a.212.212 0 0 1-.073-.035c-.036-.026-.074-.026-.115-.001-.011.007-.013.017-.006.029 1.095 1.862 1.808 3.821 2.14 5.877.012.071.043.082.094.033.23-.24.453-.47.67-.69Zm3.656-1.154c-.812.818-1.622 1.624-2.428 2.419-.051.05-.04.074.03.074h4.117c.04 0 .051-.017.032-.053a13.566 13.566 0 0 0-1.686-2.438c-.021-.024-.043-.024-.065-.002ZM9.088 10.59a535.647 535.647 0 0 0-6.474-.015.101.101 0 0 0-.102.073 12.797 12.797 0 0 0-.74 3.94c-.051 1.688.201 3.28.755 4.776.01.026.028.039.056.039 2.114.006 4.274.008 6.483.005.03 0 .043-.015.04-.046a32.605 32.605 0 0 1-.283-4.34c0-1.531.095-3.002.283-4.41.002-.015-.004-.022-.018-.022Zm3.72 5.34a847.925 847.925 0 0 0 5.285-5.268c.058-.058.046-.087-.036-.087H10.93c-.026 0-.041.013-.045.039a35.288 35.288 0 0 0-.283 4.884c.008.789.05 1.616.127 2.482.002.014.008.016.018.006a53.584 53.584 0 0 0 2.06-2.057Zm14.6-5.34a529.745 529.745 0 0 0-6.436-.015c-.058 0-.084.03-.076.087a34.19 34.19 0 0 1 .232 6.057 35.199 35.199 0 0 1-.232 2.642c-.003.031.01.047.043.047h6.468a.06.06 0 0 0 .062-.044c.5-1.418.752-2.856.757-4.316a13.022 13.022 0 0 0-.749-4.408c-.012-.033-.035-.05-.07-.05Zm-15.522 8.786c-.018.018-.014.027.011.027 2.384.006 4.771.008 7.16.005.038 0 .059-.018.063-.055.194-1.432.29-2.875.292-4.33a33.92 33.92 0 0 0-.13-2.976c-.004-.064-.029-.073-.074-.027-2.4 2.401-4.84 4.853-7.322 7.356Zm-5.932 3.409c.498-.488 1.017-1.005 1.556-1.55.041-.042.032-.063-.027-.064a341.05 341.05 0 0 0-4.121 0c-.033 0-.041.015-.026.044a11.948 11.948 0 0 0 1.695 2.445c.019.02.038.02.057.001.278-.291.567-.583.866-.876Zm8.22 5.172c.293.197.619.286.977.266a.577.577 0 0 0 .082-.01c.449-.1.857-.378 1.226-.836.357-.435.657-.921.9-1.458a20.07 20.07 0 0 0 1.464-4.714c.005-.026-.005-.039-.031-.039h-7.585c-.02 0-.028.01-.025.03A18.3 18.3 0 0 0 12.8 26.25c.143.278.305.543.486.796.274.385.57.688.89.91Zm6.457-6.748c-.367 2.38-1.12 4.544-2.26 6.493-.037.06-.02.082.048.063a12.849 12.849 0 0 0 5.434-2.921 12.895 12.895 0 0 0 2.82-3.62c.02-.035.009-.053-.031-.053a715.3 715.3 0 0 0-5.969 0c-.025 0-.039.013-.042.038ZM6.34 24.983a13.083 13.083 0 0 0 5.254 2.785c.071.019.088-.003.05-.065a16.3 16.3 0 0 1-2.14-5.875c-.01-.052-.032-.059-.069-.022a9107.357 9107.357 0 0 0-3.098 3.099c-.027.027-.026.053.003.078Z" fill="#FB6C6C"></path></svg>
                        <p className={`${inter.className} min-w-[100px] text-[10px] ml-6 text-[700] text-[#002269] absolute mt-32`}>Не подключено</p>
                        {/* <button className={`${inter.className} min-w-[100px] text-[10px] text-[700] text-[#FB6C6C] absolute mt-44  px-1 py-[6px] bg-[#FFEAEA]`}>Без регистрации</button> */}
                    </div>

                    <div className='lg:w-full w-[65%]'>
                        <div className='bg-white h-[70px] flex gap-5 items-center justify-center w-full p-5 rounded-lg mb-3'>
                            <svg _ngcontent-ng-c1210880631="" className='w-6 h-6' viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-ng-c1210880631="" d="M6 8.75h.005M4.1 11h3.8c.56 0 .84 0 1.054-.109a1 1 0 0 0 .437-.437C9.5 10.24 9.5 9.96 9.5 9.4V2.6c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437C8.74 1 8.46 1 7.9 1H4.1c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C2.5 1.76 2.5 2.04 2.5 2.6v6.8c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437C3.26 11 3.54 11 4.1 11Zm2.15-2.25a.25.25 0 1 1-.5 0 .25.25 0 0 1 .5 0Z" stroke="#FEC065" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                             <div className='flex flex-col '>
                             <span className={`${inter.className} text-sm font-semibold text-[#002269] `}>123425 </span>
                             <span className={`${inter.className} text-[12px] text-[900] text-[#8091B5]`}>Модель: Нет данных  </span>
                             </div>
                             <svg _ngcontent-ng-c1210880631="" className='w-6 h-6' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="styles_chevron__c1fR2"><path _ngcontent-ng-c1210880631="" d="m9 18 6-6-6-6" stroke="#8091B5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                        </div>
                        <div className='bg-white h-[170px] gap-5 justify-center w-full p-5 rounded-lg'>
                            <ul className='list-inside list-disc text-sm mb-4'>
                                <li>
                                    <span className={`${inter.className} font-semibold text-[10px] text-[#8091B5]`}>Пинг: </span>
                                    <span className={`${inter.className} font-semibold text-[10px] text-[#0052FF]`}>Нет данных</span>
                                </li>
                                <li>
                                    <span className={`${inter.className} text-[10px] font-semibold text-[#8091B5]`}>Тип подключения: </span>
                                    <span className={`${inter.className} text-[10px] font-semibold text-[#0052FF]`}>Нет данных</span>
                                </li>
                                <li>
                                    <span className={`${inter.className} text-[10px] font-semibold text-[#8091B5]`}>Версия:</span>
                                    <span className={`${inter.className} text-[10px] font-semibold text-[#0052FF]`}>Нет данных</span>
                                </li>
                            </ul>

                            <p className='flex items-center gap-2 mb-2'>
                              <span className='p-1 rounded-full bg-[#ffeaea] inline-block'><svg _ngcontent-ng-c1210880631="" viewBox="0 0 24 24" fill="none" className="w-3 h-3" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-ng-c1210880631="" d="M18 6 6 18M6 6l12 12" stroke="#fb6c6c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg></span>
                              <span className={`${inter.className} text-[12px] font-semibold text-[#002269]`}>Выданы не все доступы</span>
                            </p>
                            <p className='flex items-center gap-2'>
                              <span className='p-1 rounded-full bg-[#ffeaea] inline-block'><svg _ngcontent-ng-c1210880631="" viewBox="0 0 24 24" fill="none" className="w-3 h-3" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-ng-c1210880631="" d="M18 6 6 18M6 6l12 12" stroke="#fb6c6c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg></span>
                              <span className={`${inter.className} text-[12px] font-semibold text-[#002269]`}>Устройство offline</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
      </div>

      
     <p className={`${inter.className} text-[18px] text-[#8091B5] mb-4`} >Управление </p>
     <div className='w-full gap-6 grid lg:grid-cols-3 grid-cols-2  justify-between'>
            <div className='flex justify-between h-[88px] p-5 w-full rounded-[16px] bg-[#F9FAFB] mb-5 border border-[#eef2f9]'>
                <div className='flex flex-col'>
                    <p className={`${inter.className} text-sm font-bold text-[#8091B5]`}>Турбо-режим</p>
                    <p className='flex items-center gap-2 mt-1'>
                        <span className={`${inter.className} text-[18px]  text-[#002269]`}>Выкл</span>
                        <input type="checkbox" name="" id="" />
                    </p>
                </div>
                <div className='p-3 rounded-full bg-[#f3f4f8]'>
                    <svg _ngcontent-ng-c1210880631="" className='w-5 h-5' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-ng-c1210880631="" d="m12 15-3-3m3 3a22.342 22.342 0 0 0 4-2m-4 2v5s3.03-.55 4-2c1.08-1.62 0-5 0-5m-7-1a22.001 22.001 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11m-7-1H4s.55-3.03 2-4c1.62-1.08 5 0 5 0m-6.5 8.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09Z" stroke="#0052FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                </div>
            </div>
            <div className='flex items-center justify-between h-[88px] p-5 w-full rounded-[16px] bg-[#F9FAFB] mb-5 border border-[#eef2f9]'>
            <div className='flex flex-col'>
                    <p className={`${inter.className} text-sm font-bold text-[#8091B5]`}>Турбо-режим</p>
                    <p className='flex items-center gap-2 mt-1'>
                        <span className={`${inter.className} text-[18px]  text-[#002269]`}>Прием на карты</span>
                        <input type="checkbox" name="" id="" />
                    </p>
                </div>
                <div className='p-3 rounded-full bg-[#f3f4f8]'>
                     <svg _ngcontent-ng-c1210880631="" className='w-5 h-5' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-ng-c1210880631="" d="m16 18 3-3m0 0 3 3m-3-3v6m3-11H2m20 2V8.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C20.48 5 19.92 5 18.8 5H5.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C2 6.52 2 7.08 2 8.2v7.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C3.52 19 4.08 19 5.2 19H12" stroke="#0052FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                </div>
            </div>
            <div className='flex items-center justify-between h-[88px] p-5 w-full rounded-[16px] bg-[#F9FAFB] mb-5 border border-[#eef2f9]'>
            <div className='flex flex-col'>
                    <p className={`${inter.className} text-sm font-bold text-[#8091B5]`}>Прием по СБП</p>
                    <p className='flex items-center gap-2 mt-1'>
                        <span className={`${inter.className} text-[18px]  text-[#002269]`}>Выкл</span>
                        <input type="checkbox" name="" id="" />
                    </p>
                </div>
                <div className='p-3 rounded-full bg-[#f3f4f8]'>
                    <svg _ngcontent-ng-c1210880631="" className='w-5 h-5' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-ng-c1210880631="" d="m2.666 5.78 2.79 4.792v2.923L2.67 18.278 2.666 5.78ZM13.379 8.828l2.614-1.54 5.35-.005-7.964 4.69V8.827ZM13.364 5.75l.015 6.345-2.797-1.651V.959l2.782 4.791Z" fill="#8091B5"></path><path _ngcontent-ng-c1210880631="" d="m21.343 7.282-5.35.005-2.63-1.537L10.583.96l10.761 6.323ZM13.379 18.304v-3.079l-2.797-1.62.002 9.495 2.795-4.796Z" fill="#8091B5"></path><path _ngcontent-ng-c1210880631="" d="M15.987 16.779 5.456 10.572l-2.79-4.793 18.666 10.994-5.345.006ZM10.584 23.102l2.795-4.796 2.607-1.526 5.346-.007-10.748 6.329ZM2.668 18.276l7.936-4.672-2.668-1.573-2.481 1.462-2.787 4.783Z" fill="#8091B5"></path></svg>
                </div>
            </div>
     </div>

     <p className={`${inter.className} text-[18px] text-[#8091B5] mb-4 mt-8`} >Управление </p>
     <div className='grid grid-cols-5 w-[80%] gap-2 overflow-x-scroll mb-36 mt-3'>
     <button className='max-w-[146px] rounded-[8px] py-[10px] px-4 bg-[#f8f9fc] hover:bg-[#ebeef8] flex gap-2 items-center justify-center transition duration-300'>
         <svg _ngcontent-ng-c1210880631="" className='w-4 h-4' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-ng-c1210880631="" d="m16 18 3-3m0 0 3 3m-3-3v6m3-11H2m20 2V8.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C20.48 5 19.92 5 18.8 5H5.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C2 6.52 2 7.08 2 8.2v7.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C3.52 19 4.08 19 5.2 19H12" stroke="#0052FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
          <p>Реквизиты</p>
        </button>
        <button className='max-w-[146px] rounded-[8px] py-[10px] px-4 bg-[#f8f9fc] hover:bg-[#ebeef8] flex gap-2 items-center justify-center transition duration-300'>
          <svg _ngcontent-ng-c2661008953="" className='w-4 h-4' viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-ng-c2661008953="" d="M15.34 9.67a6.375 6.375 0 0 1-11.861 2.518l-.188-.325M2.66 8.33A6.375 6.375 0 0 1 14.52 5.812l.187.325M2.62 13.55l.549-2.049 2.049.55m7.564-6.1 2.049.55.549-2.05M9 5.625V9l1.875 1.125" stroke="#0052FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
          <p>Сделки</p>
        </button>
        <button className='max-w-[146px] rounded-[8px] py-[10px] px-4 bg-[#f8f9fc] hover:bg-[#ebeef8] flex gap-2 items-center justify-center transition duration-300'>
         <svg _ngcontent-ng-c2661008953="" className='w-4 h-4' viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-ng-c2661008953="" d="m7.125 8.625 1.5 1.5L12 6.75M9.375 15a6.375 6.375 0 1 0-6.043-4.338c.081.241.122.362.13.454a.674.674 0 0 1-.022.244c-.022.09-.073.184-.174.37l-1.227 2.271c-.175.324-.262.486-.243.611a.375.375 0 0 0 .176.262c.108.066.29.047.657.01l3.84-.398c.117-.012.175-.018.228-.016a.666.666 0 0 1 .14.019c.052.012.117.037.247.087a6.36 6.36 0 0 0 2.29.424Z" stroke="#0052FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
          <p>Сообщения</p>
        </button>
        <button className='max-w-[146px] rounded-[8px] py-[10px] px-4 bg-[#f8f9fc] hover:bg-[#ebeef8] flex gap-2 items-center justify-center transition duration-300'>
          <svg _ngcontent-ng-c2661008953="" className='w-4 h-4' viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><g _ngcontent-ng-c2661008953="" clip-path="url(#alert-circle_svg__a)"><path _ngcontent-ng-c2661008953="" d="M9 6v3m0 3h.008M16.5 9a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Z" stroke="#0052FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></g><defs _ngcontent-ng-c2661008953=""><clipPath _ngcontent-ng-c2661008953="" id="alert-circle_svg__a"><path _ngcontent-ng-c2661008953="" fill="#fff" d="M0 0h18v18H0z"></path></clipPath></defs></svg>
          <p>Споры</p>
        </button>
        <button className='max-w-[146px] rounded-[8px] py-[10px] px-4 bg-[#f8f9fc] hover:bg-[#ebeef8] flex gap-2 items-center justify-center transition duration-300'>
            <svg _ngcontent-ng-c1210880631="" className='w-4 h-4' viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><g _ngcontent-ng-c1210880631="" clip-path="url(#chart-breakout-circle_svg__a)"><path _ngcontent-ng-c1210880631="" d="M11.625 2.625V1.5m2.954 1.92.796-.795m.008 3.75h1.125m-.045 3.375A7.501 7.501 0 1 1 8.25 1.537M9 6h3v3m-.285-3a9.738 9.738 0 0 1-7.965 4.125 9.782 9.782 0 0 1-2.188-.246" stroke="#0052FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></g><defs _ngcontent-ng-c1210880631=""><clipPath _ngcontent-ng-c1210880631="" id="chart-breakout-circle_svg__a"><path _ngcontent-ng-c1210880631="" fill="#fff" d="M0 0h18v18H0z"></path></clipPath></defs></svg>
          <p>Статистика</p>
        </button>
      </div>
    </div>
  )
}

export default BankProfile
