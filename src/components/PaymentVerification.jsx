"use client"

import { getPaymentVerifications, updateDeposit } from "@/utils/firebase_utils"
import { useEffect, useState } from "react"
import { inter } from "./DateDropdown"
import { BsBank } from "react-icons/bs"
import { AiOutlineLoading3Quarters } from "react-icons/ai"

const PaymentVerification = () => {
    const [verifications, setVerifications] = useState([])
    const [loading, setLoading] = useState(false)

    const verifyDeposit = async (doc) => {
        setLoading(true)
        const response = await updateDeposit(doc.id, { status: "approved" }, doc)
        const updated = verifications.map((el) => {
            if (el.id === doc.id) {
                return {
                    ...el,
                    status: "approved"
                }
            } else {
                return el
            }

        })
        console.log(updated)
        setVerifications(updated)
        setLoading(false)
    }

    const rejectDeposit = async (doc) => {
        setLoading(true)
        const response = await updateDeposit(doc.id, { status: "rejected" }, doc)
        const updated = verifications.map((el) => {
            if (el.id === doc.id) {
                return {
                    ...el,
                    status: "rejected"
                }
            } else {
                return el
            }

        })
        setVerifications(updated)
        setLoading(false)
    }

    useEffect(() => {
        getPaymentVerifications().then((data) => setVerifications(data))
    }, [])


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
                        {ver?.status && ver.status === "checking" ? <div className="flex items-center gap-2">
                            <button disabled={loading} onClick={() => verifyDeposit(ver)} className="mr-2 disabled:cursor-pointer disabled:text-opacity-50 flex-1 border px-4 py-1 flex gap-1 items-center rounded-md">Подтверждать {loading && <AiOutlineLoading3Quarters className=" animate-spin" />}</button>
                            <button disabled={loading} onClick={() => rejectDeposit(ver)} className="bg-[#ffeaea] disabled:cursor-pointer disabled:text-opacity-50 flex-1 text-[#fb6c6c] flex gap-1 items-center rounded-md py-1 px-4">Отклонить {loading && <AiOutlineLoading3Quarters className=" animate-spin" />}</button>
                        </div> : <></>}
                        {ver?.status && ver.status === "approved" ? <p className="px-2 py-0.5 rounded-md text-green-500 bg-green-200">Подверждено</p> : <></>}
                        {ver?.status && ver.status === "rejected" ? <p className="px-2 py-0.5 rounded-md text-red-500 bg-red-200">Отклоненный</p> : <></>}
                    </div>
                )) : <></>}
            </div>
        </div>
    )
}

export default PaymentVerification