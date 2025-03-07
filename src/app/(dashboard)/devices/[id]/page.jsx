"use client"
import { Inter } from 'next/font/google';
import { useEffect, useRef, useState } from 'react';
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { HiXMark } from "react-icons/hi2";
import { BsCheck2 } from "react-icons/bs";
import { BsX } from "react-icons/bs";
import { deleteDocument, getDocumentById, updateDocument } from '@/utils/firebase_utils';
import { useParams, useRouter } from 'next/navigation';
export const inter = Inter({
  weight: ['400'],
  subsets: ['latin'],
});
function DevicePage() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [device, setDevice] = useState({})
  const [deviceNewName, setDeviceNewName] = useState("")

  const router = useRouter();
  const params = useParams()

  const modalRef = useRef(null)

  const deleteDevice = async () => {
    console.log("hehe")
    const response = await deleteDocument(params.id, "devices");
    if (response === 200) {
      router.push("/devices")
    } else {
      console.log(response)
    }
  }

  const openModal = () => {
    modalRef.current.showModal();
    setDeviceNewName(device.title)
  }

  const handleUpdateTitle = async() => {
    const response = await updateDocument({title: deviceNewName}, "devices", params.id);

    if (response === 200) {
      modalRef.current.close();
      setDevice((prev) => ({...prev, title: deviceNewName}))
    }
  }


  useEffect(() => {
    getDocumentById(params.id).then((dev) => {
      setDevice(dev)
    })
  }, [])

  return (
    <div className='overflow-x-hidden'>
      <div className='md:flex block justify-between w-full items-center gap-3'>
        <div className=' w-full flex justify-between items-center mb-6 md:mb-0'>
          <p className={`${inter.className} text-[24px] md:text-[32px] text-[#002269] leading-6`}>Устройства</p>
          <p className={`text-[#FEC065] block md:hidden  text-sm ${inter.className}`}>offline</p>
        </div>
        <div className='flex gap-4 justify-between font-bold items-center'>
          <p className={`text-[#FEC065] hidden md:block  text-sm ${inter.className}`}>offline</p>
          <button className='flex cursor-not-allowed min-w-56 gap-1 items-center bg-[#FBFCFE] rounded-[8px] py-2.5 px-5'>
            <svg _ngcontent-ng-c2661008953="" className='w-5 h-5' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-ng-c2661008953="" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z" stroke="#0052FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path _ngcontent-ng-c2661008953="" d="M9.5 8.965c0-.477 0-.716.1-.849a.5.5 0 0 1 .364-.199c.166-.012.367.117.769.375l4.72 3.035c.349.224.523.336.583.478a.5.5 0 0 1 0 .39c-.06.142-.234.254-.583.478l-4.72 3.035c-.402.258-.603.387-.769.375a.5.5 0 0 1-.364-.2c-.1-.132-.1-.371-.1-.848v-6.07Z" stroke="#0052FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            <p className={`${inter.className} text-[#002269] text-sm `}> Запустить устройство</p>
          </button>

          <div className="dropdown dropdown-sm  dropdown-end ">
            <button
              tabIndex={0}
              className="py-2 px-4 border border-[#eef2f9] rounded-[8px] bg-[#FBFCFE] hover:bg-[#fafbff] flex items-center gap-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className={`${inter.className} text-[#002269] text-sm `}>Ещё</span> {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </button>
            <ul
              tabIndex={0}
              className={`absolute right-[1px] top-12 flex flex-col gap-y-2 p-3 shadow bg-[#FBFCFE] hover:bg-[#fafbff] rounded-box w-52 ${isOpen ? "block" : "hidden"
                }`}
            >
              <li className='flex gap-2 items-center hover:bg-[#e2ece5] p-[6px] hover:cursor-pointer transition duration-300 rounded-[8px]'>
                <svg _ngcontent-ng-c2661008953="" width='15' height='15' viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-ng-c2661008953="" d="M4.875 4.875h.008m8.242 0h.008m-8.258 8.25h.008M9.75 9.75h.008m3.367 3.375h.008m-.383 2.625h3v-3m-5.25-.375v3.375m5.25-5.25h-3.375m-.675-3h2.85c.42 0 .63 0 .79-.082a.75.75 0 0 0 .328-.328c.082-.16.082-.37.082-.79V3.45c0-.42 0-.63-.082-.79a.75.75 0 0 0-.327-.328c-.16-.082-.371-.082-.791-.082H11.7c-.42 0-.63 0-.79.082a.75.75 0 0 0-.328.328c-.082.16-.082.37-.082.79V6.3c0 .42 0 .63.082.79a.75.75 0 0 0 .327.328c.16.082.371.082.791.082Zm-8.25 0H6.3c.42 0 .63 0 .79-.082a.75.75 0 0 0 .328-.328c.082-.16.082-.37.082-.79V3.45c0-.42 0-.63-.082-.79a.75.75 0 0 0-.328-.328c-.16-.082-.37-.082-.79-.082H3.45c-.42 0-.63 0-.79.082a.75.75 0 0 0-.328.328c-.082.16-.082.37-.082.79V6.3c0 .42 0 .63.082.79a.75.75 0 0 0 .328.328c.16.082.37.082.79.082Zm0 8.25H6.3c.42 0 .63 0 .79-.082a.75.75 0 0 0 .328-.327c.082-.16.082-.371.082-.791V11.7c0-.42 0-.63-.082-.79a.75.75 0 0 0-.328-.328c-.16-.082-.37-.082-.79-.082H3.45c-.42 0-.63 0-.79.082a.75.75 0 0 0-.328.327c-.082.16-.082.371-.082.791v2.85c0 .42 0 .63.082.79a.75.75 0 0 0 .328.328c.16.082.37.082.79.082Z" stroke="#0052FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                <span className={`${inter.className} text-[#002269] text-sm `}>Показать QR-код</span>
              </li>
              <li onClick={openModal} className='flex gap-2 items-center hover:bg-[#e2ece5] p-[6px] hover:cursor-pointer transition duration-300 rounded-[8px]'>
                <svg width='15' height='15' _ngcontent-ng-c2661008953="" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-ng-c2661008953="" d="M11 4H6.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C2 6.28 2 7.12 2 8.8v8.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C4.28 22 5.12 22 6.8 22h8.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C20 19.72 20 18.88 20 17.2V13M8 16h1.675c.489 0 .733 0 .963-.055.204-.05.4-.13.579-.24.201-.123.374-.296.72-.642L21.5 5.5a2.121 2.121 0 0 0-3-3l-9.563 9.563c-.346.346-.519.519-.642.72a2 2 0 0 0-.24.579c-.055.23-.055.474-.055.963V16Z" stroke="#0052ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                <span className={`${inter.className} text-[#002269] text-sm `}>Редактировать</span>
              </li>
              <li onClick={deleteDevice} className='flex gap-2 items-center hover:bg-[#e2ece5] p-[6px] hover:cursor-pointer transition duration-300 rounded-[8px]'>
                <svg _ngcontent-ng-c2661008953="" width='15' height='15' viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-ng-c2661008953="" d="M12 4.5v-.6c0-.84 0-1.26-.164-1.581a1.5 1.5 0 0 0-.655-.656c-.32-.163-.74-.163-1.581-.163H8.4c-.84 0-1.26 0-1.581.163a1.5 1.5 0 0 0-.656.656C6 2.639 6 3.059 6 3.9v.6m1.5 4.125v3.75m3-3.75v3.75M2.25 4.5h13.5m-1.5 0v8.4c0 1.26 0 1.89-.245 2.371-.216.424-.56.768-.984.984-.48.245-1.11.245-2.371.245h-3.3c-1.26 0-1.89 0-2.371-.245a2.25 2.25 0 0 1-.984-.983C3.75 14.79 3.75 14.16 3.75 12.9V4.5" stroke="#FB6C6C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                <span className={`${inter.className} text-[#002269] text-sm `}>Удалить устройство</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <dialog ref={modalRef} id="my_modal_4" className="modal">
        <div className="modal-box w-[400px] p-5 max-w-5xl">
          <h3 className={`${inter.className} text-center font-medium text-[#000000] text-[18px] mb-2`}>Редактирование устройства</h3>
          <p className={`${inter.className} text-center mb-4 text-sm text-[#8091B5]`}>Введите новое значение названия устройства</p>
          <label className="text-[#8091b5] font-semibold uppercase text-sm">НАЗВАНИЕ УСТРОЙСТВА</label>
          <div className="relative flex  gap-4 items-center border border-gray-300 rounded-2xl p-3 w-full bg-[#FBFCFE] shadow-sm mt-2 mb-4">
            <svg _ngcontent-ng-c2941981905="" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className='mt-[1px] w-4 h-4 md:w-5 md:h-5'><path _ngcontent-ng-c2941981905="" d="M12.182 4.318a4.5 4.5 0 0 1 0 6.364m-6.364 0a4.5 4.5 0 0 1 0-6.364m-2.121 8.485a7.5 7.5 0 0 1 0-10.606m10.606 0a7.5 7.5 0 0 1 0 10.606M9 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm0 0v6.75" stroke="#0052FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            <input
              type="text"
              placeholder="Введите название"
              value={deviceNewName}
              onChange={(e) => setDeviceNewName(e.target.value)}
              className="flex-1 bg-transparent outline-none h-8 w-full text-gray-700 placeholder-gray-300 placeholder:text-[17px] "
            />
            <svg onClick={() => navigator.clipboard.writeText(deviceNewName)}  _ngcontent-ng-c631131687="" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="styles_copyIcon__KzfF6 w-6 h-6"><path _ngcontent-ng-c631131687="" d="M7.5 3h7.1c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748C21 6.04 21 7.16 21 9.4v7.1M6.2 21h8.1c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874c.218-.428.218-.988.218-2.108V9.7c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C15.98 6.5 15.42 6.5 14.3 6.5H6.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C3 8.02 3 8.58 3 9.7v8.1c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C4.52 21 5.08 21 6.2 21Z" stroke="#C2CDE2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
          </div>
          <button onClick={handleUpdateTitle} className={`${inter.className} text-[#0052FF] h-[52px] text-[16px] w-full text-center bg-[#E6EEFF] rounded-[12px]`}>Сохранить</button>
        </div>
      </dialog>

      <div className='flex justify-between gap-7 mt-10 w-full px-5'>
        <div className='w-full md:w-[40%]'>
          <svg _ngcontent-ng-c2661008953="" className='relative md:block hidden' height='592' width='296' viewBox="0 0 300 600" fill="none" xmlns="http://www.w3.org/2000/svg" class="styles_deviceImage__NMpHC"><path _ngcontent-ng-c2661008953="" fill-rule="evenodd" clip-rule="evenodd" d="M32 4h234c15.464 0 28 12.536 28 28v536c0 15.464-12.536 28-28 28H32c-15.464 0-28-12.536-28-28V32C4 16.536 16.536 4 32 4ZM1 32C1 14.88 14.88 1 32 1h234c17.121 0 31 13.88 31 31v189.354c-.622.705-1 1.632-1 2.646v67c0 1.014.378 1.941 1 2.646V568c0 17.121-13.879 31-31 31H32c-17.12 0-31-13.879-31-31V32Z" fill="#343443"></path><path _ngcontent-ng-c2661008953="" fill-rule="evenodd" clip-rule="evenodd" d="M32 1h234c17.121 0 31 13.88 31 31v189.354a4.032 4.032 0 0 1 1-.819V32c0-17.673-14.327-32-32-32H32C14.327 0 0 14.327 0 32v536c0 17.673 14.327 32 32 32h234c17.673 0 32-14.327 32-32V294.465a4.032 4.032 0 0 1-1-.819V568c0 17.121-13.879 31-31 31H32c-17.12 0-31-13.879-31-31V32C1 14.88 14.88 1 32 1Z" fill="#1A1A27"></path><rect _ngcontent-ng-c2661008953="" x="5.5" y="5.5" width="287" height="589" rx="26.5" stroke="#1A1A27" strokeWidth="3"></rect><rect _ngcontent-ng-c2661008953="" x="8" y="8" width="282" height="584" rx="24" stroke="#222232" strokeWidth="2"></rect><rect _ngcontent-ng-c2661008953="" x="12.5" y="12.5" width="273" height="575" rx="19.5" stroke="#F0F4FC" strokeWidth="7"></rect><rect _ngcontent-ng-c2661008953="" x="16" y="16" width="266" height="568" rx="16" fill="#F9FBFF"></rect><path _ngcontent-ng-c2661008953="" d="M298 120h.5a1.5 1.5 0 0 1 1.5 1.5v77a1.5 1.5 0 0 1-1.5 1.5h-.5v-80Z" fill="url(#device-body_svg__a)"></path><path _ngcontent-ng-c2661008953="" d="M296 230h.5a1.5 1.5 0 0 1 1.5 1.5v52a1.5 1.5 0 0 1-1.5 1.5h-.5v-55Z" fill="url(#device-body_svg__b)"></path><defs _ngcontent-ng-c2661008953=""><linearGradient _ngcontent-ng-c2661008953="" id="device-body_svg__a" x1="300" y1="120.571" x2="298" y2="120.571" gradientUnits="userSpaceOnUse"><stop _ngcontent-ng-c2661008953="" stop-color="#343443"></stop><stop _ngcontent-ng-c2661008953="" offset="1" stop-color="#272733"></stop></linearGradient><linearGradient _ngcontent-ng-c2661008953="" id="device-body_svg__b" x1="298" y1="230.393" x2="296" y2="230.393" gradientUnits="userSpaceOnUse"><stop _ngcontent-ng-c2661008953="" stop-color="#343443"></stop><stop _ngcontent-ng-c2661008953="" offset="1" stop-color="#272733"></stop></linearGradient></defs>
          </svg>

        </div>

        <div className='md:left-auto w-full md:w-[65%]'>
          <div className='p-5 mb-5 w-full  border border-[#eef2f9] rounded-[16px] bg-[#FBFCFE] flex items-center group justify-between h-[88px] md:h-[104px]'>
            <div className='flex gap-2 w-full items-center'>
              <svg _ngcontent-ng-c2661008953="" className='w-8 h-8' viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-ng-c2661008953="" d="M6 8.75h.005M4.1 11h3.8c.56 0 .84 0 1.054-.109a1 1 0 0 0 .437-.437C9.5 10.24 9.5 9.96 9.5 9.4V2.6c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437C8.74 1 8.46 1 7.9 1H4.1c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C2.5 1.76 2.5 2.04 2.5 2.6v6.8c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437C3.26 11 3.54 11 4.1 11Zm2.15-2.25a.25.25 0 1 1-.5 0 .25.25 0 0 1 .5 0Z" stroke="#0052ff" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></path></svg>
              <div className='md:ml-5 w-full'>
                <p className={`${inter.className} font-medium text-[#8091B5] text-sm md:text-[18px] `}>Название устройства</p>
                <p className={`${inter.className} text-[#002269] text-[900] text-[18px] md:text-[22px] `}>{device?.title}</p>
              </div>
            </div>
            <p> <svg _ngcontent-ng-c2661008953="" className='hidden group-hover:block w-5 h-5 cursor-pointer' viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g _ngcontent-ng-c2661008953="" clip-path="url(#edit-01_svg__a)"><path _ngcontent-ng-c2661008953="" d="M1.917 12.077c.031-.275.046-.413.088-.542.037-.114.09-.223.155-.324.075-.113.173-.21.37-.407L11.332 2A1.886 1.886 0 0 1 14 4.667L5.196 13.47c-.196.196-.294.294-.407.369-.1.066-.21.118-.324.155-.129.042-.266.057-.542.088l-2.256.25.25-2.256Z" stroke="#C2CDE2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></g><defs _ngcontent-ng-c2661008953=""><clipPath _ngcontent-ng-c2661008953="" id="edit-01_svg__a"><path _ngcontent-ng-c2661008953="" fill="#fff" d="M0 0h16v16H0z"></path></clipPath></defs></svg></p>
          </div>

          <div className='p-5 mb-5 w-full  border border-[#eef2f9] rounded-[16px] bg-[#FBFCFE] flex items-center gap-2 h-[88px] md:h-[104px]'>
            <svg _ngcontent-ng-c2661008953="" className='w-8 h-8' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-ng-c2661008953="" d="M4 6.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C6.28 2 7.12 2 8.8 2h3.212c.733 0 1.1 0 1.446.083.306.073.598.195.867.36.303.185.562.444 1.08.963l3.19 3.188c.518.519.777.778.963 1.081a3 3 0 0 1 .36.867c.082.346.082.712.082 1.446V17.2c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C17.72 22 16.88 22 15.2 22H8.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C4 19.72 4 18.88 4 17.2V6.8Z" stroke="#0052FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path _ngcontent-ng-c2661008953="" d="M8 13.8c0-.28 0-.42.055-.527a.5.5 0 0 1 .218-.218C8.38 13 8.52 13 8.8 13h6.4c.28 0 .42 0 .527.055a.5.5 0 0 1 .218.218c.055.107.055.247.055.527v3.4c0 .28 0 .42-.055.527a.5.5 0 0 1-.218.218C15.62 18 15.48 18 15.2 18H8.8c-.28 0-.42 0-.527-.055a.5.5 0 0 1-.218-.218C8 17.62 8 17.48 8 17.2v-3.4Z" stroke="#0052FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            <div className='ml-5'>
              <p className={`${inter.className} font-medium text-[#8091B5] text-[18px] `}>Номер SIM</p>
              <p className={`${inter.className} text-[#002269] md:hidden text-[900] text-[16px] `}>Нет данных</p>
            </div>
          </div>
          <div className='p-5 mb-5 w-full  border border-[#eef2f9] rounded-[16px] bg-[#FBFCFE] hidden md:flex items-center gap-2 h-[133px]'>
            <svg _ngcontent-ng-c2661008953="" className='w-6 h-6 mb-2' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-ng-c2661008953="" d="m15 9-6 6m0-6 6 6m7-3c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z" stroke="#0052ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            <div>
              <p className={`${inter.className} text-[#002269] text-[900] text-[16px] `}>Не в работе</p>
              <p className={`${inter.className} font-medium text-[#8091B5] text-[14px] `}>Устройство не в работе</p>

            </div>
          </div>
          <div className='p-5 mb-5 w-full  border border-[#eef2f9] rounded-[16px] bg-[#FBFCFE] hidden md:flex items-center gap-2 h-[133px]'>
            <svg _ngcontent-ng-c2661008953="" className='w-6 h-6 mb-2' viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g _ngcontent-ng-c2661008953="" clip-path="url(#wifi_svg__a)"><path _ngcontent-ng-c2661008953="" d="M12.5 19.5h.01M23.306 8.7A15.942 15.942 0 0 0 12.5 4.5c-4.166 0-7.96 1.592-10.807 4.2m3.539 3.543A10.958 10.958 0 0 1 12.5 9.5c2.786 0 5.33 1.036 7.268 2.743m-3.57 3.532A5.974 5.974 0 0 0 12.5 14.5c-1.416 0-2.718.49-3.745 1.312" stroke="#0052FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></g><defs _ngcontent-ng-c2661008953=""><clipPath _ngcontent-ng-c2661008953="" id="wifi_svg__a"><path _ngcontent-ng-c2661008953="" fill="#fff" transform="translate(.5)" d="M0 0h24v24H0z"></path></clipPath></defs></svg>
            <div>
              <p className={`${inter.className} text-[#002269] text-[900] text-[16px] `}>Нет данных</p>
              <p className={`${inter.className} font-medium text-[#8091B5] text-[14px] `}>Нет данных о скорости</p>
            </div>
          </div>




          <div className='p-5 mb-5 w-full  border border-[#eef2f9] rounded-[16px] bg-[#FBFCFE]  items-center gap-2 h-[244px]'>
            <p className={`${inter.className} text-[#002269] text-[900] text-[18px] mb-6 `}>Данные об устройстве</p>

            <div>
              <div className='flex items-center gap-10 mb-3'>
                <div className='flex items-center gap-2'>
                  <svg _ngcontent-ng-c2661008953="" className='w-3 h-3' viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><g _ngcontent-ng-c2661008953="" clip-path="url(#settings-02_svg__a)" stroke="#0052FF" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"><path _ngcontent-ng-c2661008953="" d="m4.698 9.686.292.657a1.106 1.106 0 0 0 2.022 0l.292-.657a1.213 1.213 0 0 1 1.235-.712l.715.076a1.106 1.106 0 0 0 1.011-1.751l-.423-.582A1.214 1.214 0 0 1 9.612 6c0-.257.081-.507.232-.714l.424-.582a1.105 1.105 0 0 0-1.012-1.751l-.715.076a1.213 1.213 0 0 1-1.235-.714l-.294-.658a1.106 1.106 0 0 0-2.022 0l-.292.657a1.213 1.213 0 0 1-1.235.715l-.718-.076a1.106 1.106 0 0 0-1.01 1.75l.423.583a1.214 1.214 0 0 1 0 1.428l-.424.582a1.106 1.106 0 0 0 1.011 1.751l.715-.076a1.217 1.217 0 0 1 1.238.715Z"></path><path _ngcontent-ng-c2661008953="" d="M6 7.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path></g><defs _ngcontent-ng-c2661008953=""><clipPath _ngcontent-ng-c2661008953="" id="settings-02_svg__a"><path _ngcontent-ng-c2661008953="" fill="#fff" d="M0 0h12v12H0z"></path></clipPath></defs></svg>
                  <p className={`${inter.className} font-medium text-[#8091B5] text-sm `}>Модель</p>
                </div>
                <p className={`${inter.className} text-[#002269] text-[900] text-[16px]  `}>Нет данных</p>
              </div>

              <div className='flex items-center gap-10 mb-3'>
                <div className='flex items-center gap-2'>
                  <svg _ngcontent-ng-c2661008953="" className='w-3 h-3' viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-ng-c2661008953="" d="M4.355 13.898A10.437 10.437 0 0 0 6 8.25a3 3 0 0 1 6 0c0 .763-.052 1.514-.152 2.25m-1.589 5.133c.46-.916.835-1.88 1.119-2.883m2.88.849c.483-1.7.742-3.494.742-5.349a6 6 0 0 0-9-5.197m-3.75 8.47c.48-.989.75-2.1.75-3.273 0-1.093.292-2.117.803-3M9 8.25c0 2.638-.757 5.1-2.065 7.178" stroke="#0052ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                  <p className={`${inter.className} font-medium text-[#8091B5] text-sm `}>
                    Fingerprint</p>
                </div>
                <p className={`${inter.className} text-[#002269] text-[900] text-[16px]  `}>Нет данных</p>
              </div>

              <div className='flex items-center gap-10 mb-3'>
                <div className='flex items-center gap-2'>
                  <svg _ngcontent-ng-c2661008953="" className='w-3 h-3' viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-ng-c2661008953="" d="M8.5 5V4a2.5 2.5 0 0 0-5 0v1M6 7.25v1M4.4 10.5h3.2c.84 0 1.26 0 1.581-.164a1.5 1.5 0 0 0 .656-.655C10 9.361 10 8.941 10 8.1v-.7c0-.84 0-1.26-.163-1.581a1.5 1.5 0 0 0-.656-.656C8.861 5 8.441 5 7.6 5H4.4c-.84 0-1.26 0-1.581.163a1.5 1.5 0 0 0-.656.656C2 6.139 2 6.559 2 7.4v.7c0 .84 0 1.26.163 1.581a1.5 1.5 0 0 0 .656.655c.32.164.74.164 1.581.164Z" stroke="#0052FF" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                  <p className={`${inter.className} font-medium text-[#8091B5] text-sm `}>UUID (Ключ)</p>
                </div>
                <p className={`${inter.className} w-40 truncate text-[#002269] text-[900] text-[16px]  `}>
                  {params.id}</p>
                <svg _ngcontent-ng-c2661008953="" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg" className="styles_squares__dmaEo cursor-pointer"><g _ngcontent-ng-c2661008953="" clip-path="url(#copy-03_svg__a)"><path _ngcontent-ng-c2661008953="" d="M6.667 6.667V4.332c0-.933 0-1.4.182-1.756.16-.314.414-.569.728-.729.357-.181.823-.181 1.757-.181h6.333c.933 0 1.4 0 1.757.181.313.16.568.415.728.729.182.356.182.823.182 1.756v6.333c0 .934 0 1.4-.182 1.757-.16.314-.415.569-.728.729-.357.181-.824.181-1.757.181h-2.333m-9 5h6.333c.933 0 1.4 0 1.757-.181.313-.16.568-.415.728-.729.182-.356.182-.823.182-1.756V9.332c0-.933 0-1.4-.182-1.756a1.667 1.667 0 0 0-.728-.729c-.357-.181-.824-.181-1.757-.181H4.334c-.934 0-1.4 0-1.757.181-.314.16-.569.415-.728.729-.182.356-.182.823-.182 1.756v6.333c0 .934 0 1.4.182 1.757.16.314.414.569.728.729.357.181.823.181 1.757.181Z" stroke="#C2CDE2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></g><defs _ngcontent-ng-c2661008953=""><clipPath _ngcontent-ng-c2661008953="" id="copy-03_svg__a"><path _ngcontent-ng-c2661008953="" fill="#fff" d="M0 0h20v20H0z"></path></clipPath></defs></svg>
              </div>

              <div className='flex items-center gap-10 '>
                <div className='flex items-center gap-2'>
                  <svg _ngcontent-ng-c2661008953="" className='w-3 h-3' viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><g _ngcontent-ng-c2661008953="" clip-path="url(#calendar-plus-02_svg__a)"><path _ngcontent-ng-c2661008953="" d="M10.5 5.75V4.4c0-.84 0-1.26-.164-1.581a1.5 1.5 0 0 0-.655-.656C9.361 2 8.941 2 8.1 2H3.9c-.84 0-1.26 0-1.581.163a1.5 1.5 0 0 0-.656.656c-.163.32-.163.74-.163 1.581v4.2c0 .84 0 1.26.163 1.581a1.5 1.5 0 0 0 .656.655c.32.164.74.164 1.581.164h2.35m4.25-6h-9M8 1v2M4 1v2m5 7.5v-3M7.5 9h3" stroke="#0052FF" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></path></g><defs _ngcontent-ng-c2661008953=""><clipPath _ngcontent-ng-c2661008953="" id="calendar-plus-02_svg__a"><path _ngcontent-ng-c2661008953="" fill="#fff" d="M0 0h12v12H0z"></path></clipPath></defs></svg>
                  <p className={`${inter.className} font-medium text-[#8091B5] text-sm `}>Добавлено</p>
                </div>
                <p className={`${inter.className} text-[#002269] text-[900] text-[16px]  `}>{device?.date}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='p-5 mb-5 w-full mx-auto  border border-[#eef2f9] rounded-[16px] bg-[#FBFCFE] md:hidden flex ml-10 items-center gap-2 h-[280px]'>
        <svg _ngcontent-ng-c2661008953="" className='w-36 h-52' viewBox="0 0 300 600" fill="none" xmlns="http://www.w3.org/2000/svg" class="styles_deviceImage__SvmJn"><path _ngcontent-ng-c2661008953="" fill-rule="evenodd" clip-rule="evenodd" d="M32 4h234c15.464 0 28 12.536 28 28v536c0 15.464-12.536 28-28 28H32c-15.464 0-28-12.536-28-28V32C4 16.536 16.536 4 32 4ZM1 32C1 14.88 14.88 1 32 1h234c17.121 0 31 13.88 31 31v189.354c-.622.705-1 1.632-1 2.646v67c0 1.014.378 1.941 1 2.646V568c0 17.121-13.879 31-31 31H32c-17.12 0-31-13.879-31-31V32Z" fill="#343443"></path><path _ngcontent-ng-c2661008953="" fill-rule="evenodd" clip-rule="evenodd" d="M32 1h234c17.121 0 31 13.88 31 31v189.354a4.032 4.032 0 0 1 1-.819V32c0-17.673-14.327-32-32-32H32C14.327 0 0 14.327 0 32v536c0 17.673 14.327 32 32 32h234c17.673 0 32-14.327 32-32V294.465a4.032 4.032 0 0 1-1-.819V568c0 17.121-13.879 31-31 31H32c-17.12 0-31-13.879-31-31V32C1 14.88 14.88 1 32 1Z" fill="#1A1A27"></path><rect _ngcontent-ng-c2661008953="" x="5.5" y="5.5" width="287" height="589" rx="26.5" stroke="#1A1A27" stroke-width="3"></rect><rect _ngcontent-ng-c2661008953="" x="8" y="8" width="282" height="584" rx="24" stroke="#222232" stroke-width="2"></rect><rect _ngcontent-ng-c2661008953="" x="12.5" y="12.5" width="273" height="575" rx="19.5" stroke="#F0F4FC" stroke-width="7"></rect><rect _ngcontent-ng-c2661008953="" x="16" y="16" width="266" height="568" rx="16" fill="#F9FBFF"></rect><path _ngcontent-ng-c2661008953="" d="M298 120h.5a1.5 1.5 0 0 1 1.5 1.5v77a1.5 1.5 0 0 1-1.5 1.5h-.5v-80Z" fill="url(#device-body_svg__a)"></path><path _ngcontent-ng-c2661008953="" d="M296 230h.5a1.5 1.5 0 0 1 1.5 1.5v52a1.5 1.5 0 0 1-1.5 1.5h-.5v-55Z" fill="url(#device-body_svg__b)"></path><defs _ngcontent-ng-c2661008953=""><linearGradient _ngcontent-ng-c2661008953="" id="device-body_svg__a" x1="300" y1="120.571" x2="298" y2="120.571" gradientUnits="userSpaceOnUse"><stop _ngcontent-ng-c2661008953="" stop-color="#343443"></stop><stop _ngcontent-ng-c2661008953="" offset="1" stop-color="#272733"></stop></linearGradient><linearGradient _ngcontent-ng-c2661008953="" id="device-body_svg__b" x1="298" y1="230.393" x2="296" y2="230.393" gradientUnits="userSpaceOnUse"><stop _ngcontent-ng-c2661008953="" stop-color="#343443"></stop><stop _ngcontent-ng-c2661008953="" offset="1" stop-color="#272733"></stop></linearGradient></defs></svg>
        <div>
          <div className='mb-6'>
            <div className='flex gap-4 items-center'>
              <BsX className='text-[#fb6c6c]' />
              <p className={`text-[#fb6c6c] ${inter.className} text-sm`}>Устройство offline</p>
            </div>
            <div className='flex gap-4 items-center'>
              <BsCheck2 className='text-blue-700 font-semibold' />
              <p className={`${inter.className} text-sm text-[#002269]`}>Доступы получены</p>
            </div>
          </div>

          <div className='mb-6 flex flex-col gap-y-1'>
            <p className={`text-[10px] text-[#8091B5] ${inter.className}`}>Версия: <span className='text-[#0052FF]'>1.8.7</span></p>
            <p className={`text-[10px] text-[#8091B5] ${inter.className}`}>Пинг: <span className='text-[#0052FF]'>32 </span> мс</p>
            <p className={`text-[10px] text-[#8091B5] ${inter.className}`}>Тип подключения: <span className='text-[#0052FF]'>Internet</span></p>
          </div>
          <div className='mb-6 flex flex-col gap-y-1'>
            <p className={`text-[10px] text-[#002269] ${inter.className}`}><span className='text-[#0052FF]'>Запущено:</span>Нет данных</p>
            <p className={`text-[10px] text-[#002269] ${inter.className}`}><span className='text-[#0052FF]'>Health-check: </span>Нет данных</p>
          </div>
        </div>
      </div>

      <div className='md:flex hidden gap-5 w-full items-center mt-10'>
        <div className='p-5 mb-5 w-full  border border-[#eef2f9] rounded-[16px] bg-[#FBFCFE] gap-2 h-[118px]'>
          <p className={`${inter.className} text-[#002269] text-[900] text-[18px] mb-6 `}>Последняя активность</p>
          <div className='flex gap-3 items-center mb-4'>
            <svg _ngcontent-ng-c2661008953="" className='w-3 h-3' viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-ng-c2661008953="" d="M6.5 1 2.047 6.344c-.175.21-.262.314-.263.402a.25.25 0 0 0 .093.198C1.945 7 2.082 7 2.354 7H6l-.5 4 4.453-5.344c.175-.21.262-.314.263-.402a.25.25 0 0 0-.093-.198C10.055 5 9.918 5 9.646 5H6l.5-4Z" stroke="#0052FF" strokeWidth="1.25" strokLinecap="round" strokeLinejoin="round"></path></svg>
            <p className={`${inter.className} font-medium text-[#8091B5] text-[16px] `}>Запущено:</p>
            <p className={`${inter.className} text-[#002269] text-[900] text-[16px] `}>Последняя активность</p>
          </div>

        </div>

        <div className='p-5 mb-5 w-full  border border-[#eef2f9] rounded-[16px] bg-[#FBFCFE] gap-2 h-[118px]'>
          <p className={`${inter.className} text-[#002269] text-[900] text-[18px] mb-6 `}>Health-check</p>
          <div className='flex gap-3 items-center mb-4'>
            <svg _ngcontent-ng-c2661008953="" className='w-3 h-3' viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-ng-c2661008953="" d="M6 6 3.864 4.22c-.318-.265-.477-.397-.59-.56a1.5 1.5 0 0 1-.222-.473C3 2.996 3 2.79 3 2.376V1m3 5 2.136-1.78c.318-.265.477-.397.59-.56a1.5 1.5 0 0 0 .222-.473C9 2.996 9 2.79 9 2.376V1M6 6 3.864 7.78c-.318.265-.477.397-.59.56a1.5 1.5 0 0 0-.222.473C3 9.004 3 9.21 3 9.624V11m3-5 2.136 1.78c.318.265.477.397.59.56a1.5 1.5 0 0 1 .222.473C9 9.004 9 9.21 9 9.624V11M2 1h8M2 11h8" stroke="#0052FF" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            <p className={`${inter.className} text-[#002269] text-[900] text-[16px] `}>Нет данных</p>
          </div>
        </div>
      </div>

      <div className='grid md:grid-cols-4 grid-cols-2 gap-5 mb-6 mt-3'>
        <button className='min-w-[176px] rounded-[8px] py-[10px] px-7 bg-[#f8f9fc] hover:bg-[#ebeef8] flex gap-2 items-center justify-center transition duration-300'>
          <svg _ngcontent-ng-c2661008953="" className='w-4 h-4' viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-ng-c2661008953="" d="M15.34 9.67a6.375 6.375 0 0 1-11.861 2.518l-.188-.325M2.66 8.33A6.375 6.375 0 0 1 14.52 5.812l.187.325M2.62 13.55l.549-2.049 2.049.55m7.564-6.1 2.049.55.549-2.05M9 5.625V9l1.875 1.125" stroke="#0052FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
          <p>Сделки</p>
        </button>
        <button className='min-w-[176px] rounded-[8px] py-[10px] px-7 bg-[#f8f9fc] hover:bg-[#ebeef8] flex gap-2 items-center justify-center transition duration-300'>
          <svg _ngcontent-ng-c2661008953="" className='w-4 h-4' viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-ng-c2661008953="" d="m7.125 8.625 1.5 1.5L12 6.75M9.375 15a6.375 6.375 0 1 0-6.043-4.338c.081.241.122.362.13.454a.674.674 0 0 1-.022.244c-.022.09-.073.184-.174.37l-1.227 2.271c-.175.324-.262.486-.243.611a.375.375 0 0 0 .176.262c.108.066.29.047.657.01l3.84-.398c.117-.012.175-.018.228-.016a.666.666 0 0 1 .14.019c.052.012.117.037.247.087a6.36 6.36 0 0 0 2.29.424Z" stroke="#0052FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
          <p>Сообщения</p>
        </button>
        <button className='min-w-[176px] rounded-[8px] py-[10px] px-7 bg-[#f8f9fc] hover:bg-[#ebeef8] flex gap-2 items-center justify-center transition duration-300'>
          <svg _ngcontent-ng-c2661008953="" className='w-4 h-4' viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><g _ngcontent-ng-c2661008953="" clip-path="url(#alert-circle_svg__a)"><path _ngcontent-ng-c2661008953="" d="M9 6v3m0 3h.008M16.5 9a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Z" stroke="#0052FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></g><defs _ngcontent-ng-c2661008953=""><clipPath _ngcontent-ng-c2661008953="" id="alert-circle_svg__a"><path _ngcontent-ng-c2661008953="" fill="#fff" d="M0 0h18v18H0z"></path></clipPath></defs></svg>
          <p>Споры</p>
        </button>
        <button className='min-w-[176px] rounded-[8px] py-[10px] px-7 bg-[#f8f9fc] hover:bg-[#ebeef8] flex gap-2 items-center justify-center transition duration-300'>
          <svg _ngcontent-ng-c2661008953="" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-ng-c2661008953="" d="M9 15H3.9c-.84 0-1.26 0-1.581-.164a1.5 1.5 0 0 1-.656-.655c-.163-.32-.163-.74-.163-1.581V5.4c0-.84 0-1.26.163-1.581a1.5 1.5 0 0 1 .656-.656C2.639 3 3.059 3 3.9 3h.3c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C9 5.28 9 6.12 9 7.8M9 15V7.8M9 15h5.1c.84 0 1.26 0 1.581-.164a1.5 1.5 0 0 0 .656-.655c.163-.32.163-.74.163-1.581V5.4c0-.84 0-1.26-.163-1.581a1.5 1.5 0 0 0-.656-.656C15.361 3 14.941 3 14.1 3h-.3c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C9 5.28 9 6.12 9 7.8" stroke="#0052FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
          <p>События</p>
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
      <div className="flex justify-center border rounded-2xl border-[#eef2f9] items-center h-32 bg-[#fbfcfe] mt-6 mb-28  md:my-6 ">
        <p className={`text-[18px] text-[#8091b5] ${inter.className} leading-5 font-serif`}>Сделки не найдены</p>
      </div>

    </div>
  )
}

export default DevicePage
