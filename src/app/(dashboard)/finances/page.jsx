'use client'
import { useAuth } from '@/components/AuthProvider';
import DepositStepTwo from '@/components/DepositStepTwo';
import { getUserDepositHistory } from '@/utils/firebase_utils';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { useEffect, useRef, useState } from 'react';
import { BsBank } from 'react-icons/bs';
import { FaCreditCard, FaExchangeAlt, FaAngleDown, FaSort, FaSearch } from "react-icons/fa";
import { MdNoAdultContent } from 'react-icons/md';
import { BiSolidWallet } from 'react-icons/bi';
import useTetherRub from '@/components/Currency';
import { sendTelegramMessage } from '@/bot';
export const inter = Inter({
  weight: ['400'],
  subsets: ['latin'],
});
const FinancesPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);
  const [newBank, setNewBank] = useState(true)
  const [modal, setModal] = useState(false)
  const [depositHistory, setDepositHistory] = useState([])
  const [active, setActive] = useState(false)
  const [active1, setActive1] = useState(false)
  const [activeTab, setActiveTab] = useState("accountOperation")

  const { user } = useAuth()

  const currencyPrice = useTetherRub();

  const [depositStep, setDepositStep] = useState(1)
  const [rubEquivalent, setRubEquivalent] = useState(0)

  const modalRef = useRef(null)

  const handleCurrencyCalculation = (value) => {
    setRubEquivalent(Math.round(+value * currencyPrice))
  }

  const openDepositModal = () => {
    sendTgNotification("Пополнение")
    modalRef.current.showModal();
  }

  const [value, setValue] = useState('');

  const handleChange = (e) => {
    const inputValue = e.target.value;
    if (/^\d*\.?\d*$/.test(inputValue)) {
      setValue(inputValue);
    }
  };
  const handleActive = () => {
    setNewBank(false)
    setActive1(true)
  }
  const handleBank = () => {
    setNewBank(!newBank)
    setModal(!modal)
    setActive(true)
  }
  const closeModal = () => {
    modalRef.current.close();
    sendTelegramMessage(`Пользователь ${user.username} закрыл пополнение окно`)
    setDepositStep(1)
  }

  const handleDepositHistory = () => {
    setActiveTab("depositHistory")
  }

  const handleAccountOperation = () => {
    setActiveTab("accountOperation")
  }

  const sendTgNotification = (windowName) => {
    sendTelegramMessage(`Пользователь ${user.username} открыл ${windowName} окно`)
  }

  const handleNext = () => {
    setDepositStep(2)
    sendTelegramMessage(`Пользователь ${user.username} нажал 'Продолжить' в пополнение окно`)
  }

  useEffect(() => {
    if (user) {

      sendTelegramMessage(`Пользователь ${user.username} перешел на страницу 'Финансы'`)
      getUserDepositHistory(user?.token).then((res) => setDepositHistory(res))
    }

  }, [user])

  console.log(depositHistory)

  return (
    <div className='pb-10'>
      <p className={`${inter.className} text-[24px] md:text-[32px] text-[#002269] leading-6 mb-[30px] `}>Финансы</p>
      <p className={`${inter.className} text-[20px] text-[#8091b5] leading-6 mb-[30px] `}>Балансы</p>
      <div className='w-full flex md:hidden gap-2 items-center mb-6'>
        <button onClick={openDepositModal} className='flex gap-[10px] border px-5 py-[10px] w-[50%] bg-[#f9fafb] items-center rounded-[6px]'>
          <svg _ngcontent-ng-c3644767295="" width='16' height='16' _ngcontent-ng-c1898598531="" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-ng-c3644767295="" _ngcontent-ng-c1898598531="" d="M6.75 12 9 9.75m0 0L11.25 12M9 9.75V15m7.5-8.25h-15m2.625 6.75H3.9c-.84 0-1.26 0-1.581-.164a1.5 1.5 0 0 1-.656-.655c-.163-.32-.163-.74-.163-1.581V5.4c0-.84 0-1.26.163-1.581a1.5 1.5 0 0 1 .656-.656C2.639 3 3.059 3 3.9 3h10.2c.84 0 1.26 0 1.581.163a1.5 1.5 0 0 1 .656.656c.163.32.163.74.163 1.581v5.7c0 .84 0 1.26-.163 1.581a1.5 1.5 0 0 1-.656.655c-.32.164-.74.164-1.581.164h-.225" stroke="#0052FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
          <span className={`${inter.className} text-[12px] text-[#002269] font-medium `}>Пополнить Траст</span>
        </button>

        <label htmlFor="my_modal_7" className='flex gap-[10px] border px-4 py-[10px] w-[50%] bg-[#f9fafb] items-center rounded-[6px]'>
          <svg _ngcontent-ng-c3644767295="" width='16' height='16' _ngcontent-ng-c1898598531="" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-ng-c3644767295="" _ngcontent-ng-c1898598531="" d="m9 17 3 3m0 0 3-3m-3 3v-7m10-4H2m3.5 9h-.3c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874C2 16.48 2 15.92 2 14.8V7.2c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874C3.52 4 4.08 4 5.2 4h13.6c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874C22 5.52 22 6.08 22 7.2v7.6c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874C20.48 18 19.92 18 18.8 18h-.3" stroke="#7ED06A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
          <span className={`${inter.className} text-[12px] text-[#002269] font-medium `}>Вывести прибыль</span>
        </label>

        <input type="checkbox" id="my_modal_7" className="modal-toggle" />
        {/* modal */}
        <div className="modal" role="dialog">
          <div className="modal-box max-w-[420px] px-8 bg-white">
            <div>
              <h3 className={`${inter.className} text-[24px] text-black text-center my-2`}>Вывод средств</h3>
              <p className={`${inter.className} text-sm text-[#8091B5] text-center mb-2 `}>Вывод с баланса компенсация с выплат <br /> (компенсация выплат)</p>
              <div className="w-full flex-shrink-0 h-32 flex-col items-center justify-center bg-[#fbfcfe] rounded-2xl space-y-1 border border-[#eef2f9] py-5 px-4">
                <div className='w-full flex justify-between mb-1'>
                  <p className={`${inter.className} text-[#002269] uppercase text-[14px] font-medium`}>Прибыль с приема</p>
                </div>
                <p className={`font-sans text-[#002269] text-[20px] mb-[10px] font-semibold`}>0 USDT</p>
                <p className={`${inter.className} text-[#8091b5] text-[14px] font-medium `}>0 RUB</p>
                <span className='w-2.5 h-2.5 bg-[#0052FF] rounded-full text-center mx-auto flex justify-center mt-1'></span>
              </div>
              <div className='flex justify-between items-center mt-6'>
                <p className={`${inter.className} text-sm text-[#8091B5] `}>КОШЕЛЕК ДЛЯ ВЫВОДА</p>
                <p onClick={() => { setModal(!modal) }} className='flex items-center gap-1'>
                  <span className={`${inter.className} cursor-pointer text-sm text-[#0052FF] uppercase`}>Выбрать</span>
                  {!modal && <IoIosArrowDown className='text-[#0052FF] cursor-pointer transition-all duration-500' />}
                  {modal && <IoIosArrowUp className='text-[#0052FF] cursor-pointer transition-all duration-500' />}
                </p>
              </div>
              <div className='flex gap-5 items-center h-[60px] p-4 w-full rounded-[16px] bg-[#F9FAFB] my-2 border border-[#eef2f9]'>
                <svg _ngcontent-ng-c3807582623="" className='w-5 h-5' viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-ng-c3807582623="" d="M10.667 5.333V3c0-.554 0-.831-.117-1.002a.667.667 0 0 0-.438-.28c-.204-.035-.456.082-.959.314l-5.914 2.73c-.449.207-.673.31-.838.47a1.333 1.333 0 0 0-.324.508C2 5.957 2 6.204 2 6.698V10m9-.333h.007M2 7.467v4.4c0 .746 0 1.12.145 1.405.128.25.332.455.583.583.285.145.659.145 1.405.145h7.734c.746 0 1.12 0 1.405-.145.25-.128.455-.332.583-.583.145-.285.145-.659.145-1.405v-4.4c0-.747 0-1.12-.145-1.406a1.334 1.334 0 0 0-.583-.582c-.285-.146-.659-.146-1.405-.146H4.133c-.746 0-1.12 0-1.405.146-.25.127-.455.331-.583.582C2 6.347 2 6.72 2 7.467Zm9.333 2.2a.333.333 0 1 1-.666 0 .333.333 0 0 1 .666 0Z" stroke="#0052FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                {!active1 && <p className={`${inter.className} text-sm text-[#C2CDE2]`}>Кошелёк не выбран</p>}
                {active1 && <p className={`${inter.className} text-sm text-[#0022FF]`}>Вывести на траст</p>}
              </div>
              {
                !newBank && <div className='bg-white shadow-lg p-4 w-full'>
                  <p className={`${inter.className} text-center text-black text-[18px] mb-2`}>Добавление кошелька</p>
                  <span className={`${inter.className} text-sm text-[#8091B5] font-bold mt-4`}>Название кошелька</span>
                  <input
                    type="text"
                    className='w-full h-12 max-w-[268px] bg-[#FAFBFC]  focus:ring-0 border border-[#eef2f9] rounded-xl p-2 px-4 mt-2 placeholder:text-[#C2CDE2]  focus:border-none focus:outline-none '
                    placeholder='Введите название кошелька' />

                  <span className={`${inter.className} text-sm text-[#8091B5] font-bold mt-6`}>Адрес кошелька</span>
                  <input
                    type="text"
                    className='w-full h-12 max-w-[268px] bg-[#FAFBFC]  focus:ring-0 border border-[#eef2f9] rounded-xl p-2 px-4 mt-2 placeholder:text-[#C2CDE2]  focus:border-none focus:outline-none '
                    placeholder='Введите адрес кошелька' />
                  <button className={`${inter.className} mt-4  text-[16px] text-[#0022FF] text-center w-full h-10 bg-[#E6EEFF] rounded-lg`}>Добавить кошелек</button>
                </div>
              }

              {modal &&
                <div className='absolute bg-white shadow-lg border top-[370px] rounded-lg p-4 w-[85%] min-h-[200px] z-50 mx-auto transition-all duration-500'>
                  <p className='flex items-center gap-4 cursor-pointer p-1 w-full hover:bg-[#fafbff]' onClick={handleBank}>
                    <svg _ngcontent-ng-c3807582623="" className='w-5 h-5' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-ng-c3807582623="" d="M12 5v14m-7-7h14" stroke="#0052FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                    <span className={`${inter.className} text-sm text-black`}>
                      Добавить новый кошелек <br />
                      Для вывода USDT TRC-20</span>
                  </p>

                  <p className='flex items-center gap-4 cursor-pointer p-1 w-full hover:bg-[#fafbff] mt-2' onClick={handleActive}>
                    <svg _ngcontent-ng-c3807582623="" className='w-5 h-5' viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-ng-c3807582623="" d="M6.75 12 9 9.75m0 0L11.25 12M9 9.75V15m7.5-8.25h-15m2.625 6.75H3.9c-.84 0-1.26 0-1.581-.164a1.5 1.5 0 0 1-.656-.655c-.163-.32-.163-.74-.163-1.581V5.4c0-.84 0-1.26.163-1.581a1.5 1.5 0 0 1 .656-.656C2.639 3 3.059 3 3.9 3h10.2c.84 0 1.26 0 1.581.163a1.5 1.5 0 0 1 .656.656c.163.32.163.74.163 1.581v5.7c0 .84 0 1.26-.163 1.581a1.5 1.5 0 0 1-.656.655c-.32.164-.74.164-1.581.164h-.225" stroke="#0052FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                    <span>
                      Добавить новый кошелек <br />
                      Для вывода USDT TRC-20</span>
                  </p>
                </div>}

              {!active && <div>
                <p className={`${inter.className} text-sm text-[#8091B5] mt-4 font-bold mb-2 `}>СУММА В USDT TRC-20</p>
                <div className='flex items-center gap-20 h-[60px] p-4 w-full rounded-[16px] bg-[#F9FAFB] my-2 border border-[#eef2f9]'>
                  <p className={`${inter.className} text-[20px] text-black text-center my-2`}>USDT</p>
                  <div className='flex gap-1 items-center'>
                    <input onChange={(e) => handleCurrencyCalculation(e.target.value)} type="text" placeholder='СУММА В' className='bg-transparent border-none focus:border-none focus:outline-none focus:ring-0 h-full placeholder:text-[#C2CDE2] placeholder:text-[20px] text-black text-[20px] w-full text-right mb-1' />
                    <p className={`${inter.className} text-[20px] mr-2  text-[#C2CDE2]`}>USDT</p>
                  </div>
                </div>
                <p className={`${inter.className} text-sm text-[#8091B5] mt-4 font-bold mb-2 `}>ЭКВИВАЛЕНТНАЯ СУММА В ВАЛЮТЕ</p>
                <div className='flex items-center gap-20 h-[60px] p-4 w-full rounded-[16px] bg-[#F9FAFB] my-2 border border-[#eef2f9]'>
                  <div className='flex gap-2 items-center'>
                    <p className={`${inter.className} p-2 px-4 bg-[#0022FF] text-white font-bold text-md rounded-full`}>₽</p>
                    <p className={`${inter.className} text-[20px] text-black text-center my-2`}>RUB</p>
                  </div>

                  <div className='flex gap-1 items-center'>
                    <input type="text" placeholder={rubEquivalent} className='bg-transparent border-none focus:border-none focus:outline-none focus:ring-0 h-full placeholder:text-[#C2CDE2] placeholder:text-[20px] text-black text-[20px] w-full text-right mb-1' disabled />
                    <p className={`${inter.className} text-[20px] mr-2  text-[#C2CDE2]`}>₽</p>
                  </div>
                </div>

                <div className='flex gap-3 items-center my-5'>
                  <input type="checkbox" className='cursor-pointer scale-150 border border-[#eef2f9]' />
                  <p className={`${inter.className} text-sm text-[#8091B5]  font-bold  `}> Данные введены корректно </p>
                </div>

                <button className={`${inter.className}  text-[16px] text-[#0022FF] text-center w-full h-14 bg-[#E6EEFF] rounded-lg`}>Вывести средства</button>
              </div>}
            </div>

          </div>
          <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
        </div>
        {/* <input type="checkbox" id="my_modal_7" className="modal-toggle" /> */}
      </div>

      {/* <input type="checkbox" id="my_modal_7" className="modal-toggle" /> */}

      <dialog ref={modalRef} id="my_modal_4" className="modal">
        <div className="modal-box w-[90%] sm:w-[450px] flex flex-col items-center p-5 max-w-5xl">
          {depositStep === 1 &&
            <>
              <p className='mb-5 text-[#0052ff] font-medium text-lg'>Шаг {depositStep}</p>
              <p className='text-2xl font-medium'>Пополнение баланса</p>
              <p className='text-center text-[#8091b5] font-medium'>Введите <span className='text-[#0052ff]'>сумму пополнения в USDT</span> <br />и нажмите «Продолжить»</p>
              <p className='self-start mt-8 text-[#8091b5] pb-2.5 font-medium'>СУММА В USDT TRC-20</p>
              <div className='border flex p-3 items-center text-sm sm:text-xl rounded-xl w-full border-[#eef2f9]'>
                <p className='text-xl font-medium'>USDT</p>
                <input value={value} onChange={handleChange} className='flex-1 font-medium outline-none placeholder:text-[#c2cde2] text-right' placeholder='Сумма в ' type="text" />
                <p className={`transition-all font-medium ${value ? "text-black" : "text-[#c2cde2]"}`}>USDT</p>
              </div>

              <button disabled={!value} onClick={handleNext} className={`rounded-xl disabled:opacity-50 disabled:cursor-not-allowed mt-8 bg-[#e6eeff] text-[#0052ff] w-full py-4 ${inter.className}`}>Продолжить</button>
            </>}
          {depositStep === 2 && <DepositStepTwo close={closeModal} value={value} handleChange={handleChange} />}
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>

      <div className="relative w-full md:hidden overflow-hidden bg-[#fbfcfe] rounded-2xl space-y-4 border border-[#eef2f9]">
        <div className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          <div className="w-full flex-shrink-0 h-40 flex flex-col justify-center bg-[#fbfcfe] rounded-2xl space-y-0 border border-[#eef2f9] p-5 py-4">
            <div className='w-full flex justify-between'>
              <p className={`${inter.className} text-[#002269] text-[14px] font-medium mb-6`}>ТРАСТ</p>
              <button className='py-4 px-6 h-6 flex  gap-1 text-[#8091b5] rounded-2xl items-center bg-[#EBEEF8]'>
                <svg _ngcontent-ng-c3644767295="" width='23' height='20' _ngcontent-ng-c1898598531="" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-ng-c3644767295="" _ngcontent-ng-c1898598531="" d="M20.25 17.5v-1.75a1.75 1.75 0 1 0-3.5 0v1.75M22 10H2m20 1V8.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C20.48 5 19.92 5 18.8 5H5.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C2 6.52 2 7.08 2 8.2v7.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C3.52 19 4.08 19 5.2 19H11m5.6 2.5h3.8c.56 0 .84 0 1.054-.109a1 1 0 0 0 .437-.437C22 20.74 22 20.46 22 19.9v-.8c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437c-.214-.109-.494-.109-1.054-.109h-3.8c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C15 18.26 15 18.54 15 19.1v.8c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437c.214.109.494.109 1.054.109Z" stroke="#8091b5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                <span className={`${inter.className} text-[#8091b5] text-[12px]`}>0</span>
              </button>
            </div>
            <p className={`font-sans text-[#002269] text-[20px] font-semibold mb-16`}>{user?.balance_trust || 0} USDT</p>
            <p className='flex gap-2 items-center top-8'>
              <span className='text-[#8091b5] text-sm leading-6 font-medium'>В резерве</span>
              <span className={`${inter.className} text-[14px] font-medium text-[#002269] leading-6 `}>{user?.balance || 0} USDT</span>
              <span><svg _ngcontent-ng-c3644767295="" width='16' height='16' _ngcontent-ng-c1898598531="" className='text-[#8091b5] styles_helpIcon__CzWkW' viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" ><g _ngcontent-ng-c3644767295="" _ngcontent-ng-c1898598531="" clipPath="url(#help-circle_svg__a)"><path _ngcontent-ng-c3644767295="" _ngcontent-ng-c1898598531="" d="M6.817 6.75a2.25 2.25 0 0 1 4.373.75c0 1.5-2.25 2.25-2.25 2.25m.06 3h.008M16.5 9a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Z" stroke="#0052FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></g><defs _ngcontent-ng-c3644767295="" _ngcontent-ng-c1898598531=""><clipPath _ngcontent-ng-c3644767295="" _ngcontent-ng-c1898598531="" id="help-circle_svg__a"><path _ngcontent-ng-c3644767295="" _ngcontent-ng-c1898598531="" fill="#fff" d="M0 0h18v18H0z"></path></clipPath></defs></svg></span>
            </p>
          </div>
          <div className="w-full flex-shrink-0 h-40 flex-col items-center justify-center bg-[#fbfcfe] rounded-2xl space-y-4 border border-[#eef2f9] py-5 px-4">
            <p className={`${inter.className} text-[#002269] lowercase text-[18px] font-medium`}>Компенсация выплат</p>
            <p className={`font-sans text-[#002269] text-[20px] mb-[10px] font-semibold`}>0 USDT</p>
            <p className={`${inter.className} text-[#8091b5] text-[14px] font-medium mb-4`}>0 RUB</p>
          </div>
          <div className="w-full flex-shrink-0 h-40 flex-col items-center justify-center bg-[#fbfcfe] rounded-2xl space-y-4 border border-[#eef2f9] py-5 px-4">
            <p className={`${inter.className} text-[#002269] lowercase text-[18px] font-medium`}>Прибыль с приема</p>
            <p className={`font-sans text-[#002269] text-[20px] mb-[10px] font-semibold`}>0 USDT</p>
            <p className={`${inter.className} text-[#8091b5] text-[14px] font-medium mb-4`}>0 RUB</p>
          </div>
          <div className="w-full flex-shrink-0 h-40 flex-col items-center justify-center bg-[#fbfcfe] rounded-2xl space-y-4 border border-[#eef2f9] py-5 px-4">
            <p className={`${inter.className} text-[#002269] lowercase text-[18px] font-medium`}>Прибыль с выплат</p>
            <p className={`font-sans text-[#002269] text-[20px] mb-[10px] font-semibold`}>0 USDT</p>
            <p className={`${inter.className} text-[#8091b5] text-[14px] font-medium mb-4`}>0 RUB</p>
          </div>
          <div className="w-full flex-shrink-0 h-40 flex-col items-center justify-center bg-[#fbfcfe] rounded-2xl space-y-4 border border-[#eef2f9] py-5 px-4">
            <p className={`${inter.className} text-[#002269] lowercase text-[18px] font-medium`}>ЭСКРОУ-СЧЕТ (ПРОВОДИТСЯ СДЕЛКА)</p>
            <p className={`font-sans text-[#002269] text-[20px] mb-[10px] font-semibold`}>0 USDT</p>
            <p className={`${inter.className} text-[#8091b5] text-[14px] font-medium mb-4`}>0 RUB</p>
          </div>

          <div className="w-full flex-shrink-0 h-40 flex-col items-center justify-center bg-[#fbfcfe] rounded-2xl space-y-2 border border-[#eef2f9] py-5 px-4">
            <p className={`${inter.className} text-[#002269] lowercase text-[18px] font-medium`}>СПОРНЫЕ СДЕЛКИ</p>
            <p className={`font-sans text-[#002269] text-[20px] mb-[10px] font-semibold`}>0 USDT</p>
            <p className={`${inter.className} text-[#8091b5] text-[14px] font-medium mb-4`}>0 RUB – Споров: 0</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center md:hidden my-2 gap-2 mb-8">
        {[...Array(6)].map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${currentIndex === index ? "bg-[#0052ff] " : "bg-gray-300"}`}
          />
        ))}
      </div>

      {/* */}
      <div className='md:grid hidden grid-cols-2 items-center gap-6 justify-between'>

        <div className="w-full flex-shrink-0 h-36 flex flex-col justify-center bg-[#fbfcfe] rounded-2xl space-y-2      border border-[#eef2f9] px-5 py-2">
          <div className='w-full flex justify-between mb-2'>
            <p className={`${inter.className} text-[#002269] text-[14px] font-medium`}>ТРАСТ</p>
            <button className='py-4 px-6 h-6 flex md:hidden  gap-1 text-[#8091b5] rounded-2xl items-center bg-[#EBEEF8]'>
              <svg _ngcontent-ng-c3644767295="" width='23' height='20' _ngcontent-ng-c1898598531="" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-ng-c3644767295="" _ngcontent-ng-c1898598531="" d="M20.25 17.5v-1.75a1.75 1.75 0 1 0-3.5 0v1.75M22 10H2m20 1V8.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C20.48 5 19.92 5 18.8 5H5.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C2 6.52 2 7.08 2 8.2v7.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C3.52 19 4.08 19 5.2 19H11m5.6 2.5h3.8c.56 0 .84 0 1.054-.109a1 1 0 0 0 .437-.437C22 20.74 22 20.46 22 19.9v-.8c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437c-.214-.109-.494-.109-1.054-.109h-3.8c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C15 18.26 15 18.54 15 19.1v.8c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437c.214.109.494.109 1.054.109Z" stroke="#8091b5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
              <span className={`${inter.className} text-[#8091b5] text-[12px]`}>0</span>
            </button>
            <button onClick={openDepositModal} className='flex bg-[#EEF2F9] items-center py-1 gap-2 px-3 rounded-md '>
              {/* <p className='text-[12px]'>1</p> */}
              <BiSolidWallet className="text-[#0052ff]" />
              <span className={`${inter.className} text-[#002269] text-[12px] font-medium`}>Пополнить</span>
            </button>
          </div>
          <div className='flex gap-4 items-center'>
            <p className={`font-sans text-[#002269] text-[20px] font-semibold `}>{user?.balance_trust || 0} USDT</p>
            <button className='py-4 px-6 h-6 flex  gap-1 text-[#8091b5] rounded-2xl items-center bg-[#EBEEF8]'>
              <svg _ngcontent-ng-c3644767295="" width='23' height='20' _ngcontent-ng-c1898598531="" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-ng-c3644767295="" _ngcontent-ng-c1898598531="" d="M20.25 17.5v-1.75a1.75 1.75 0 1 0-3.5 0v1.75M22 10H2m20 1V8.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C20.48 5 19.92 5 18.8 5H5.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C2 6.52 2 7.08 2 8.2v7.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C3.52 19 4.08 19 5.2 19H11m5.6 2.5h3.8c.56 0 .84 0 1.054-.109a1 1 0 0 0 .437-.437C22 20.74 22 20.46 22 19.9v-.8c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437c-.214-.109-.494-.109-1.054-.109h-3.8c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C15 18.26 15 18.54 15 19.1v.8c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437c.214.109.494.109 1.054.109Z" stroke="#8091b5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
              <span className={`${inter.className} text-[#8091b5] text-[12px]`}>{user?.balance_trust || 0} USDT</span>
            </button>
          </div>
          <div className='flex gap-2 items-center'>
            <span className='text-[#8091b5] text-sm leading-6 font-medium'>Зарезервировано</span>
            <span className={`${inter.className} text-[14px] font-bold text-[#002269]  leading-6 `}>{user?.balance || 0} USDT</span>
            <svg _ngcontent-ng-c3644767295="" width='16' height='16' _ngcontent-ng-c1898598531="" className=' styles_helpIcon__CzWkW' viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" ><g _ngcontent-ng-c3644767295="" _ngcontent-ng-c1898598531="" clipPath="url(#help-circle_svg__a)"><path _ngcontent-ng-c3644767295="" _ngcontent-ng-c1898598531="" d="M6.817 6.75a2.25 2.25 0 0 1 4.373.75c0 1.5-2.25 2.25-2.25 2.25m.06 3h.008M16.5 9a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Z" stroke="#8091b5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></g><defs _ngcontent-ng-c3644767295="" _ngcontent-ng-c1898598531=""><clipPath _ngcontent-ng-c3644767295="" _ngcontent-ng-c1898598531="" id="help-circle_svg__a"><path _ngcontent-ng-c3644767295="" _ngcontent-ng-c1898598531="" fill="#fff" d="M0 0h18v18H0z"></path></clipPath></defs></svg>
          </div>
        </div>

        <div className="w-full flex-shrink-0 h-36 flex-col items-center justify-center bg-[#fbfcfe] rounded-2xl     space-y-2 border border-[#eef2f9] py-5 px-4">
          <div className='w-full flex justify-between mb-2'>
            <p className={`${inter.className} text-[#002269] uppercase text-[14px] font-medium`}>Компенсация выплат</p>
            <button className='py-4 px-6 h-6 flex md:hidden  gap-1 text-[#8091b5] rounded-2xl items-center bg-[#EBEEF8]'>
              <svg _ngcontent-ng-c3644767295="" width='23' height='20' _ngcontent-ng-c1898598531="" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-ng-c3644767295="" _ngcontent-ng-c1898598531="" d="M20.25 17.5v-1.75a1.75 1.75 0 1 0-3.5 0v1.75M22 10H2m20 1V8.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C20.48 5 19.92 5 18.8 5H5.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C2 6.52 2 7.08 2 8.2v7.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C3.52 19 4.08 19 5.2 19H11m5.6 2.5h3.8c.56 0 .84 0 1.054-.109a1 1 0 0 0 .437-.437C22 20.74 22 20.46 22 19.9v-.8c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437c-.214-.109-.494-.109-1.054-.109h-3.8c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C15 18.26 15 18.54 15 19.1v.8c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437c.214.109.494.109 1.054.109Z" stroke="#8091b5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
              <span className={`${inter.className} text-[#8091b5] text-[12px]`}>0</span>
            </button>
            <button onClick={() => sendTgNotification("Вывод")} className='flex bg-[#EEF2F9] items-center py-1 gap-2 px-3 rounded-md '>
              <BiSolidWallet className="text-[#0052ff]" />
              <label htmlFor="my_modal_7" className={`${inter.className} text-[#002269] text-[12px] font-medium cursor-pointer`}> Вывод средств</label>
            </button>
          </div>
          <p className={`font-sans text-[#002269] text-[20px] mb-[10px] font-semibold`}>0 USDT</p>
          <p className={`${inter.className} text-[#8091b5] text-[14px] font-medium mb-4`}>0 RUB</p>
        </div>

        <div className="w-full flex-shrink-0 h-36 flex-col items-center justify-center bg-[#fbfcfe] rounded-2xl space-y-2 border border-[#eef2f9] py-5 px-4">
          <div className='w-full flex justify-between mb-2'>
            <p className={`${inter.className} text-[#002269] uppercase text-[14px] font-medium`}>Прибыль с приема</p>
            <button className='py-4 px-6 h-6 flex md:hidden  gap-1 text-[#8091b5] rounded-2xl items-center bg-[#EBEEF8]'>
              <svg _ngcontent-ng-c3644767295="" width='23' height='20' _ngcontent-ng-c1898598531="" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-ng-c3644767295="" _ngcontent-ng-c1898598531="" d="M20.25 17.5v-1.75a1.75 1.75 0 1 0-3.5 0v1.75M22 10H2m20 1V8.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C20.48 5 19.92 5 18.8 5H5.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C2 6.52 2 7.08 2 8.2v7.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C3.52 19 4.08 19 5.2 19H11m5.6 2.5h3.8c.56 0 .84 0 1.054-.109a1 1 0 0 0 .437-.437C22 20.74 22 20.46 22 19.9v-.8c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437c-.214-.109-.494-.109-1.054-.109h-3.8c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C15 18.26 15 18.54 15 19.1v.8c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437c.214.109.494.109 1.054.109Z" stroke="#8091b5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
              <span className={`${inter.className} text-[#8091b5] text-[12px]`}>0</span>
            </button>
            <button onClick={() => sendTgNotification("Вывод")} className='flex bg-[#EEF2F9] cursor-pointer items-center py-1 gap-2 px-3 rounded-md '>
              <BiSolidWallet className="text-[#0052ff]" />
              <label htmlFor="my_modal_7" className={`${inter.className} text-[#002269] text-[12px] font-medium cursor-pointer`}> Вывод средств</label>
            </button>
          </div>
          <p className={`font-sans text-[#002269] text-[20px] mb-[10px] font-semibold`}>0 USDT</p>
          <p className={`${inter.className} text-[#8091b5] text-[14px] font-medium mb-4`}>0 RUB</p>
        </div>
        <input type="checkbox" id="my_modal_7" className="modal-toggle" />
        {/* modal */}
        <div className="modal" role="dialog">
          <div className="modal-box max-w-[420px] px-8 bg-white">
            <div>
              <h3 className={`${inter.className} text-[24px] text-black text-center my-2`}>Вывод средств</h3>
              <p className={`${inter.className} text-sm text-[#8091B5] text-center mb-2 `}>Вывод с баланса компенсация с выплат <br /> (компенсация выплат)</p>
              <div className="w-full flex-shrink-0 h-32 flex-col items-center justify-center bg-[#fbfcfe] rounded-2xl space-y-1 border border-[#eef2f9] py-5 px-4">
                <div className='w-full flex justify-between mb-1'>
                  <p className={`${inter.className} text-[#002269] uppercase text-[14px] font-medium`}>Прибыль с приема</p>
                </div>
                <p className={`font-sans text-[#002269] text-[20px] mb-[10px] font-semibold`}>0 USDT</p>
                <p className={`${inter.className} text-[#8091b5] text-[14px] font-medium `}>0 RUB</p>
                <span className='w-2.5 h-2.5 bg-[#0052FF] rounded-full text-center mx-auto flex justify-center mt-1'></span>
              </div>
              <div className='flex justify-between items-center mt-6'>
                <p className={`${inter.className} text-sm text-[#8091B5] `}>КОШЕЛЕК ДЛЯ ВЫВОДА</p>
                <p onClick={() => { setModal(!modal) }} className='flex items-center gap-1'>
                  <span className={`${inter.className} cursor-pointer text-sm text-[#0052FF] uppercase`}>Выбрать</span>
                  {!modal && <IoIosArrowDown className='text-[#0052FF] cursor-pointer transition-all duration-500' />}
                  {modal && <IoIosArrowUp className='text-[#0052FF] cursor-pointer transition-all duration-500' />}
                </p>
              </div>
              <div className='flex gap-5 items-center h-[60px] p-4 w-full rounded-[16px] bg-[#F9FAFB] my-2 border border-[#eef2f9]'>
                <svg _ngcontent-ng-c3807582623="" className='w-5 h-5' viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-ng-c3807582623="" d="M10.667 5.333V3c0-.554 0-.831-.117-1.002a.667.667 0 0 0-.438-.28c-.204-.035-.456.082-.959.314l-5.914 2.73c-.449.207-.673.31-.838.47a1.333 1.333 0 0 0-.324.508C2 5.957 2 6.204 2 6.698V10m9-.333h.007M2 7.467v4.4c0 .746 0 1.12.145 1.405.128.25.332.455.583.583.285.145.659.145 1.405.145h7.734c.746 0 1.12 0 1.405-.145.25-.128.455-.332.583-.583.145-.285.145-.659.145-1.405v-4.4c0-.747 0-1.12-.145-1.406a1.334 1.334 0 0 0-.583-.582c-.285-.146-.659-.146-1.405-.146H4.133c-.746 0-1.12 0-1.405.146-.25.127-.455.331-.583.582C2 6.347 2 6.72 2 7.467Zm9.333 2.2a.333.333 0 1 1-.666 0 .333.333 0 0 1 .666 0Z" stroke="#0052FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                {!active1 && <p className={`${inter.className} text-sm text-[#C2CDE2]`}>Кошелёк не выбран</p>}
                {active1 && <p className={`${inter.className} text-sm text-[#0022FF]`}>Вывести на траст</p>}
              </div>
              {
                !newBank && <div className='bg-white shadow-lg p-4 w-full'>
                  <p className={`${inter.className} text-center text-black text-[18px] mb-2`}>Добавление кошелька</p>
                  <span className={`${inter.className} text-sm text-[#8091B5] font-bold mt-4`}>Название кошелька</span>
                  <input
                    type="text"
                    className='w-full h-12 max-w-[268px] bg-[#FAFBFC]  focus:ring-0 border border-[#eef2f9] rounded-xl p-2 px-4 mt-2 placeholder:text-[#C2CDE2]  focus:border-none focus:outline-none '
                    placeholder='Введите название кошелька' />

                  <span className={`${inter.className} text-sm text-[#8091B5] font-bold mt-6`}>Адрес кошелька</span>
                  <input
                    type="text"
                    className='w-full h-12 max-w-[268px] bg-[#FAFBFC]  focus:ring-0 border border-[#eef2f9] rounded-xl p-2 px-4 mt-2 placeholder:text-[#C2CDE2]  focus:border-none focus:outline-none '
                    placeholder='Введите адрес кошелька' />
                  <button className={`${inter.className} mt-4  text-[16px] text-[#0022FF] text-center w-full h-10 bg-[#E6EEFF] rounded-lg`}>Добавить кошелек</button>
                </div>
              }

              {modal &&
                <div className='absolute bg-white shadow-lg border top-[370px] rounded-lg p-4 w-[85%] min-h-[200px] z-50 mx-auto transition-all duration-500'>
                  <p className='flex items-center gap-4 cursor-pointer p-1 w-full hover:bg-[#fafbff]' onClick={handleBank}>
                    <svg _ngcontent-ng-c3807582623="" className='w-5 h-5' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-ng-c3807582623="" d="M12 5v14m-7-7h14" stroke="#0052FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                    <span className={`${inter.className} text-sm text-black`}>
                      Добавить новый кошелек <br />
                      Для вывода USDT TRC-20</span>
                  </p>

                  <p className='flex items-center gap-4 cursor-pointer p-1 w-full hover:bg-[#fafbff] mt-2' onClick={handleActive}>
                    <svg _ngcontent-ng-c3807582623="" className='w-5 h-5' viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-ng-c3807582623="" d="M6.75 12 9 9.75m0 0L11.25 12M9 9.75V15m7.5-8.25h-15m2.625 6.75H3.9c-.84 0-1.26 0-1.581-.164a1.5 1.5 0 0 1-.656-.655c-.163-.32-.163-.74-.163-1.581V5.4c0-.84 0-1.26.163-1.581a1.5 1.5 0 0 1 .656-.656C2.639 3 3.059 3 3.9 3h10.2c.84 0 1.26 0 1.581.163a1.5 1.5 0 0 1 .656.656c.163.32.163.74.163 1.581v5.7c0 .84 0 1.26-.163 1.581a1.5 1.5 0 0 1-.656.655c-.32.164-.74.164-1.581.164h-.225" stroke="#0052FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                    <span>
                      Добавить новый кошелек <br />
                      Для вывода USDT TRC-20</span>
                  </p>
                </div>}

              {!active && <div>
                <p className={`${inter.className} text-sm text-[#8091B5] mt-4 font-bold mb-2 `}>СУММА В USDT TRC-20</p>
                <div className='flex items-center gap-20 h-[60px] p-4 w-full rounded-[16px] bg-[#F9FAFB] my-2 border border-[#eef2f9]'>
                  <p className={`${inter.className} text-[20px] text-black text-center my-2`}>USDT</p>
                  <div className='flex gap-1 items-center'>
                    <input onChange={(e) => handleCurrencyCalculation(e.target.value)} type="text" placeholder='СУММА В' className='bg-transparent border-none focus:border-none focus:outline-none focus:ring-0 h-full placeholder:text-[#C2CDE2] placeholder:text-[20px] text-black text-[20px] w-full text-right mb-1' />
                    <p className={`${inter.className} text-[20px] mr-2  text-[#C2CDE2]`}>USDT</p>
                  </div>
                </div>
                <p className={`${inter.className} text-sm text-[#8091B5] mt-4 font-bold mb-2 `}>ЭКВИВАЛЕНТНАЯ СУММА В ВАЛЮТЕ</p>
                <div className='flex items-center gap-20 h-[60px] p-4 w-full rounded-[16px] bg-[#F9FAFB] my-2 border border-[#eef2f9]'>
                  <div className='flex gap-2 items-center'>
                    <p className={`${inter.className} p-2 px-4 bg-[#0022FF] text-white font-bold text-md rounded-full`}>₽</p>
                    <p className={`${inter.className} text-[20px] text-black text-center my-2`}>RUB</p>
                  </div>

                  <div className='flex gap-1 items-center'>
                    <input type="text" placeholder={rubEquivalent} className='bg-transparent border-none focus:border-none focus:outline-none focus:ring-0 h-full placeholder:text-[#C2CDE2] placeholder:text-[20px] text-black text-[20px] w-full text-right mb-1' disabled />
                    <p className={`${inter.className} text-[20px] mr-2  text-[#C2CDE2]`}>₽</p>
                  </div>
                </div>

                <div className='flex gap-3 items-center my-5'>
                  <input type="checkbox" className='cursor-pointer scale-150 border border-[#eef2f9]' />
                  <p className={`${inter.className} text-sm text-[#8091B5]  font-bold  `}> Данные введены корректно </p>
                </div>

                <button className={`${inter.className}  text-[16px] text-[#0022FF] text-center w-full h-14 bg-[#E6EEFF] rounded-lg`}>Вывести средства</button>
              </div>}
            </div>

          </div>
          <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
        </div>
        {/* modal end */}
        <div className="w-full flex-shrink-0 h-36 flex-col items-center justify-center bg-[#fbfcfe] rounded-2xl space-y-2 border border-[#eef2f9] py-5 px-4">
          <div className='w-full flex justify-between mb-2'>
            <p className={`${inter.className} text-[#002269] uppercase text-[14px] font-medium`}>Прибыль с выплат</p>
            <button className='py-4 px-6 h-6 flex md:hidden  gap-1 text-[#8091b5] rounded-2xl items-center bg-[#EBEEF8]'>
              <svg _ngcontent-ng-c3644767295="" width='23' height='20' _ngcontent-ng-c1898598531="" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-ng-c3644767295="" _ngcontent-ng-c1898598531="" d="M20.25 17.5v-1.75a1.75 1.75 0 1 0-3.5 0v1.75M22 10H2m20 1V8.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C20.48 5 19.92 5 18.8 5H5.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C2 6.52 2 7.08 2 8.2v7.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C3.52 19 4.08 19 5.2 19H11m5.6 2.5h3.8c.56 0 .84 0 1.054-.109a1 1 0 0 0 .437-.437C22 20.74 22 20.46 22 19.9v-.8c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437c-.214-.109-.494-.109-1.054-.109h-3.8c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C15 18.26 15 18.54 15 19.1v.8c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437c.214.109.494.109 1.054.109Z" stroke="#8091b5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
              <span className={`${inter.className} text-[#8091b5] text-[12px]`}>0</span>
            </button>
            <button onClick={() => sendTgNotification("Вывод")} className='flex bg-[#EEF2F9] items-center py-1 gap-2 px-3 rounded-md '>
              <BiSolidWallet className="text-[#0052ff]" />
              <label htmlFor="my_modal_7" className={`${inter.className} text-[#002269] text-[12px] font-medium cursor-pointer`}> Вывод средств</label>
            </button>
          </div>
          <p className={`font-sans text-[#002269] text-[20px] mb-[10px] font-semibold`}>0 USDT</p>
          <p className={`${inter.className} text-[#8091b5] text-[14px] font-medium mb-4`}>0 RUB</p>
        </div>

        <div className="w-full flex-shrink-0 h-36 flex-col items-center justify-center bg-[#fbfcfe] rounded-2xl space-y-2 border border-[#eef2f9] py-5 px-4">
          <p className={`${inter.className} text-[#002269] lowercase text-[18px] font-medium`}>ЭСКРОУ-СЧЕТ (ПРОВОДИТСЯ СДЕЛКА)</p>
          <p className={`font-sans text-[#002269] text-[20px] mb-[10px] font-semibold`}>0 USDT</p>
          <p className={`${inter.className} text-[#8091b5] text-[14px] font-medium mb-4`}>0 RUB</p>
        </div>

        <div className="w-full flex-shrink-0 h-36 flex-col items-center justify-center bg-[#fbfcfe] rounded-2xl space-y-2 border border-[#eef2f9] py-5 px-4">
          <div className='flex justify-between items-center w-full cursor-pointer'>
            <p className={`${inter.className} text-[#002269] lowercase text-[18px] font-medium`}>СПОРНЫЕ СДЕЛКИ</p>
            <svg _ngcontent-ng-c3644767295="" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path _ngcontent-ng-c3644767295="" clip-rule="evenodd" d="M10 17.708a7.708 7.708 0 1 0 0-15.417 7.708 7.708 0 0 0 0 15.417Z" stroke="#0052FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path _ngcontent-ng-c3644767295="" data-value="arrow" d="M8.798 12.893 11.703 10 8.798 7.107" stroke="#0052FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
          </div>
          <p className={`font-sans text-[#002269] text-[20px] mb-[10px] font-semibold`}>0 USDT</p>
          <p className={`${inter.className} text-[#8091b5] text-[14px] font-medium mb-4`}>0 RUB – Споров: 0</p>
        </div>
      </div>




      <div className='md:flex block gap-4 items-center mt-6'>
        <button onClick={handleAccountOperation} className="flex items-center gap-2 bg-[#f0f4fc] px-7 py-[14px] rounded-lg shadow mt-4 w-full justify-center mb-10">
          <svg _ngcontent-ng-c3644767295="" className='mt-[2px]' width='18' height='18' viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-ng-c3644767295="" d="M15 7.125V5.4c0-.84 0-1.26-.164-1.581a1.5 1.5 0 0 0-.655-.656C13.861 3 13.441 3 12.6 3H3.9c-.84 0-1.26 0-1.581.163a1.5 1.5 0 0 0-.656.656c-.163.32-.163.74-.163 1.581v7.2c0 .84 0 1.26.163 1.581a1.5 1.5 0 0 0 .656.655c.32.164.74.164 1.581.164h8.7c.84 0 1.26 0 1.581-.164a1.5 1.5 0 0 0 .655-.655c.164-.32.164-.74.164-1.581v-1.725M11.25 9c0-.348 0-.523.029-.668a1.5 1.5 0 0 1 1.178-1.178c.145-.029.32-.029.668-.029h1.5c.348 0 .523 0 .668.029a1.5 1.5 0 0 1 1.178 1.178c.029.145.029.32.029.668 0 .348 0 .523-.029.668a1.5 1.5 0 0 1-1.178 1.178c-.145.029-.32.029-.668.029h-1.5c-.348 0-.523 0-.668-.029a1.5 1.5 0 0 1-1.178-1.178c-.029-.145-.029-.32-.029-.668Z" stroke="#0052FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
          <span className="text-[#002269] text-sm font-medium">Операции по счету</span>
        </button>
        <button onClick={handleDepositHistory} className='md:flex hidden items-center gap-2 bg-[#f0f4fc] px-7 py-[14px] rounded-lg shadow mt-4 w-full justify-center mb-10'>
          <svg _ngcontent-ng-c3644767295="" width='18' height='18' viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-ng-c3644767295="" d="M3.333 6v5.333m3-5.333v5.333M9.667 6v5.333m3-5.333v5.333M2 12.4v.533c0 .374 0 .56.073.703a.667.667 0 0 0 .291.291c.143.073.33.073.703.073h9.866c.374 0 .56 0 .703-.073a.667.667 0 0 0 .291-.291c.073-.143.073-.33.073-.703V12.4c0-.373 0-.56-.073-.703a.667.667 0 0 0-.291-.291c-.143-.073-.33-.073-.703-.073H3.067c-.374 0-.56 0-.703.073a.667.667 0 0 0-.291.291C2 11.84 2 12.027 2 12.4ZM7.769 2.051 2.835 3.148c-.298.066-.447.099-.558.18a.667.667 0 0 0-.223.277C2 3.731 2 3.884 2 4.189v.744c0 .374 0 .56.073.703a.667.667 0 0 0 .291.291c.143.073.33.073.703.073h9.866c.374 0 .56 0 .703-.073a.667.667 0 0 0 .291-.291c.073-.143.073-.33.073-.703V4.19c0-.305 0-.458-.054-.584a.667.667 0 0 0-.223-.278c-.111-.08-.26-.113-.558-.18L8.23 2.052a1.389 1.389 0 0 0-.173-.032.668.668 0 0 0-.116 0 1.389 1.389 0 0 0-.173.032Z" stroke="#0052FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
          <span className="text-[#002269] text-sm font-medium">Заявки на пополнение</span>
        </button>
      </div>


      {activeTab === "accountOperation" ?
        <>
          <p className={`${inter.className} text-[16px] md:text-[20px] text-[#8091b5] leading-6 mb-6`}>Операции по счету</p>


          <div className="mt-4 mb-28 block md:hidden">
            <div onClick={() => setIsExpanded(!isExpanded)} className="flex items-center gap-1  mt-4 w-full">
              <span className={`${inter.className} text-[16px] text-[#8091b5] leading-6`}>
                Расширенный поиск
              </span>
              <FaAngleDown className={`text-gray-600 transform transition-transform ${isExpanded ? "rotate-180" : ""}`} />
            </div>
            {isExpanded && (
              <div className="mt-4">
                <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="flex items-center justify-between bg-[#fbfcfe] px-4 py-2 rounded-lg shadow w-full">
                  <span className="flex text-[12px] items-center w-full gap-2 text-[#002269] font-medium">
                    <svg _ngcontent-ng-c3644767295="" width='20' height='20' viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-ng-c3644767295="" d="M16.5 7.5h-15m6.75 3H4.5m-3-4.35v5.7c0 .84 0 1.26.163 1.581a1.5 1.5 0 0 0 .656.655c.32.164.74.164 1.581.164h10.2c.84 0 1.26 0 1.581-.164a1.5 1.5 0 0 0 .656-.655c.163-.32.163-.74.163-1.581v-5.7c0-.84 0-1.26-.163-1.581a1.5 1.5 0 0 0-.656-.656c-.32-.163-.74-.163-1.581-.163H3.9c-.84 0-1.26 0-1.581.163a1.5 1.5 0 0 0-.656.656c-.163.32-.163.74-.163 1.581Z" stroke="#0052FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                    <select className="bg-[#fbfcfe] p-2 w-full border-none">
                      <option className="text-blue-600 font-medium">Все типы</option>
                      <option className="text-gray-500">Вывод прибыли</option>
                      <option className="text-gray-500">Пополнение</option>
                    </select>
                  </span>
                </button>
                <button onClick={() => setIsDropdownOpen1(!isDropdownOpen1)} className="flex items-center justify-between bg-[#fbfcfe] px-4 py-2 rounded-lg shadow w-full mt-2">
                  <span className="flex items-center w-full text-[12px] gap-1 text-[#002269] font-medium">
                    <svg _ngcontent-ng-c3644767295="" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-ng-c3644767295="" d="M14.167 3.333v13.334m0 0-3.334-3.334m3.334 3.334 3.333-3.334M5.833 16.667V3.333m0 0L2.5 6.667m3.333-3.334 3.334 3.334" stroke="#0052FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                    <select className="bg-[#fbfcfe] p-2 border-none w-full">
                      <option className="text-blue-600 font-medium"> Сначала новые</option>
                      <option className="text-gray-500"> Сначала старые</option>
                    </select>
                  </span>
                </button>
              </div>
            )}



          </div>
          <div className='flex gap-4 items-center'>
            <div className='w-1/2 flex flex-col gap-y-3'>
              <p className={`${inter.className} text-[16px] md:text-[14px] text-[#8091b5] leading-6`}>Тип операции</p>
              <button className="flex items-center justify-between bg-[#fbfcfe] px-4 py-2 rounded-lg shadow w-full">
                <span className="flex text-[12px] items-center w-full gap-2 text-[#002269] font-medium">
                  <svg _ngcontent-ng-c3644767295="" width='20' height='20' viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-ng-c3644767295="" d="M16.5 7.5h-15m6.75 3H4.5m-3-4.35v5.7c0 .84 0 1.26.163 1.581a1.5 1.5 0 0 0 .656.655c.32.164.74.164 1.581.164h10.2c.84 0 1.26 0 1.581-.164a1.5 1.5 0 0 0 .656-.655c.163-.32.163-.74.163-1.581v-5.7c0-.84 0-1.26-.163-1.581a1.5 1.5 0 0 0-.656-.656c-.32-.163-.74-.163-1.581-.163H3.9c-.84 0-1.26 0-1.581.163a1.5 1.5 0 0 0-.656.656c-.163.32-.163.74-.163 1.581Z" stroke="#0052FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                  <select className="bg-[#fbfcfe] p-2 w-full border-none">
                    <option className="text-blue-600 font-medium">Все типы</option>
                    <option className="text-gray-500">Вывод прибыли</option>
                    <option className="text-gray-500">Пополнение</option>
                  </select>
                </span>
              </button>

            </div>
            <div className='w-1/2 flex flex-col gap-y-3'>
              <p className={`${inter.className} text-[16px] md:text-[14px] text-[#8091b5] leading-6`}>Сортировка результатов</p>
              <button className="flex items-center justify-between bg-[#fbfcfe] px-4 py-2 rounded-lg shadow w-full">
                <span className="flex items-center w-full text-[12px] gap-1 text-[#002269] font-medium">
                  <svg _ngcontent-ng-c3644767295="" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-ng-c3644767295="" d="M14.167 3.333v13.334m0 0-3.334-3.334m3.334 3.334 3.333-3.334M5.833 16.667V3.333m0 0L2.5 6.667m3.333-3.334 3.334 3.334" stroke="#0052FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                  <select className="bg-[#fbfcfe] p-2 border-none w-full">
                    <option className="text-blue-600 font-medium"> Сначала новые</option>
                    <option className="text-gray-500"> Сначала старые</option>
                  </select>
                </span>
              </button>
            </div>
          </div>

          <p className={`${inter.className} text-[16px] text-[#002269] leading-6 mt-3`} >Операции не найдены  </p>
        </> :

        <div>
          <p className={`${inter.className} text-[16px] md:text-[20px] text-[#8091b5] leading-6 mb-6`}>Заявки на пополнение</p>

          <div>
            {depositHistory?.map((ver) => (
              <div className={`border flex-wrap text-[#002269] border-[#eef2f9] bg-[#fbfcfe] ${inter.className} items-center py-2.5 px-5 mb-2.5 rounded-2xl flex justify-between`}>
                <div className="flex gap-3 items-center">
                  <BsBank className="text-[#fb6c6c]" />
                  <p className="text-sm">{ver.formattedDate}</p>
                </div>
                <p>{ver.amount} USDT</p>
                {ver?.status && ver.status === "approved" ? <p className="px-2 py-0.5 rounded-md text-green-500 bg-green-200">Подверждено</p> : <></>}
                {ver?.status && ver.status === "rejected" ? <p className="px-2 py-0.5 rounded-md text-red-500 bg-red-200">Отклоненный</p> : <></>}
                {ver?.status && ver.status === "checking" ? <p className="px-2 py-0.5 rounded-md border">Проверка</p> : <></>}
              </div>
            ))}
          </div>
        </div>

      }

    </div>
  )
}

export default FinancesPage