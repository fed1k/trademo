"use client"

import { checkUserByToken, getPaymentVerifications, updateDeposit } from "@/utils/firebase_utils"
import { useEffect, useRef, useState } from "react"
import { inter } from "./DateDropdown"
import { BsBank } from "react-icons/bs"
import { AiOutlineLoading3Quarters } from "react-icons/ai"

const PaymentVerification = () => {
    const [verifications, setVerifications] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const [existingBalance, setExistingBalance] = useState({ trust: 0, reserve: 0, addingAmount: 0 })

    const [newBalance, setNewBalance] = useState({balance: 0, balance_trust: 0})

    const [activeDep, setActiveDep] = useState()

    const modalRef = useRef(null)
    const modalCloseRef = useRef(null)


    function calculateBalance(amount, myObject) {
        // Calculate the new balance after adding the amount
        const newObject = {
            trust: null,
            reserve: null
        }
        const bls = +myObject?.balance || 0
        const blsTrst = +myObject?.balance_trust || 0
        let newBalance = amount + bls + blsTrst;
        console.log(newBalance)
        // Check if the new balance exceeds the maximum limit
        if (newBalance > 1000) {
            // If it does, set balance to 1000 and move the extra to extraBalance
            newObject.trust = newBalance - 1000;
            newObject.reserve = 1000;
        } else {
            // If it doesn't exceed, just update balance
            newObject.reserve = newBalance;
        }
        // console.log(amount)
        return newObject
    }


    const openVerifModal = async (doc) => {
        modalRef.current?.showModal()
        setActiveDep(doc)
        const res = await checkUserByToken(doc.user_token)
        setExistingBalance({ reserve: res.balance || 0, trust: res?.balance_trust || 0, addingAmount: doc.amount })
        const hh = calculateBalance(+doc.amount, res)
        setNewBalance({balance: hh.reserve || 0, balance_trust: hh.trust || 0})
    }

    const verifyDeposit = async () => {
        setLoading(true)
        const response = await updateDeposit(activeDep.id, { status: "approved", ...newBalance }, activeDep)
        const updated = verifications.map((el) => {
            if (el.id === activeDep.id) {
                return {
                    ...el,
                    status: "approved"
                }
            } else {
                return el
            }

        })
        setVerifications(updated)
        setLoading(false)
        modalCloseRef.current.click()
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

    useEffect(() => {
        // if (newBalance.balance +)
            const tot = +newBalance.balance + +newBalance.balance_trust
            const temp = +existingBalance?.addingAmount + +existingBalance?.reserve + +existingBalance?.trust
            console.log(tot, temp, existingBalance)
            if (tot > temp) {
                setError("Много чем депосит + текушово сумма")
            }else {
                setError("")
            }

    }, [newBalance])


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
                        {ver?.status && ver.status === "checking" ? <div className="flex items-center gap-2">
                            <button disabled={loading} onClick={() => openVerifModal(ver)} className="mr-2 disabled:cursor-pointer disabled:text-opacity-50 flex-1 border px-4 py-1 flex gap-1 items-center rounded-md">Подтверждать {loading && <AiOutlineLoading3Quarters className=" animate-spin" />}</button>
                            <button disabled={loading} onClick={() => rejectDeposit(ver)} className="bg-[#ffeaea] disabled:cursor-pointer disabled:text-opacity-50 flex-1 text-[#fb6c6c] flex gap-1 items-center rounded-md py-1 px-4">Отклонить {loading && <AiOutlineLoading3Quarters className=" animate-spin" />}</button>
                        </div> : <></>}
                        {ver?.status && ver.status === "approved" ? <p className="px-2 py-0.5 rounded-md text-green-500 bg-green-200">Подверждено</p> : <></>}
                        {ver?.status && ver.status === "rejected" ? <p className="px-2 py-0.5 rounded-md text-red-500 bg-red-200">Отклоненный</p> : <></>}
                    </div>
                )) : <></>}
            </div>

            <dialog ref={modalRef} id="my_modal_2" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Подтверждение</h3>
                    <p className="py-4">подтвердить, идет ли депозит в траст или резерв</p>

                    <div className="flex justify-between mb-2">

                        <div className="flex gap-3 items-center">
                            <BsBank className="text-[#fb6c6c]" />
                            <p className="text-sm">{activeDep?.formattedDate}</p>
                        </div>
                        <p>{activeDep?.amount} USDT</p>
                    </div>
                    <div>
                        <p>Траст: {existingBalance.trust || 0}</p>
                        <p>Резерв: {existingBalance.reserve}</p>
                        <p>Новая сумма: {existingBalance.addingAmount}</p>
                    </div>
                    <div className="flex gap-2">
                        <input disabled={loading} value={newBalance.balance} onChange={(e) => setNewBalance((prev) => ({...prev, balance: e.target.value}))} className="border px-2 rounded py-0.5" type="text" name="" id="" placeholder="Резерв" />
                        <input disabled={loading} value={newBalance.balance_trust} onChange={(e) => setNewBalance((prev) => ({...prev, balance_trust: e.target.value}))} className="border px-2 rounded py-0.5" type="text" name="" id="" placeholder="Траст" />
                    </div>
                    {error && <p className="text-red-500">{error}</p>}
                    <button onClick={verifyDeposit} disabled={error || loading} type="button" className="flex-1 disabled:cursor-not-allowed disabled:opacity-50 border mt-2 w-full rounded py-1">Подтверждать</button>

                </div>
                <form method="dialog" className="modal-backdrop">
                    <button ref={modalCloseRef}>close</button>
                </form>
            </dialog>
        </div>
    )
}

export default PaymentVerification