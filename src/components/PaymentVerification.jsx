"use client"

import { getPaymentVerifications } from "@/utils/firebase_utils"
import { useEffect, useState } from "react"
import { inter } from "./DateDropdown"
import { BsBank } from "react-icons/bs"

const PaymentVerification = () => {
    const [verifications, setVerifications] = useState([])

    useEffect(() => {
        getPaymentVerifications().then((data) => setVerifications(data))
    }, [])

    console.log(verifications)
    return (
        <div>
            <h2>Verification</h2>
            <div>

                {verifications?.length ? verifications.map((ver) => (
                    <div className={`border flex-wrap text-[#002269] border-[#eef2f9] bg-[#fbfcfe] ${inter.className} items-center py-2.5 px-5 mb-2.5 rounded-2xl flex justify-between`}>
                        <div className="flex gap-3 items-center">
                            <BsBank className="text-[#fb6c6c]" />
                            <p className="text-sm">{ver.formattedDate}</p>
                        </div>
                        <p>{ver.amount} USDT</p>
                        <div>
                            <button className="mr-2 flex-1 border px-4 py-1 rounded-md">Подтверждать</button>
                            <button className="bg-[#ffeaea] flex-1 text-[#fb6c6c] rounded-md py-1 px-4">Отклонить</button>
                        </div>
                    </div>
                )) : <></>}
            </div>
        </div>
    )
}

export default PaymentVerification