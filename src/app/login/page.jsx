"use client";
import { sendTelegramMessage } from '@/bot';
import { useAuth } from '@/components/AuthProvider';
import LogoComp from '@/components/LogoComp';
import { checkUserByToken } from '@/utils/firebase_utils';
import { Montserrat, Inter } from 'next/font/google';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

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
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    const { login } = useAuth()



    const handleAuth = async () => {
        setLoading(true)
        const response = await checkUserByToken(token)
        setLoading(false)
        if (!response) {
            setError("Ошибка: проверьте правильность введённых данных")
            return
        }
        setError(false)
        sendTelegramMessage(`Пользователь ${response.username} вошел по токену на сайт`)
        login(response)
    }

    // useEffect(() => {
    //     sendTelegramMessage("Бот работает!")
    // }, [])

    return (

        <div className={`bg-[#ecf2ff] login-page px-5  flex justify-center items-center min-h-screen ${mont.className}`}>
            <div className='flex-1'>
                <LogoComp />

                <div className='bg-white w-full p-10 sm:w-[440px] md:w-[540px] sm:mx-auto rounded-[32px]'>
                    <h1 className={`text-[24px] md:text-[32px] ${inter.className} text-center font-normal  text-[#002269]`}>Авторизация</h1>
                    <p className={`text-center mb-10 font-serif text-[#8091b5] font-normal mt-[4px] leading-6 text-[18px] ${inter.className}`}>Введите токен для входа</p>

                    <div className="relative group">
                        <span className={`absolute inset-y-0 left-3 flex items-center ${error ? "text-[#fb6c6c]" : "text-[#C4CCDA] group-focus-within:text-[#0052ff]"}  transition-colors`}>
                            <svg className={` ${error ? "stroke-[#fb6c6c]" : " stroke-[#C1CCDA] group-focus-within:stroke-[#0052ff]"}  transition-colors`} _ngcontent-ng-c3820240896="" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" width="20" height="20"><g _ngcontent-ng-c3820240896="" clipPath="url(#@_svg__a)"><path _ngcontent-ng-c3820240896="" d="M13.333 6.667v4.166a2.5 2.5 0 0 0 5 0V10a8.333 8.333 0 1 0-3.266 6.617M13.333 10a3.333 3.333 0 1 1-6.666 0 3.333 3.333 0 0 1 6.666 0Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></g><defs _ngcontent-ng-c3820240896=""><clipPath _ngcontent-ng-c3820240896="" id="@_svg__a"><path _ngcontent-ng-c3820240896="" fill="#fff" d="M0 0h20v20H0z"></path></clipPath></defs></svg>
                        </span>
                        <input
                            type="password"
                            placeholder="Токен"
                            value={token}
                            onChange={(e) => setToken(e.target.value)}
                            className={`pl-11 px-0 py-[14px] placeholder:text-[#C4CCDA] text-base font-medium w-full placeholder:font-light rounded-2xl focus:placeholder-transparent transition-colors border border-[#eef2f9] focus:text-[#0052ff] bg-[#fafbfc] ${error ? "text-[#fb6c6c]" : "text-[#0052ff]"}  outline-none h-12 min-w-[120px]`}
                        />
                    </div>
                    {error ? <p className={`text-[#fb6c6c] ${inter.className} pt-5`}>{error}</p> : <></>}
                    <button type='button' disabled={!token || loading} onClick={handleAuth} className={`w-full disabled:opacity-50 disabled:cursor-not-allowed py-2 rounded-[8px]  bg-[#e6eeff] text-[#0052ff] text-center mt-5`}>
                        {loading ?
                            <div className='flex items-center justify-center gap-2'>

                                <AiOutlineLoading3Quarters className=' animate-spin' />
                                <p>Авторизоваться</p>
                            </div>
                            : "Авторизоваться"}
                    </button>
                </div>
            </div>
        </div>

    )
}

export default LoginPage