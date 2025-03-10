"use client";

import { Inter } from 'next/font/google';
import { useRouter } from 'next/navigation';
export const inter = Inter({
    weight: ['400'],
    subsets: ['latin'],
  });
function HomeDeviceCard({user}) {

  const router = useRouter();

  return (
    <div onClick={() => router.push(`/devices/${user.id}`)} className='w-full py-2.5 mb-3 rounded-[16px] px-5 bg-[#FBFCFE] border-[1px] border-[#eef2f9] flex justify-between items-center hover:shadow-[0_2px_4px_rgba(0,0,0,0.1)] transition-shadow duration-300 cursor-pointer'>
       <div className='w-[60%] flex gap-3 items-center'>
            <svg className='w-6 h-6' _ngcontent-ng-c3062744050="" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-ng-c3062744050="" d="M12 17.5h.01M8.2 22h7.6c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874C19 20.48 19 19.92 19 18.8V5.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C17.48 2 16.92 2 15.8 2H8.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C5 3.52 5 4.08 5 5.2v13.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C6.52 22 7.08 22 8.2 22Zm4.3-4.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" stroke="#fb6c6c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            <div>
                <p className={`${inter.className} text-sm font-semibold text-[#002269]`}>{user.title}</p>
                <p className={`${inter.className} w-48 overflow-hidden text-ellipsis whitespace-nowrap text-[12px] text-[#8091B5] truncate`}>{user.user_token}</p>
            </div>
       </div>
       <div className='w-[65%]  flex justify-between items-center'>
             <button className={`${inter.className}  text-[12px] h-8 min-w-[120px] rounded-[6px] ml-auto text-[#FB6C6C] font-semibold bg-[#FFEAEA]`}>Без регистрации</button>
       </div>
    </div>
  )
}

export default HomeDeviceCard
