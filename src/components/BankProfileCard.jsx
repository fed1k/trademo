import Image from "next/image"
import Link from "next/link"
import { BiSolidWallet } from "react-icons/bi"
// import Link from "next/link"

const BankProfileCard = ({ data }) => {
    return (
        <Link href={"/bank-profiles/" + data.id} className="py-2.5 some-shadow px-5 cursor-pointer bg-[#fbfcfe] rounded-2xl flex justify-between">
            <div className="flex gap-3 w-40">
                <div className="w-10 h-10 flex justify-center items-center border border-[#eef2f9] bg-white rounded-2xl">
                    <Image width={26} height={26} alt="Bank Logo" src={data.url} />
                </div>
                <div className="text-sm font-medium">
                    <p>{data.lastName} {data.firstName[0]}. {data.fatherName[0]}.</p>
                    <p className="text-[#8091b5]">{data.selectBank}</p>
                </div>
            </div>

            <div className="flex gap-2.5">
                <div className="bg-white min-w-[110px] flex items-center justify-center bank-profile-card-shadow rounded-md px-2.5">
                    <p className="text-xs font-medium">{data.limit} <span className="text-[#8091b5]">RUB</span></p>
                </div>
                <div className="bg-white flex min-w-[52px] items-center justify-center  bank-profile-card-shadow rounded-md px-2.5">
                    <p className="text-[#c2cde2]">0%</p>
                </div>
                <div className="flex w-[200px] items-center justify-between py-2 bg-white bank-profile-card-shadow rounded-md px-2.5">
                    <div className="flex items-center gap-1">

                        <svg _ngcontent-ng-c2423271534="" className='w-4 h-4' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-ng-c2423271534="" d="M12 17.5h.01M8.2 22h7.6c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874C19 20.48 19 19.92 19 18.8V5.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C17.48 2 16.92 2 15.8 2H8.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C5 3.52 5 4.08 5 5.2v13.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C6.52 22 7.08 22 8.2 22Zm4.3-4.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" stroke="#fb6c6c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                        <p className="text-xs text-[#002269] font-medium">{data.title}</p>
                    </div>
                    <p className=" text-[8px] bg-[#e6eeff] text-[#0052ff] p-1.5 rounded font-semibold">Без регистратция</p>
                </div>
                <div>

                </div>
            </div>

            <div className="bg-white flex justify-center items-center h-fit rounded-md p-2.5">
                <BiSolidWallet className="text-[#0052ff]" />
            </div>

            <div>
                
            </div>
        </Link>
    )
}

export default BankProfileCard