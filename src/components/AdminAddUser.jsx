"use client";

import { useState } from "react";
import { inter } from "./DateDropdown"
import { addDataWithUniquenessCheck } from "@/utils/firebase_utils";
import { FaCopy } from "react-icons/fa";


const AdminAddUser = () => {

    const [error, setError] = useState("")
    const [token, setToken] = useState("")

    const handleAddUser = async(e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const username = formData.get("username")
        if (!username.trim()) {
            setError("Имя пользователя не может быть пустым")
            return
        }

        const response = await addDataWithUniquenessCheck("users", {username})
        setToken(response)

    }

    const copyTopClipBoard = () => {
      navigator.clipboard.writeText(token)
    }

    return (
        <div>
            <form onSubmit={handleAddUser}>
                <input
                    type="text"
                    name="username"
                    placeholder='Username'
                    className={`${inter.className} p-4 bg-[#FBFCFE]  w-1/2 md:w-2/3 border ${error ? "border-[#fb6c6c] placeholder:text-[#fb6c6c]" : "border-[#eef2f9]"}  rounded-[16px] focus:outline-none focus:ring-0 placeholder:text-[16px] text-[#002269]`}
                />
                {token && <div className="flex gap-2 pt-2">
                    <p onClick={copyTopClipBoard}>{token}</p>
                    <button onClick={copyTopClipBoard} type="button" className="border border-gray-300 p-1 rounded"><FaCopy className="text-[#0052ff]" /></button>
                  </div>}
                <button className={`${inter.className} flex justify-center items-center text-[18px] rounded-[16px] bg-[#e6eeff] text-[#0052ff] font-semibold p-4 mt-5`}>
                    Добавить пользователь
                </button>
            </form>
        </div>
    )
}

export default AdminAddUser