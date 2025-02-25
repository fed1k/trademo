"use client"

import { PiCopySimple } from "react-icons/pi"
import { useEffect, useState } from "react"
import { addDeposit, getWalletAddress } from "@/utils/firebase_utils"
import { BiSolidWallet } from "react-icons/bi"
import { inter } from "./DateDropdown"
import { useAuth } from "./AuthProvider"

const DepositStepTwo = ({ value, handleChange, close }) => {
    const [depositAddress, setDepositAddress] = useState()
    const {user} = useAuth()

    const copyToClipboard = (value) => {
        navigator.clipboard.writeText(value)
    }

    const sendDepositToVerification = async() => {
        const response = await addDeposit({user_token: user.token, status: "checking", amount: value, date: new Date() })
        console.log(response)
        close()
    }

    useEffect(() => {
        getWalletAddress().then((data) => {
            setDepositAddress(data[0].address)
        })
    }, [])

    return (
        <>
            <p className='mb-5 text-[#0052ff] font-medium text-lg'>Шаг 2</p>
            <p className='text-2xl font-medium'>Пополнение баланса</p>
            <p className='text-center text-[#8091b5] font-medium'><span className='text-[#0052ff]'>Transfer</span> выбранную сумму в USDT по указанному кошельку для пополнения и <span className='text-[#0052ff]'>подтвердите перевод</span></p>
            <div>

                <p className='self-start mt-8 text-[#8091b5] pb-2.5 font-medium'>ID ОПЕРАЦИИ</p>
                <div className='border flex gap-3 p-3 items-center text-xl rounded-xl w-full border-[#eef2f9]'>
                    <p className='text-xl font-medium text-[#0052ff] pl-2'>#</p>
                    <p className="flex-1 text-sm font-medium pl-2">10764</p>
                    <PiCopySimple title="Copy" onClick={(e) => copyToClipboard(10764)} className="text-gray-300 w-6 h-6 cursor-pointer" />
                </div>


                <p className='self-start mt-8 text-[#8091b5] pb-2.5 font-medium'>СУММА В USDT TRC-20</p>
                <div className='border flex p-3 items-center text-xl rounded-xl w-full border-[#eef2f9]'>
                    <p className='text-xl font-medium'>USDT</p>
                    <input value={value} onChange={handleChange} className='flex-1 font-medium outline-none placeholder:text-[#c2cde2] text-right' placeholder='Сумма в ' type="text" />
                    <p className={`transition-all font-medium ${value ? "text-black" : "text-[#c2cde2]"}`}>USDT</p>
                </div>


                <p className='self-start mt-8 text-[#8091b5] pb-2.5 font-medium'>КОШЕЛЕК ДЛЯ ПОПОЛНЕНИЯ</p>
                <div className='border flex gap-3 p-3 items-center text-xl rounded-xl w-full border-[#eef2f9]'>
                    <p className='text-xl font-medium text-[#0052ff] pl-2'><BiSolidWallet className="text-[#0052ff]" /></p>
                    <p className="flex-1 text-sm font-medium pl-2">{depositAddress}</p>
                    <PiCopySimple onClick={(e) => copyToClipboard(depositAddress)} className="text-gray-300 w-6 h-6 cursor-pointer" />
                </div>

                <button onClick={sendDepositToVerification} className="block w-full text-[#0052ff] bg-[#e6eeff] h-14 rounded-xl mt-8 font-medium">Подтвердить платёж</button>
                <button onClick={close} className={`w-full text-[#fb6c6c] bg-[#ffeaea] mt-4 h-14 rounded-xl ${inter.className}`}>Отменить</button>
                
            </div>
        </>
    )
}

export default DepositStepTwo