"use client"

import { IoIosArrowDown } from "react-icons/io"
import { PiSignOutBold, PiUser } from "react-icons/pi"
import { inter } from "./DateDropdown"
import { useState } from "react"
import { useAuth } from "./AuthProvider"

const ProfileDropdown = () => {

    const { logout } = useAuth()
    const [isOpen, setIsOpen] = useState(false)

    

    return (
        <div className="relative hidden md:flex">

            <div onClick={() => setIsOpen((prev) => (!prev))} className="flex items-center p-[5px_20px_5px_10px] rounded-lg hover:cursor-pointer ml-4 hover:bg-[#fafbff] transition-all gap-3">
                <div className="bg-[#eef2f9] rounded-full inline-block p-2">
                    <PiUser className="w-6 h-6 text-[#BAC2D6]" />
                </div>
                <div>
                    <p className={`${inter.className} text-[#002269] font-medium`}>Referer Cloud</p>
                    <p className={`text-[#8091B5] ${inter.className} text-[12px] font-medium`}>CHAT ID: 0</p>
                </div>

                <IoIosArrowDown className="ml-4 text-[#8091b5]" />

            </div>

            <div className={`absolute ${isOpen ? "max-h-[150px] visible" : "max-h-0 visibility-hidden"} dropdown-shadow py-3 px-0 overflow-hidden transition-all border border-[#eef2f9] top-full left-4 mt-2 w-40 bg-white rounded-xl`}>
                <li onClick={logout} className="px-5 hover:bg-[#fafbff] py-1.5 list-none cursor-pointer flex gap-3 items-center"><PiSignOutBold className="text-[#0052FF]" /> <p className={`text-[#002269] text-sm font-medium ${inter.className}`}>Выход</p></li>
            </div>
        </div>
    )
}

export default ProfileDropdown