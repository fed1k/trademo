"use client";
import { useAuth } from '@/components/AuthProvider';
import { Montserrat, Inter } from 'next/font/google';
import Head from 'next/head';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const mont = Montserrat({
    weight: ['600'],
    subsets: ['latin'],
});
const inter = Inter({
    weight: ['400'],
    subsets: ['latin'],
});

const LoginPage = () => {
    const router = useRouter()
    const [token, setToken] = useState("")
    const {login} = useAuth

    const handleAuth = () => {
        login(token)
    }

    return (

        <div className={`bg-[#ecf2ff] login-page px-5  flex justify-center items-center min-h-screen ${mont.className}`}>
            <div className='flex-1'>
                <div className="flex items-center justify-center gap-x-[21px] px-5 mb-10">
                    <svg _ngcontent-ng-c1742942910="" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="36"><path _ngcontent-ng-c1742942910="" fillRule="evenodd" clipRule="evenodd" d="M4.86 5.035c1.176-.675 2.996-.385 3.447 1.362.032.174-.02.269-.311.186-.927-.43-1.724-.313-2.494.127C3.854 7.65 2.207 8.595.564 9.546c-.146.085-.346.204-.376.34-.14.627-.276 1.264-.115 1.946l.216-.107c.135-.067.255-.126.373-.189 2.01-1.07 4.02-2.142 6.03-3.215.763-.407 1.538-.48 2.328-.086.609.302.921.84 1.137 1.45.067.152 0 .334-.147.27-1.02-.538-1.9-.414-2.773.088-1.316.758-2.633 1.513-3.951 2.268-.943.54-1.887 1.08-2.83 1.622-.068.04-.13.092-.2.15l-.112.094.39 1.415.266-.13c.157-.075.29-.14.422-.207l2.17-1.116c1.323-.681 2.647-1.362 3.972-2.041l.049-.025c.298-.154.6-.308.914-.423 1.212-.442 2.322-.137 3.124.871.17.212.303.453.436.694.05.091.102.183.154.273.252.43.498.864.744 1.297.552.973 1.104 1.946 1.72 2.875.742 1.118 2.228 1.44 3.385.822 1.566-.837 3.114-1.709 4.662-2.58l.646-.365c.162-.09.35-.255.392-.42.111-.429.194-.865.288-1.362.038-.2.078-.41.122-.632l-.598.317-1.014.539-1.667.889c-1.051.56-2.103 1.122-3.155 1.681-.898.477-1.789.521-2.65-.084-.428-.3-.713-.784-.762-1.226-.015-.137.122-.229.256-.193 1.483.395 1.648.333 3.223-.571 1.08-.62 2.16-1.24 3.24-1.858l2.356-1.35c.16-.091.318-.187.486-.29l.252-.153-.252-1.528c-.11.058-.21.11-.305.158-.184.095-.342.177-.5.261-.666.356-1.334.71-2.003 1.064a278.18 278.18 0 0 0-4.885 2.628c-1.318.732-3.07.484-3.611-1.292-.051-.169-.096-.381.16-.269 1.026.541 1.903.394 2.773-.107 1.493-.86 2.988-1.716 4.483-2.573l2.956-1.694c.058-.033.107-.08.153-.125.02-.02.04-.039.06-.056C21.554 3.099 16.698-.07 11.863 0c-4.667.069-9.532 3.227-10.707 7l.262-.134c.174-.089.336-.172.497-.257.289-.153.578-.305.868-.456a60.344 60.344 0 0 0 2.076-1.12ZM2.324 16.869l-.135.077-.81.467-.006.004c.996 3.274 5.746 6.366 10.042 6.571 4.438.213 9.465-2.505 10.834-5.909l-.186.091c-.115.056-.217.106-.315.16l-1.085.615c-.54.307-1.081.614-1.624.917-1.773.988-3.524.593-4.62-1.11-.498-.775-.95-1.58-1.402-2.383-.205-.365-.41-.729-.618-1.09-.058-.1-.113-.201-.168-.302-.127-.233-.253-.465-.408-.677-.802-1.097-1.958-1.426-3.224-.93a5.93 5.93 0 0 0-.747.37c-1.83 1.031-3.657 2.067-5.528 3.13Z" fill="url(#logo_svg__a)"></path><defs _ngcontent-ng-c1742942910=""><linearGradient _ngcontent-ng-c1742942910="" id="logo_svg__a" x1="12" y1="0" x2="12" y2="24" gradientUnits="userSpaceOnUse"><stop _ngcontent-ng-c1742942910="" stopColor="#3974F1"></stop><stop _ngcontent-ng-c1742942910="" offset="1" stopColor="#2B4F99"></stop></linearGradient></defs></svg>
                    <p className="text-[22px] text-[600] leading-[22px] text-[#002269] ">TradeMO</p>
                </div>

                <div className='bg-white w-full px-5 py-16 sm:w-[380px] md:w-[540px] rounded-[32px]'>
                    <h1 className='text-[24px] md:text-[32px] text-center mb-[10px] font-normal font-sans text-[#002269]'>Авторизация</h1>
                    <p className={`text-center mb-10 font-serif text-[#8091b5] font-normal leading-6 text-[18px] ${inter.className}`}>Введите токен для входа</p>

                    <div className="relative group">
                        <span className="absolute inset-y-0 left-3 flex items-center text-gray-400 group-focus-within:text-[#0052ff] transition-colors">
                            @
                        </span>
                        <input
                            type="password"
                            placeholder="Токен"
                            value={token}
                            onChange={(e) => setToken(e.target.value)}
                            className="pl-10 px-0 py-[14px] font-medium w-full placeholder:font-light rounded-lg focus:placeholder-transparent transition-colors border border-[#eef2f9] bg-[#fafbfc] text-[#0052ff] outline-none h-12 min-w-[120px]"
                        />
                    </div>
                    <button type='button' onClick={handleAuth} className={`w-full py-2 ${token ? "opacity-100" : "opacity-50"} rounded-[8px]  bg-[#e6eeff] text-[#0052ff] text-center mt-3`}>
                        Авторизоваться
                    </button>
                </div>
            </div>
        </div>

    )
}

export default LoginPage