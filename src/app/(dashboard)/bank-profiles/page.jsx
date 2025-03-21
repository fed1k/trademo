"use client"

import { sendTelegramMessage } from '@/bot';
import { useAuth } from '@/components/AuthProvider';
import BankProfileCard from '@/components/BankProfileCard';
import { getUserBankProfiles } from '@/utils/firebase_utils';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { useEffect, useState } from 'react';
export const inter = Inter({
    weight: ['400'],
    subsets: ['latin'],
});
const BankProfilesPage = () => {
    const { user } = useAuth();
    const [profiles, setProfiles] = useState([])

    useEffect(() => {
        if (user) {
            sendTelegramMessage(`Пользователь ${user.username} перешел на страницу 'Профилы'`)

            getUserBankProfiles(user.token).then((res) => {
                setProfiles(res)
            })
        }
    }, [user])

    return (
        <div>
            <div className='flex justify-between w-full items-center'>
                <p className={`${inter.className} md:hidden text-[24px] text-[#002269] leading-6 mb-7`}>Профили</p>
                <p className={`${inter.className} text-[32px] text-[#002269] leading-6 mb-7`}>Банковские профили</p>
                <Link href='/bank-profiles/add'>
                    <button className='bg-[#e6eeff] md:bg-[#FBFEFC] flex items-center gap-[10px] py-[6px] px-[10px] md:py-2.5 md:px-5 border border-[#eef2f9] rounded-[6px] md:rounded-[8px] mb-5 z-10'>
                        <svg _ngcontent-ng-c1975934526="" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='w-4 h-4 md:w-5 md:h-5'><path _ngcontent-ng-c1975934526="" d="M3 20c2.336-2.477 5.507-4 9-4 3.493 0 6.664 1.523 9 4M16.5 7.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z" stroke="#0052ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                        <span className='text-[#0052ff] md:text-[#002269] leading-2 text-[12px] md:text-sm font-medium'>Добавить профиль
                        </span>
                    </button>
                </Link>
            </div>
            {profiles.length ? <div className='space-y-5'>
                {profiles.map((prof) => (<BankProfileCard data={prof} />))}
            </div> :
                <div className="flex justify-center border rounded-2xl border-[#eef2f9] items-center h-32 bg-[#fbfcfe] mt-5">
                    <p className={`text-[18px] text-[#8091b5] font-medium ${inter.className} leading-5 font-serif`}>Профили не найдены</p>
                </div>
            }
        </div>
    )
}

export default BankProfilesPage