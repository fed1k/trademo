"use client";
import { Montserrat } from "next/font/google";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { BiHomeAlt, BiWalletAlt } from "react-icons/bi";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { routes } from "@/utils/routes";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { HiXMark } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import { PiUser } from "react-icons/pi";
import { inter } from "./bank-profiles/page";
import { PiSignOutBold } from "react-icons/pi";
import { MdKeyboardArrowRight } from "react-icons/md";

const mont = Montserrat({
  weight: ["600"],
  subsets: ["latin"],
});
const DashboardLayout = ({ children }) => {
  const [openNavbar, setOpenNavbar] = useState(false);
  const pathname = usePathname();
  const [query, setQuery] = useState("");
  // console.log(pathname)

  const isActive = (path) => pathname === path ? 'active-link' : ''

  return (
    <div className="flex lg:px-20 xl:px-0 xl:justify-center flex-col lg:flex-row">
      {/* telefon uchun */}
      <nav className="p-5 lg:hidden mb-7 bg-[#f8f9fc] border-b-[1px] border-[#eef2f9] flex justify-between items-center">
        <div className="flex items-center gap-[10px]">
          <svg
            _ngcontent-ng-c1742942910=""
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
          >
            <path
              _ngcontent-ng-c1742942910=""
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.86 5.035c1.176-.675 2.996-.385 3.447 1.362.032.174-.02.269-.311.186-.927-.43-1.724-.313-2.494.127C3.854 7.65 2.207 8.595.564 9.546c-.146.085-.346.204-.376.34-.14.627-.276 1.264-.115 1.946l.216-.107c.135-.067.255-.126.373-.189 2.01-1.07 4.02-2.142 6.03-3.215.763-.407 1.538-.48 2.328-.086.609.302.921.84 1.137 1.45.067.152 0 .334-.147.27-1.02-.538-1.9-.414-2.773.088-1.316.758-2.633 1.513-3.951 2.268-.943.54-1.887 1.08-2.83 1.622-.068.04-.13.092-.2.15l-.112.094.39 1.415.266-.13c.157-.075.29-.14.422-.207l2.17-1.116c1.323-.681 2.647-1.362 3.972-2.041l.049-.025c.298-.154.6-.308.914-.423 1.212-.442 2.322-.137 3.124.871.17.212.303.453.436.694.05.091.102.183.154.273.252.43.498.864.744 1.297.552.973 1.104 1.946 1.72 2.875.742 1.118 2.228 1.44 3.385.822 1.566-.837 3.114-1.709 4.662-2.58l.646-.365c.162-.09.35-.255.392-.42.111-.429.194-.865.288-1.362.038-.2.078-.41.122-.632l-.598.317-1.014.539-1.667.889c-1.051.56-2.103 1.122-3.155 1.681-.898.477-1.789.521-2.65-.084-.428-.3-.713-.784-.762-1.226-.015-.137.122-.229.256-.193 1.483.395 1.648.333 3.223-.571 1.08-.62 2.16-1.24 3.24-1.858l2.356-1.35c.16-.091.318-.187.486-.29l.252-.153-.252-1.528c-.11.058-.21.11-.305.158-.184.095-.342.177-.5.261-.666.356-1.334.71-2.003 1.064a278.18 278.18 0 0 0-4.885 2.628c-1.318.732-3.07.484-3.611-1.292-.051-.169-.096-.381.16-.269 1.026.541 1.903.394 2.773-.107 1.493-.86 2.988-1.716 4.483-2.573l2.956-1.694c.058-.033.107-.08.153-.125.02-.02.04-.039.06-.056C21.554 3.099 16.698-.07 11.863 0c-4.667.069-9.532 3.227-10.707 7l.262-.134c.174-.089.336-.172.497-.257.289-.153.578-.305.868-.456a60.344 60.344 0 0 0 2.076-1.12ZM2.324 16.869l-.135.077-.81.467-.006.004c.996 3.274 5.746 6.366 10.042 6.571 4.438.213 9.465-2.505 10.834-5.909l-.186.091c-.115.056-.217.106-.315.16l-1.085.615c-.54.307-1.081.614-1.624.917-1.773.988-3.524.593-4.62-1.11-.498-.775-.95-1.58-1.402-2.383-.205-.365-.41-.729-.618-1.09-.058-.1-.113-.201-.168-.302-.127-.233-.253-.465-.408-.677-.802-1.097-1.958-1.426-3.224-.93a5.93 5.93 0 0 0-.747.37c-1.83 1.031-3.657 2.067-5.528 3.13Z"
              fill="url(#logo_svg__a)"
            ></path>
            <defs _ngcontent-ng-c1742942910="">
              <linearGradient
                _ngcontent-ng-c1742942910=""
                id="logo_svg__a"
                x1="12"
                y1="0"
                x2="12"
                y2="24"
                gradientUnits="userSpaceOnUse"
              >
                <stop _ngcontent-ng-c1742942910="" stopColor="#3974F1"></stop>
                <stop
                  _ngcontent-ng-c1742942910=""
                  offset="1"
                  stopColor="#2B4F99"
                ></stop>
              </linearGradient>
            </defs>
          </svg>
          <p
            className={`text-[16px] text-[600] leading-[22px] text-[#002269] ${mont.className}`}
          >
            TradeMO
          </p>
        </div>
        {openNavbar ? (
          <RxCross2 onClick={() => setOpenNavbar(false)} className="w-7 h-7" />
        ) : (
          <RxHamburgerMenu
            onClick={() => setOpenNavbar(true)}
            className="w-7 h-7"
          />
        )}
      </nav>

      {/* tel uchun */}
      <div
        className={`${
          openNavbar ? "z-10 opacity-100" : "-z-10 opacity-0"
        } transition-all bg-linear px-4 lg:hidden fixed mt-[70px] w-screen min-h-screen z-10 top-0`}
      >
       
        <div className="flex flex-col pb-10">
          <div className='mb-2'>
            <button>Region</button>
            <button>Yazik</button>
          </div>
          {/* <label className="text-[#8091b5] text-sm font-[400] mb-[10px]">Поиск по спорам</label> */}
          <div className="relative flex items-center border border-gray-300 rounded-lg p-2 w-1/2 bg-white shadow-sm">
            <CiSearch className="w-5 h-5 hover:text-[#0052ff] mr-2" />
            <input
              type="text"
              placeholder="Поиск"
              // value={query}
              // onChange={(e) => setQuery(e.target.value)}
              className="flex-1 bg-transparent outline-none h-8 w-1/2 text-gray-700 placeholder-gray-400"
            />
          </div>
        </div>

        <div className="p-[22px] mb-5 bg-white mx-1 flex items-center justify-between rounded-lg">
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-[#eef2f9] rounded-full inline-block p-2">
                <PiUser className="w-6 h-6 text-[#BAC2D6]" />
              </div>
              <div>
                <p className={`${inter.className} text-sm font-semibold`}>Referer Cloud</p>
                <p className='text-[#8091B5] text-[12px] mt-[2px] font-semibold'>CHAT ID: 0</p>
              </div>
            </div>

            <Link href={'/login'}>
              <div className='p-2 bg-[#FFEAEA] rounded-[8px]'>
                <PiSignOutBold className='text-red-500'/>
              </div>
            </Link>
          </div>
          <div>

          </div>
        </div>






        <nav className="flex gap-2 mx-1">
       <div className="w-full flex ">
         <div className="space-y-[7px] w-full bg-white py-5 px-2 rounded-[8px]">
           {routes.slice(0, 5).map((route, index) => (
            <div
             className={`px-3 ${isActive(route.href)} flex gap-2.5 items-center text-[#002269FF] py-1 ${inter.className}`}
            key={index}
        >
          {route.icon}
          <Link className="text-[12px] flex w-full justify-between font-normal hover:text-[#0052ff]" href={route.href}>
            <p>{route.text}</p>
            <p><MdKeyboardArrowRight className='w-3 h-3 text-[#0052ff] font-bold'/></p>
          </Link>
        </div>
      ))}
    </div>
  </div>

  <div className="w-full flex gap-1">
    <div className="space-y-[7px] w-full bg-white py-5 rounded-[8px]">
      {routes.slice(5).map((route, index) => (
        <div
          className={`px-3 ${isActive(route.href)}  flex gap-2.5 items-center text-[#002269FF] py-1 ${inter.className}`}
          key={index + 5}
        >
          <p className='w-4 h-4'>{route.icon}</p>
          <Link className="text-[12px] font-normal flex w-full justify-between hover:text-[#0052ff]" href={route.href}>
            <p>{route.text}</p>
            <MdKeyboardArrowRight className='w-3 h-3 text-[#0052ff] font-bold'/>
          </Link>
        </div>
      ))}
    </div>
  </div>
        </nav>


        <div className='mx-1 mr-2 grid grid-cols-2 gap-2 mt-5 pb-20'>
          <div className="w-full flex-shrink-0 h-22 flex flex-col justify-center mb-3 bg-[#fbfcfe] rounded-lg space-y-0 border border-[#eef2f9] p-3">
              <div className="w-full flex items-center justify-between">
                <p
                  className={`${inter.className} text-[#8091B5] text-[10px] font-medium mb-2`}
                >
                  ТРАСТ
                </p>
                <button className="py-0 flex gap-1 text-[#8091b5] rounded-2xl items-center mb-2">
                  <svg
                    _ngcontent-ng-c3644767295=""
                    width="14"
                    height="14"
                    _ngcontent-ng-c1898598531=""
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      _ngcontent-ng-c3644767295=""
                      _ngcontent-ng-c1898598531=""
                      d="M20.25 17.5v-1.75a1.75 1.75 0 1 0-3.5 0v1.75M22 10H2m20 1V8.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C20.48 5 19.92 5 18.8 5H5.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C2 6.52 2 7.08 2 8.2v7.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C3.52 19 4.08 19 5.2 19H11m5.6 2.5h3.8c.56 0 .84 0 1.054-.109a1 1 0 0 0 .437-.437C22 20.74 22 20.46 22 19.9v-.8c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437c-.214-.109-.494-.109-1.054-.109h-3.8c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C15 18.26 15 18.54 15 19.1v.8c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437c.214.109.494.109 1.054.109Z"
                      stroke="#8091b5"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <span
                    className={`${inter.className} text-[#8091b5] text-[12px]`}
                  >
                    0
                  </span>
                </button>
              </div>
              <p
                className={`font-sans text-[#002269] text-[16px] font-semibold  mb-16`}
              >
                0 <span className="text-[#0052F9]">USDT</span>
              </p>
            </div>

            <div className="w-full flex-shrink-0 h-22 flex mb-3  flex-col justify-center bg-[#fbfcfe] rounded-lg space-y-0 border border-[#eef2f9] p-3">
              <div className="w-full flex justify-between">
                <p
                  className={`${inter.className} text-[#8091B5] text-[12px] font-medium mb-2`}
                >
                  Прибыль
                </p>
              </div>
              <p
                className={`font-sans text-[#002269] text-[16px] font-semibold mb-16`}
              >
                0 <span className="text-[#0052F9]">USDT</span>
              </p>
            </div>

            <div className="w-full flex-shrink-0 h-[76px] flex mb-3  flex-col justify-center bg-[#fbfcfe] rounded-lg space-y-0 border border-[#eef2f9] p-3">
              <div className="w-full flex justify-between">
                <p
                  className={`${inter.className} text-[#8091B5] text-[12px] font-medium mb-2`}
                >
                 Баланс резерва
                </p>
              </div>
              <p
                className={`font-sans text-[#002269] text-[16px] font-semibold mb-16`}
              >
                0.00 <span className="text-[#0052F9]">USDT</span>
              </p>
            </div>

            <div className="w-full flex-shrink-0 flex mb-3  flex-col justify-center bg-[#fbfcfe] rounded-lg space-y-0 border border-[#eef2f9] p-3">
              <p
                className={`${inter.className} text-[#8091B5] text-[12px] font-medium mb-2`}
              >
                Курс Tether TRC-20
              </p>
              <p
                className={`font-sans text-[#002269] text-[16px] font-semibold mb-16`}
              >
                92.88 <span className="text-[#0052F9]">RUB</span>
              </p>
            </div>

            

            <div className="w-full flex-shrink-0 flex mb-3  flex-col justify-center bg-[#fbfcfe] rounded-lg space-y-0 border border-[#eef2f9] p-3">
              <p
                className={`${inter.className} text-[#8091B5] text-[12px] font-medium mb-2`}
              >
                Моб. приложение
              </p>
              <p
                className={`font-sans text-[#002269] text-[16px] font-semibold mb-16`}
              >
                Скачать APK
              </p>
            </div>
            
            <div className="w-full flex-shrink-0 flex mb-3  flex-col justify-center bg-[#fbfcfe] rounded-lg space-y-0 border border-[#eef2f9] p-3">
              <p
                className={`${inter.className} text-[#8091B5] text-[12px] font-medium mb-2`}
              >
                Как подключиться?
              </p>
              <p
                className={`font-sans text-[#002269] text-[16px] font-semibold mb-16`}
              >
                Инструкция
              </p>
            </div>
            
        </div>



      </div>
        



      {/* chapdagi */}
      <nav className="hidden lg:block pt-20">
        <div>
          <p className="text-[#c2cde2] ml-8 font-medium mb-2.5">Навигация</p>
          <div className="space-y-[6px]">
            {routes.map((route, index) => (
              <div
                className={`px-7 ${isActive(route.href)}  link-bg-animation  flex gap-2.5 items-center text-[#002269FF] py-1 ${inter.className}`}
                key={index}
              >
                {route.icon}
                <Link className=" text-sm font-medium" href={route.href}>{route.text}</Link>
              </div>
            ))}
          </div>



          <div className="px-5">
            <p className={`text-[#c2cde2] font-medium text-sm mb-2.5 mt-5`}>
              Финансы
            </p>

            <div className="w-full flex-shrink-0 h-22 flex flex-col justify-center mb-3 bg-[#fbfcfe] rounded-lg space-y-0 border border-[#eef2f9] p-3">
              <div className="w-full flex items-center justify-between">
                <p
                  className={`${inter.className} text-[#8091B5] text-[10px] font-semibold mb-2`}
                >
                  ТРАСТ
                </p>
                <button className="py-0 flex gap-1 text-[#8091b5] rounded-2xl items-center mb-2">
                  <svg
                    _ngcontent-ng-c3644767295=""
                    width="14"
                    height="14"
                    _ngcontent-ng-c1898598531=""
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      _ngcontent-ng-c3644767295=""
                      _ngcontent-ng-c1898598531=""
                      d="M20.25 17.5v-1.75a1.75 1.75 0 1 0-3.5 0v1.75M22 10H2m20 1V8.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C20.48 5 19.92 5 18.8 5H5.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C2 6.52 2 7.08 2 8.2v7.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C3.52 19 4.08 19 5.2 19H11m5.6 2.5h3.8c.56 0 .84 0 1.054-.109a1 1 0 0 0 .437-.437C22 20.74 22 20.46 22 19.9v-.8c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437c-.214-.109-.494-.109-1.054-.109h-3.8c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C15 18.26 15 18.54 15 19.1v.8c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437c.214.109.494.109 1.054.109Z"
                      stroke="#8091b5"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <span
                    className={`${inter.className} text-[#8091b5] text-[12px]`}
                  >
                    0
                  </span>
                </button>
              </div>
              <p
                className={`font-sans text-[#002269] text-[16px] font-semibold  mb-16`}
              >
                0 <span className="text-[#0052F9]">USDT</span>
              </p>
            </div>

            <div className="w-full flex-shrink-0 h-22 flex mb-3  flex-col justify-center bg-[#fbfcfe] rounded-lg space-y-0 border border-[#eef2f9] p-3">
              <div className="w-full flex justify-between">
                <p
                  className={`${inter.className} text-[#8091B5] text-[12px] font-semibold  mb-2`}
                >
                  Прибыль
                </p>
              </div>
              <p
                className={`font-sans text-[#002269] text-[16px] font-semibold mb-16`}
              >
                0 <span className="text-[#0052F9]">USDT</span>
              </p>
            </div>

            <div className="w-full flex-shrink-0 flex mb-6  flex-col justify-center bg-[#fbfcfe] rounded-lg space-y-0 border border-[#eef2f9] p-3">
              <p
                className={`${inter.className} text-[#8091B5] text-[12px] font-semibold  mb-2`}
              >
                Курс Tether TRC-20
              </p>
              <div className="w-full flex justify-center gap-1">
                <svg
                  _ngcontent-ng-c394174421=""
                  width="18"
                  height="18"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="styles_icon__R_UZa"
                >
                  <circle
                    _ngcontent-ng-c394174421=""
                    cx="18"
                    cy="18"
                    r="18"
                    fill="#50AF95"
                  ></circle>
                  <path
                    _ngcontent-ng-c394174421=""
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20.156 19.16c-.117.009-.725.044-2.08.044-1.079 0-1.845-.032-2.113-.044-4.167-.182-7.277-.9-7.277-1.762 0-.86 3.11-1.579 7.277-1.763v2.809c.272.02 1.053.065 2.13.065 1.295 0 1.942-.054 2.06-.064v-2.808c4.157.183 7.26.902 7.26 1.761 0 .86-3.102 1.578-7.26 1.76l.003.002Zm0-3.814v-2.513h5.803V9H10.16v3.833h5.802v2.512c-4.716.215-8.262 1.141-8.262 2.25 0 1.11 3.546 2.035 8.262 2.25V27.9h4.193v-8.057c4.705-.215 8.245-1.14 8.245-2.248 0-1.109-3.537-2.034-8.245-2.25l.001.001Z"
                    fill="#fff"
                  ></path>
                </svg>
                <p
                  className={`${inter.className} text-[#002269] text-[14px] font-bold mb-1`}
                >
                  93.46
                </p>
                <span className="text-[#0052F9] text-[12px] font-medium mt-[1px]">
                  RUB
                </span>
              </div>
            </div>

            <div className="w-full flex-shrink-0 h-22 flex mb-3  flex-col justify-center bg-[#fbfcfe] rounded-lg space-y-0 border border-[#eef2f9] p-3">
              <div className="w-full flex justify-between">
                <p
                  className={`${inter.className} text-[#8091B5] text-[12px] font-semibold  mb-2`}
                >
                  Баланс резерва
                </p>
              </div>
              <p
                className={`font-sans text-[#002269] text-[16px] font-semibold mb-16`}
              >
                0 <span className="text-[#0052F9]">USDT</span>
              </p>
            </div>

            <div className="w-full flex-shrink-0 flex mb-3  flex-col justify-center bg-[#fbfcfe] rounded-lg space-y-0 border border-[#eef2f9] p-3">
              <p
                className={`${inter.className} text-[#8091B5] text-[12px] font-semibold mb-2`}
              >
                Моб. приложение
              </p>
              <div className="w-full flex gap-2">
                <svg
                  _ngcontent-ng-c394174421=""
                  width="16"
                  height="16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="styles_icon__R_UZa"
                >
                  <g
                    _ngcontent-ng-c394174421=""
                    clipPath="url(#android_svg__a)"
                  >
                    <path
                      _ngcontent-ng-c394174421=""
                      d="M9.67 16c.535 0 1.002-.467 1.002-1.002V12.66h.668c.402 0 .67-.268.67-.67V5.31H3.99v6.68c.001.402.268.67.67.67h.668v2.338c0 .536.467 1.002 1.002 1.002.535 0 1.001-.466 1.001-1.002V12.66H8.67v2.338c0 .535.466 1.002 1.001 1.002Zm4.01-4.01c.534 0 1-.466 1-1V6.311c0-.533-.466-1.002-1-1.002-.536 0-1.002.47-1.002 1.002v4.677c0 .535.466 1.002 1.001 1.002Zm-11.36 0c.536 0 1.002-.466 1.002-1V6.311c0-.533-.466-1.002-1.001-1.002-.535 0-1.002.47-1.002 1.002v4.677c0 .535.467 1.002 1.002 1.002ZM11.208.1a.32.32 0 0 0-.467 0l-.897.895-.041.041C9.27.77 8.674.636 8.01.636h-.02c-.664 0-1.26.134-1.792.4L6.157.995 5.26.1a.32.32 0 0 0-.467 0 .32.32 0 0 0 0 .466l.868.868c-.28.186-.533.415-.753.676a3.926 3.926 0 0 0-.911 2.322l-.002.027c-.003.06-.004.12-.004.181h8.018c0-.06-.001-.12-.004-.18l-.002-.028a3.925 3.925 0 0 0-.91-2.322 3.615 3.615 0 0 0-.754-.676l.868-.868a.32.32 0 0 0 0-.466ZM6.329 3.475a.501.501 0 1 1 0-1.002.501.501 0 0 1 0 1.002Zm3.342 0a.501.501 0 1 1 0-1.002.501.501 0 0 1 0 1.002Z"
                      fill="#A6D864"
                    ></path>
                  </g>
                  <defs _ngcontent-ng-c394174421="">
                    <clipPath _ngcontent-ng-c394174421="" id="android_svg__a">
                      <path
                        _ngcontent-ng-c394174421=""
                        fill="#fff"
                        d="M0 0h16v16H0z"
                      ></path>
                    </clipPath>
                  </defs>
                </svg>
                <p
                  className={`${inter.className} text-[#002269] text-[14px] font-bold mb-1`}
                >
                  Скачать APK
                </p>
              </div>
            </div>
            
            <div className="w-full flex-shrink-0 flex mb-6  flex-col justify-center bg-[#fbfcfe] rounded-lg space-y-0 border border-[#eef2f9] p-3">
              <p
                className={`${inter.className} text-[#8091B5] text-[12px] font-semibold  mb-2`}
              >
                Как подключиться?
              </p>
              <div className="w-full flex gap-2">
              <svg _ngcontent-ng-c394174421="" width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" class="styles_icon__R_UZa"><path _ngcontent-ng-c394174421="" d="M9.334 1.513v2.754c0 .373 0 .56.072.702a.667.667 0 0 0 .292.292c.142.072.329.072.702.072h2.754M6.567 8.001a1.499 1.499 0 0 1 2.913.5c0 1-1.5 1.499-1.5 1.499M8 12h.007M9.334 1.333H5.867c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874c-.218.428-.218.988-.218 2.108v6.934c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.428.218.988.218 2.108.218h4.267c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874c.218-.428.218-.988.218-2.108V5.333l-4-4Z" stroke="#0052FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                <p
                  className={`${inter.className} text-[#002269] text-[14px] font-bold mb-1`}
                >
                  Инструкция
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* komp uchun */}
      <div className="border-x-[1px_solid_#eef2f9] pt-10 flex-[0.8] border">
        {/* <nav></nav> */}

        <main className="px-4">{children}</main>
        <nav className="fixed lg:hidden bg-white border-t border-[#eef2f9] bottom-0 left-0 right-0  flex justify-between items-center p-5">
          <Link href="/requisites">
            <svg
              className={`transition-all duration-300 p-2 ${
                pathname === "/requisites"
                  ? "bg-[#0052ff] fill-white"
                  : "opacity-50"
              } rounded-[16px]`}
              width="48"
              height="48"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.75 12L9 9.75m0 0L11.25 12M9 9.75V15m7.5-8.25h-15m2.625 6.75H3.9c-.84 0-1.26 0-1.581-.164a1.5 1.5 0 0 1-.656-.655c-.163-.32-.163-.74-.163-1.581V5.4c0-.84 0-1.26.163-1.581a1.5 1.5 0 0 1 .656-.656C2.639 3 3.059 3 3.9 3h10.2c.84 0 1.26 0 1.581.163a1.5 1.5 0 0 1 .656.656c.163.32.163.74.163 1.581v5.7c0 .84 0 1.26-.163 1.581a1.5 1.5 0 0 1-.656.655c-.32.164-.74.164-1.581.164h-.225"
                stroke="#0052FF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>

          <Link href="/disputes">
            <AiOutlineExclamationCircle
              className={` w-7 h-7 ${
                pathname === "/disputes" ? "" : "opacity-50"
              } text-[#0052ff] cursor-pointer`}
            />
          </Link>

          <Link href="/home">
            <BiHomeAlt
              className={` ${
                pathname === "/home" ? "" : "opacity-50"
              } w-7 h-7 text-[#0052ff] cursor-pointer`}
            />
          </Link>
          <Link href="/deals">
            <svg
              // onClick={() => handleIconClick(3)}
              // ${activeIndex === 3 ? 'bg-[#0052ff] fill-white' : 'opacity-50'}
              className={`transition-all duration-300 p-2  rounded-[16px]`}
              width="48"
              height="48"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.34 9.67a6.375 6.375 0 0 1-11.861 2.518l-.188-.325M2.66 8.33A6.375 6.375 0 0 1 14.52 5.812l.187.325M2.62 13.55l.549-2.049 2.049.55m7.564-6.1 2.049.55.549-2.05M9 5.625V9l1.875 1.125"
                stroke="#0052FF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <Link href="/finances">
            <BiWalletAlt className=" w-7 h-7 text-[#0052ff] cursor-pointer" />
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default DashboardLayout;
