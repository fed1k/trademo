'use client'
import { useAuth } from '@/components/AuthProvider';
import DeviceCard from '@/components/DeviceCard';
import { addDeviceData, getDevicesByUserToken } from '@/utils/firebase_utils';
import { Inter } from 'next/font/google';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { HiXMark } from "react-icons/hi2";
export const inter = Inter({
  weight: ['400'],
  subsets: ['latin'],
});
const DevicesPage = () => {
  const { user } = useAuth()
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(true)
  const [newDeviceToken, setNewDeviceToken] = useState("")
  const [users, setUsers] = useState([])

  const router = useRouter()

  const addDevice = async () => {
    if (query) {
      const response = await addDeviceData(user.token, query)
      setActive(false)
      setNewDeviceToken(response)
    }
  }

  useEffect(() => {
    if (user) {
      getDevicesByUserToken(user.token).then((res) => {
        setUsers(res)
        console.log(res);
      })
    }
  }, [user])


  return (
    <div>
      <div className='flex justify-between w-full items-center'>
        <p className={`${inter.className} text-[24px] md:text-[32px] text-[#002269] leading-6 mb-7`}>Устройства</p>
        <button onClick={() => document.getElementById('my_modal_4').showModal()} className='btn bg-[#e6eeff] md:bg-[#FBFCFE] border border-[#eef2f9] flex items-center gap-[10px] py-[6px] md:py-2.5 px-[10px] md:px-5 rounded-[6px] mb-4 z-10'>
          <svg _ngcontent-ng-c2941981905="" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className='mt-[1px] w-4 h-4 md:w-5 md:h-5'><path _ngcontent-ng-c2941981905="" d="M12.182 4.318a4.5 4.5 0 0 1 0 6.364m-6.364 0a4.5 4.5 0 0 1 0-6.364m-2.121 8.485a7.5 7.5 0 0 1 0-10.606m10.606 0a7.5 7.5 0 0 1 0 10.606M9 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm0 0v6.75" stroke="#0052FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
          <span className='text-[#0052ff] md:text-[#002269] leading-2 text-[12px] font-medium md:text-sm'>Добавить устройство
          </span>
        </button>
      </div>
      
      <label className="text-[#8091b5] md:hidden  text-sm font-[500] mb-[10px]">Поиск по устройствам</label>
      <div className="relative md:hidden flex items-center border border-gray-300 rounded-2xl p-2 w-full bg-white shadow-sm my-[10px]">
        <CiSearch className="w-5 h-5 text-[#0052ff] mr-2" />
        <input
          type="text"
          placeholder="Искать устройства"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 bg-transparent outline-none h-8 w-full text-gray-700 placeholder-gray-400"
        />
        <CiSearch className="w-5 h-5 text-gray-400 cursor-pointer hover:text-[#0052ff] mr-2" />
        {(
          <HiXMark
            className="w-5 h-5 text-gray-400 cursor-pointer hover:text-[#0052ff]"
            onClick={() => setQuery("")}
          />
        )}
      </div>

      <div className='justify-between hidden md:flex mb-5  gap-3 items-center'>
        <div className="flex  flex-col gap-2 mt-7 w-full px-1">
          <label className="text-[#8091b5] text-sm font-[400] mb-[10px]">Поиск по сделкам</label>
          <div className="relative flex items-center border border-gray-300 rounded-lg p-2 w-full bg-white shadow-sm">
            <CiSearch className="w-5 h-5 text-[#0052ff] mr-2" />
            <input
              type="text"
              placeholder="Искать сделки"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 bg-transparent outline-none h-8 w-full text-gray-700 placeholder-gray-400"
            />
            <CiSearch className="w-5 h-5 text-gray-400 cursor-pointer hover:text-[#0052ff] mr-2" />
            {(
              <HiXMark
                className="w-5 h-5 text-gray-400 cursor-pointer hover:text-[#0052ff]"
                onClick={() => setQuery("")}
              />
            )}
          </div>
        </div>
        <div className='w-full flex justify-between gap-2 items-center'>
          <div className='w-full flex flex-col gap-y-2 mt-[26px]'>
            <label className="text-[#8091b5] text-sm font-[400] mb-[10px]">Параметры поиска</label>
            <button className="flex items-center justify-between bg-[#fbfcfe] px-4 py-2 rounded-lg shadow w-full">
              <span className="flex items-center w-full text-[12px] gap-1 text-[#002269] font-medium">
                <svg _ngcontent-ng-c3225173330="" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="styles_iconLeft__nPCI9"><path _ngcontent-ng-c3225173330="" d="M2.5 6.667h10m0 0a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0Zm-5 6.666h10m-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" stroke="#0052FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                <select className="bg-[#fbfcfe] p-2 border-none w-full">
                  <option className="text-blue-600 font-medium">  Не выбраны </option>
                </select>
              </span>
            </button>
          </div>
          <div className='w-full flex flex-col gap-y-2 mt-[26px]'>
            <label className="text-[#8091b5] text-sm font-[400] mb-[10px]">Сортировка результатов</label>
            <button className="flex items-center justify-between bg-[#fbfcfe] px-4 py-2 rounded-lg shadow w-full">
              <span className="flex items-center w-full text-[12px] gap-1 text-[#002269] font-medium">
                <svg _ngcontent-ng-c3225173330="" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-ng-c3225173330="" d="M14.167 3.333v13.334m0 0-3.334-3.334m3.334 3.334 3.333-3.334M5.833 16.667V3.333m0 0L2.5 6.667m3.333-3.334 3.334 3.334" stroke="#0052FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                <select className="bg-[#fbfcfe] p-2 border-none w-full">
                  <option className="text-blue-600 font-medium"> Сначала новые</option>
                </select>
              </span>
            </button>
          </div>
        </div>
      </div>


      {/* устройства start */}
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-[400px] p-5 max-w-5xl">
          <h3 className={`${inter.className} text-center font-medium text-[#000000] text-[18px] mb-2`}>Добавление устройства</h3>
          <p className={`${inter.className} text-center mb-4 text-sm text-[#8091B5]`}>Заполните форму для добавления</p>
          <label className="text-[#8091b5] font-semibold uppercase text-sm">Сортировка результатов</label>
          <div className="relative flex  gap-4 items-center border border-gray-300 rounded-2xl p-3 w-full bg-[#FBFCFE] shadow-sm mt-2 mb-4">
            <svg _ngcontent-ng-c2941981905="" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className='mt-[1px] w-4 h-4 md:w-5 md:h-5'><path _ngcontent-ng-c2941981905="" d="M12.182 4.318a4.5 4.5 0 0 1 0 6.364m-6.364 0a4.5 4.5 0 0 1 0-6.364m-2.121 8.485a7.5 7.5 0 0 1 0-10.606m10.606 0a7.5 7.5 0 0 1 0 10.606M9 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm0 0v6.75" stroke="#0052FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            <input
              type="text"
              placeholder="Введите название"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 bg-transparent outline-none h-8 w-full text-gray-700 placeholder-gray-300 placeholder:text-[17px] "
            />
            <svg _ngcontent-ng-c631131687="" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="styles_copyIcon__KzfF6 w-6 h-6"><path _ngcontent-ng-c631131687="" d="M7.5 3h7.1c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748C21 6.04 21 7.16 21 9.4v7.1M6.2 21h8.1c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874c.218-.428.218-.988.218-2.108V9.7c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C15.98 6.5 15.42 6.5 14.3 6.5H6.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C3 8.02 3 8.58 3 9.7v8.1c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C4.52 21 5.08 21 6.2 21Z" stroke="#C2CDE2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
          </div>

          {!active && <div>
            <label className="text-[#8091b5] font-semibold uppercase text-sm mb-[16px]">СЕКРЕТНЫЙ КЛЮЧ – UUID</label>
            <div className="relative flex  gap-4 items-center border border-gray-300 rounded-2xl p-3 w-full bg-[#FBFCFE] shadow-sm mb-4 mt-2">
              <svg _ngcontent-ng-c631131687="" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-ng-c631131687="" d="M5.918 8.333h-.085V6.667a4.167 4.167 0 1 1 8.334 0v1.666h-.085M10 11.667v1.666m5.833-.833a5.833 5.833 0 1 1-11.666 0 5.833 5.833 0 0 1 11.666 0Z" stroke="#0052FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
              <input
                type="text"
                placeholder="Введите название"
                // value={user.token}
                value={newDeviceToken}
                className="flex-1 bg-transparent outline-none h-8 w-full text-gray-700 placeholder-gray-300 placeholder:text-[17px] "
              />
              <svg _ngcontent-ng-c631131687="" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="styles_copyIcon__KzfF6 w-6 h-6 cursor-pointer"><path _ngcontent-ng-c631131687="" d="M7.5 3h7.1c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748C21 6.04 21 7.16 21 9.4v7.1M6.2 21h8.1c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874c.218-.428.218-.988.218-2.108V9.7c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C15.98 6.5 15.42 6.5 14.3 6.5H6.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C3 8.02 3 8.58 3 9.7v8.1c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C4.52 21 5.08 21 6.2 21Z" stroke="#C2CDE2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            </div>
          </div>
          }
          {active && <button onClick={addDevice} className={`${inter.className} text-[#0052FF] h-[60px] text-[16px] mb-2 w-full text-center bg-[#E6EEFF] rounded-[12px]`}>Добавить устройство</button>}

          {!active && <button onClick={() => router.push(`/devices/${newDeviceToken}`)} className={`${inter.className} text-[#0052FF] h-[48px] text-[16px] w-full text-center bg-[#E6EEFF] rounded-[12px]`}> Перейти на страницу устройства</button>}
          <div className="modal-action">
            <form method="dialog">
              {!active && <button className={`${inter.className} btn text-[#002269] text-[16px] bg-[#F3F4F8] w-[360px] h-12`}>Закрыть</button>}
            </form>
          </div>
        </div>
      </dialog>
      {/* устройства end */}




      {!users && <div className="flex justify-center border rounded-2xl border-[#eef2f9] items-center h-32 bg-[#fbfcfe] mt-5">
        <p className={`text-[18px] text-[#8091b5] font-medium ${inter.className} leading-5 font-serif`}>Устройства не найдены</p>
      </div>}
      {users && users.map((user) => {
        return <div key={user.id}>
          <DeviceCard user={user} />
        </div>
      })}
    </div>
  )
}

export default DevicesPage