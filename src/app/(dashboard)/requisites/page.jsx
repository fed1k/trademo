import { Inter } from 'next/font/google';
export const inter = Inter({
    weight: ['400'],
    subsets: ['latin'],
  });
const RequisitesPage = () => {
    
    return (
        <div>
            <p className={`${inter.className} text-[24px] md:text-[32px] text-[#002269] leading-6 my-[30px]`}>Реквизиты профилей</p>
            <div className="flex justify-center border rounded-2xl border-[#eef2f9] items-center h-32 bg-[#fbfcfe]">
               <p className={`text-[18px] font-medium text-[#8091b5] ${inter.className} leading-5 `}>Профили не найдены</p>
            </div>
        </div>
    )
}

export default RequisitesPage