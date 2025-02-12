import { Inter } from 'next/font/google';
export const inter = Inter({
    weight: ['400'],
    subsets: ['latin'],
  });
const BankProfilesPage = () => {
    return (
        <div>
            <div className='flex justify-between w-full items-center'>
                <p className={`${inter.className} text-[24px] text-[#002269] leading-6 mb-7`}>Профили</p>
                <button className='bg-[#e6eeff] flex items-center gap-[10px] py-[6px] px-[10px] rounded-[6px] mb-5 z-10'>
                     <svg _ngcontent-ng-c1975934526="" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path _ngcontent-ng-c1975934526="" d="M3 20c2.336-2.477 5.507-4 9-4 3.493 0 6.664 1.523 9 4M16.5 7.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z" stroke="#0052ff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                    <span className='text-[#0052ff] leading-2 text-[12px] font-medium'>Добавить профиль
                    </span>
                    </button>
             </div>

             <div className="flex justify-center border rounded-2xl border-[#eef2f9] items-center h-32 bg-[#fbfcfe] mt-5">
            <p className={`text-[18px] text-[#8091b5] font-medium ${inter.className} leading-5 font-serif`}>Профили не найдены</p>
            </div>
        </div>
    )
}

export default BankProfilesPage