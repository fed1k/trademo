'use client'
import { Inter } from 'next/font/google';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { useState,useEffect } from 'react';
import { options } from '@/utils/routes';
import { addDeviceData, getDevicesByUserToken } from '@/utils/firebase_utils';
import { useAuth } from '@/components/AuthProvider';
export const inter = Inter({
    weight: ['400'],
    subsets: ['latin'],
  });
const AddProfil = () => {
    const { user } = useAuth()
    const [query, setQuery] = useState("");
    const [active,setActive]=useState(false)
    const [users, setUsers] = useState([])
    const [selectedBank, setSelectedBank] = useState(options[0]); 
  const [isOpen, setIsOpen] = useState(false);
  // const addDevice = async () => {
  //   if (query) {
  //     const response = await addDeviceData(user.token, query)
  //     setActive(false)
  //     setNewDeviceToken(response)
  //   }
  // }

  useEffect(() => {
    if (user) {
      getDevicesByUserToken(user.token).then((res) => {
        setUsers(res)
      })
    }
  }, [user])
  console.log(users,'sada');
  
  return (
    <div className='pb-32 md:pb-10'>
      <p className={`${inter.className}  text-[24px] text-[#002269] leading-6 mb-7`}>Добавление банковского профиля</p>
      <p className={`${inter.className} text-[#8091b5] text-[14px] font-medium mb-3`}>Источник</p>

           
      <div className='w-full flex flex-col gap-y-2'>
                <button className="flex items-center max-w-[620px] justify-between bg-[#fbfcfe] px-4 py-2 rounded-lg shadow w-full">
                 <span className="flex items-center max-w-[620px] text-[12px] p-1 gap-3 text-[#C2C2D2] font-medium">
                <span className='p-2 bg-[#E6EEFF] rounded-full'>
                    <svg _ngcontent-ng-c3929038549="" width='20' height='20' viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-ng-c3929038549="" d="M12.182 4.318a4.5 4.5 0 0 1 0 6.364m-6.364 0a4.5 4.5 0 0 1 0-6.364m-2.121 8.485a7.5 7.5 0 0 1 0-10.606m10.606 0a7.5 7.5 0 0 1 0 10.606M9 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm0 0v6.75" stroke="#0052FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                </span>
                <span className={`${inter.className} text-sm text-[#C2CDE2]`}>Источник не выбран </span>
              </span>
              {!active && <IoIosArrowDown 
                onClick={()=>setActive(true)}
              />}
              {active && <IoIosArrowUp
               onClick={()=>setActive(false)}
              />}
            </button>
            {active && <div className='bg-white transition duration-700 rounded-md p-2.5 pt-4 pl-[20px]  max-w-[620px] max-h-[229px] overflow-y-auto custom-scrollbar '>
                {users.map((user)=>{
                  return <div key={user.id} className='flex gap-4 items-center py-2 px-2 hover:bg-[#fafbff] rounded-[8px]'>
                     <svg _ngcontent-ng-c3929038549="" className='w-5 h-5' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-ng-c3929038549="" d="M12 17.5h.01M8.2 22h7.6c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874C19 20.48 19 19.92 19 18.8V5.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C17.48 2 16.92 2 15.8 2H8.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C5 3.52 5 4.08 5 5.2v13.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C6.52 22 7.08 22 8.2 22Zm4.3-4.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" stroke="#fb6c6c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                     <p key={user.id} className='flex flex-col gap-0'>
                        <span className={`${inter.className} text-[16px] text-[#002269] font-semibold`}>{user.id}</span>
                        <span className={`${inter.className} text-[12px] text-[#8091B5] font-semibold -mt-1`}>{user.title}</span>
                     </p>
                  </div>
                  
                })}
            </div>}
            </div>
          {/* bankni tanlash */}
            <p className={`${inter.className} text-[#8091b5] text-[14px] font-medium mt-4 mb-2`}>Банк</p>
            <div className="relative bg-[#fbfcfe] max-w-[620px] mt-2">
                <button
                className="flex items-center justify-between w-full px-4 py-2 bg-[#fbfcfe] border rounded-lg"
                onClick={() => setIsOpen(!isOpen)}
              >
                <div className="flex items-center gap-3">
                <img src={selectedBank.url} alt={selectedBank.title} className="w-10 h-10" />
                <span className={`${inter.className} text-[#0022FF] text-sm font-semibold`}>{selectedBank.title}</span>
                </div>
                <span>{!isOpen ? <IoIosArrowDown/> : <IoIosArrowUp/>}</span>
            </button>

     
            {isOpen && (
                <ul className="absolute w-full mt-1 bg-white border rounded-lg shadow-lg max-h-60 overflow-auto custom-scroll px-2">
                {options.map((bank) => (
                    <li
                    key={bank.text}
                    className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                        setSelectedBank(bank);
                        setIsOpen(false);
                    }}
                    >
                    <div className='border border-gray-200 p-2 rounded-full'>
                     <img src={bank.url} alt={bank.title} className="w-5 h-5" />
                    </div>
                    <div className='flex flex-col gap-y-0'>
                     <p className={`${inter.className} text-[#002269] text-[16px] font-semibold`}>{bank.title}</p>
                     <p className={`-mt-1 text-[#8091B5] text-[12px]`}>{bank.text}</p>
                    </div>
                    </li>
                ))}
            </ul>
        )}
    </div>
   
    <p className={`${inter.className}  text-[16px] text-[#002269] leading-6 mt-6`}>Данные профиля</p>
    <p className={`${inter.className} text-[#8091b5] text-[14px] font-medium my-3`}>ФИО</p>
     <div className='flex items-center gap-2 max-w-[620px]'>
        <input 
         type="text" 
         placeholder='Фамилия'
         className={`${inter.className} p-4 bg-[#FBFCFE] w-1/2 md:w-2/3 border border-[#eef2f9] rounded-[16px] focus:outline-none focus:ring-0 placeholder:text-[16px] text-[#002269]`}
         />
         <input 
         type="text" 
         placeholder='Имя'
         className='p-4 bg-[#FBFCFE] w-1/2 md:w-1/3 focus:outline-none focus:ring-0 border placeholder:text-[16px] border-[#eef2f9] rounded-[16px]'
         />
     </div>
       <div className='max-w-[620px] mt-3'>
       <input 
         type="text" 
         placeholder='Отчество'
         className='p-4 bg-[#FBFCFE] w-full focus:outline-none focus:ring-0 border placeholder:text-[16px] border-[#eef2f9] rounded-[16px]'
         />
       </div>

       <p className={`${inter.className} text-[#8091b5] text-[14px] font-medium my-3`}>Номер телефона
       </p>

       <div className="relative max-w-[620px]">
       <div className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-[#FBFCFE] p-2 py-3 rounded-full">
                <svg _ngcontent-ng-c3929038549="" className='rounded-full' width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-ng-c3929038549="" d="M6.984 7.378c.58 1.208 1.37 2.34 2.372 3.341a12.169 12.169 0 0 0 3.341 2.372c.104.05.156.075.222.094.233.068.52.02.718-.122.056-.04.103-.088.199-.183.29-.291.437-.437.583-.532a1.667 1.667 0 0 1 1.817 0c.146.095.292.24.584.532l.162.162c.443.443.664.665.785.903.239.473.239 1.031 0 1.504-.12.238-.342.46-.785.902l-.131.132c-.442.44-.662.662-.962.83-.333.187-.85.322-1.232.32-.344 0-.58-.067-1.05-.2a15.866 15.866 0 0 1-6.903-4.062 15.866 15.866 0 0 1-4.061-6.903c-.134-.47-.2-.706-.202-1.05a2.814 2.814 0 0 1 .32-1.232c.17-.3.39-.52.831-.962l.132-.131c.443-.443.664-.664.902-.785a1.667 1.667 0 0 1 1.504 0c.238.12.46.342.902.785l.163.162c.291.292.437.437.532.584.36.552.36 1.264 0 1.817-.095.146-.24.292-.532.583a1.682 1.682 0 0 0-.183.199.872.872 0 0 0-.122.718c.019.066.044.118.094.222Z" stroke="#0052FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
    </div>

        <input
            type="text"
            placeholder="+7 999 999 99 99"
            className="pl-14 pr-4 py-4  left-4 bg-[#FBFCFE] w-full focus:outline-none focus:ring-0 border placeholder:text-[16px] border-[#eef2f9] rounded-[16px]"
        />
         </div>
                <p className={`${inter.className} text-[#8091b5] text-[14px] font-medium my-3`}>Суточный лимит
                    </p>

                <div className="relative max-w-[620px]">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-[#FBFCFE] p-2 py-3 rounded-full">
                        <span className={` ${inter.className} font-bold p-1 text-[16px] py-2 rounded-full text-[#0052FF] bg-[#E6EEFF]`}>
                            RUB</span>
                </div>

            <input
                type="text"
                placeholder="Суточный лимит"
                className="pl-20 pr-4 py-4  left-4 bg-[#FBFCFE] w-full focus:outline-none focus:ring-0 border placeholder:text-[16px] border-[#eef2f9] rounded-[16px]"
            />
            </div>
            <div className='max-w-[620px]'>
            <button className={`${inter.className} flex justify-center items-center text-[18px] rounded-[16px] bg-[#e6eeff] w-full text-[#0052ff] font-semibold p-4 mt-5`}>
              Добавить профиль
            </button>
            </div>
    </div>
  )
}

export default AddProfil
