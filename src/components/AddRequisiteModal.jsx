"use client";

import { useRef, useState } from "react";
import { inter } from "./DateDropdown";
import { addRequisite } from "@/utils/firebase_utils";

const AddRequisiteForm = ({ profileId }) => {

    const [requisiteInfo, setRequisiteInfo] = useState({
        status: "inactive",
        name: "",
        type: "card",
        number: "",
        cardHolder: "",
        bankProfileId: profileId
    })

    const closeRef = useRef(null)

    const handleChange = (name, value) => {
        setRequisiteInfo((prev) => ({ ...prev, [name]: value }))
    }

    const handleAdd = async () => {
        const { name, number, cardHolder } = requisiteInfo
        if (!name || !number || !cardHolder) {
            return
        }

        const response = await addRequisite(requisiteInfo)
        if (response === 200) {
            // for closing purpose
            closeRef.current.click()
        }
    }


    return (
        <div className="modal overflow-scroll" role="dialog">
            <div className='min-w-[330px] md:min-w-[400px] bg-white p-4 px-5 rounded-md top-0 absolute'>
                <p className={`${inter.className} font-semibold text-[18px] text-black text-center mb-2`}>Добавление реквизита</p>
                <p className={`${inter.className} font-semibold text-sm text-[#8091B5] text-center mb-5`}>Заполните форму для добавления</p>

                <span className={`${inter.className} font-semibold text-sm text-[#8091B5] text-center mb-2`}>НАЗВАНИЕ РЕКВИЗИТА *</span>

                <div className="relative flex items-center border border-[#eef2f9] rounded-lg p-3 w-full bg-[#FBFCFE] shadow-sm mt-2">
                    <svg _ngcontent-ng-c1123165154="" className='w-6 h-6 ' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-ng-c1123165154="" d="M3 20c2.336-2.477 5.507-4 9-4 3.493 0 6.664 1.523 9 4M16.5 7.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z" stroke="#0022FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                    <input
                        type="text"
                        name="name"
                        placeholder="Введите название"
                        onChange={(e) => handleChange("name", e.target.value)}
                        className="flex-1 bg-transparent outline-none h-8 w-full ml-2 placeholder-[#8092B5] placeholder:text-lg"
                    />
                </div>


                <p className={`${inter.className} text-[16px] my-3 text-[#FB6C6C]`}>Поле не заполнено</p>
                <span className={`${inter.className} font-semibold text-sm uppercase text-[#8091B5] text-center mb-2`}>Выберите необходимое</span>

                <div className="relative flex items-center border border-[#eef2f9] rounded-lg p-3 w-full bg-[#FBFCFE] shadow-sm mt-2">
                    <input
                        type="checkbox"
                        onChange={(e) => handleChange("type", e.target.checked ? "invoice" : "card")}
                        name="" id="" />
                    <input
                        type="text"
                        disabled
                        placeholder={requisiteInfo.type === "invoice" ? 'Будет сохранен счёт' : 'Будет сохранена карта'}
                        // onChange={(e) => setQuery(e.target.value)}
                        className="flex-1 bg-transparent outline-none h-8 w-full ml-3 placeholder-[#0022FF] placeholder:text-lg"
                    />
                </div>
                <p className={`${inter.className} mt-4 font-semibold text-sm uppercase text-[#8091B5] mb-2`}>{requisiteInfo.type === "invoice" ? "номер счёта*" : "карта*"} </p>

                <div className="relative flex items-center border border-[#eef2f9] rounded-lg p-3 w-full bg-[#FBFCFE] shadow-sm mt-2">
                    <svg _ngcontent-ng-c1123165154="" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-ng-c1123165154="" d="M18.333 8.333H1.667m7.5 3.333H5M1.667 6.833v6.333c0 .934 0 1.4.181 1.757.16.314.415.569.729.729.356.181.823.181 1.756.181h11.334c.933 0 1.4 0 1.756-.181.314-.16.569-.415.729-.729.181-.356.181-.823.181-1.757V6.833c0-.933 0-1.4-.181-1.756a1.666 1.666 0 0 0-.729-.729c-.356-.181-.823-.181-1.756-.181H4.333c-.933 0-1.4 0-1.756.181-.314.16-.569.415-.729.729-.181.356-.181.823-.181 1.756Z" stroke="#0052FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                    <input
                        type="text"
                        name="number"
                        placeholder={requisiteInfo.type === "invoice" ? 'XXXXXXXXXXXXXXXX' : '0000000000000000'}
                        onChange={(e) => handleChange("number", e.target.value)}
                        className="flex-1 bg-transparent outline-none h-8 w-full ml-3 placeholder-[#8091B5] placeholder:text-lg"
                    />
                </div>

                <p className={`${inter.className} mt-4 font-semibold text-[16px]  text-[#FB6C6C] mb-2`}> {requisiteInfo.type === "invoice" ? 'Номер счёта:' : 'Номер карты:'} Поле не заполнено</p>

                <span className={`${inter.className} font-semibold text-sm uppercase text-[#8091B5] text-center mb-2`}>ДЕРЖАТЕЛЬ КАРТЫ *</span>

                <div className="relative flex items-center border border-[#eef2f9] rounded-lg p-3 w-full bg-[#FBFCFE] shadow-sm mt-2">
                    <svg _ngcontent-ng-c1123165154="" className='w-6 h-6 ' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-ng-c1123165154="" d="M3 20c2.336-2.477 5.507-4 9-4 3.493 0 6.664 1.523 9 4M16.5 7.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z" stroke="#0022FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                    <input
                        type="text"
                        name="cardHolder"
                        placeholder="CARD HOLDER"
                        onChange={(e) => handleChange("cardHolder", e.target.value)}
                        className="flex-1 bg-transparent outline-none h-8 w-full ml-3 placeholder-[#8092B5] placeholder:text-lg"
                    />
                </div>
                <p className={`${inter.className} text-[16px] my-3 text-[#FB6C6C]`}>Поле не заполнено</p>

                <div className='flex gap-1 items-center'>
                    <input type="checkbox" onChange={(e) => handleChange("status", e.target.checked ? "active" : "inactive")} className='cursor-pointer ' name="" id="activate" />
                    <label htmlFor="activate" className={`${inter.className} font-semibold cursor-pointer text-sm text-[#8091B5] text-center`}>Запустить реквизит в работу</label>
                </div>

                <button onClick={handleAdd} className={`w-full bg-[#E6EEFF] h-[40px] ${inter.className} text-[16px] text-[#0052FF] my-4 rounded-lg py-2`}>Добавить реквизит</button>
            </div>


            <label ref={closeRef} className="modal-backdrop" htmlFor="my_modal_7">Close</label>
        </div>
    )
}

export default AddRequisiteForm