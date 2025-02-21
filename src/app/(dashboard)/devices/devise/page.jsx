import React from 'react'
import { Inter } from 'next/font/google';
export const inter = Inter({
    weight: ['400'],
    subsets: ['latin'],
  });
function DevicePage() {
  return (
    <div> 
      <div className='flex justify-between w-full items-center'>
                <p className={`${inter.className} text-[24px] md:text-[32px] text-[#002269] leading-6 mb-7`}>Устройства</p>
                <button className='btn bg-[#e6eeff] md:bg-[#FBFCFE] border border-[#eef2f9] flex items-center gap-[10px] py-[6px] md:py-2.5 px-[10px] md:px-5 rounded-[6px] mb-4 z-10'>
                    <svg _ngcontent-ng-c2941981905="" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className='mt-[1px] w-4 h-4 md:w-5 md:h-5'><path _ngcontent-ng-c2941981905="" d="M12.182 4.318a4.5 4.5 0 0 1 0 6.364m-6.364 0a4.5 4.5 0 0 1 0-6.364m-2.121 8.485a7.5 7.5 0 0 1 0-10.606m10.606 0a7.5 7.5 0 0 1 0 10.606M9 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm0 0v6.75" stroke="#0052FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                    <span className='text-[#0052ff] md:text-[#002269] leading-2 text-[12px] font-medium md:text-sm'>Добавить устройство
                    </span>
                    </button>
             </div>
      
    </div>
  )
}

export default DevicePage
