'use client'
import { Inter } from 'next/font/google';
import { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
export const inter = Inter({
    weight: ['400'],
    subsets: ['latin'],
  });
const RequisitesPage = () => {
    const [active,setActive]=useState(false)
    const [value,setValue]=useState('')
    const [checkeds,setIsCheckeds]=useState(true)
    const [users,setUsers]=useState([
    {
        name:'Allamurotov F. B.', //username
        selectBankImgUrl:'https://trademo.top/assets/banks/vtb.svg', //BankImage
        selectBankName:'VTB', //bank
        id:'#10324'
    }
])

const handelActive=()=>{
    setActive(!active)
}
    return (
        <div>
            <p className={`${inter.className} text-[24px] md:text-[32px] text-[#002269] leading-6 my-[30px]`}>Реквизиты профилей</p>
            {!users && <div className="flex justify-center border rounded-2xl border-[#eef2f9] items-center h-32 bg-[#fbfcfe]">
               <p className={`text-[18px] font-medium text-[#8091b5] ${inter.className} leading-5 `}>Профили не найдены</p>
            </div>}
            {users && users.map((user)=>{
                return <div className='w-full h-[60px] px-5 py-3 flex items-center gap-16 bg-[#FBFCFE] rounded-xl cursor-pointer hover:shadow-md transition duration-500' onClick={handelActive}>
                    <div className='flex gap-5 items-center'>
                        <img src={user.selectBankImgUrl} alt="bankImg" className='w-9 h-9 p-1.5 bg-white rounded-xl border'/>
                        <p className={`${inter.className} text-sm text-[#002269] font-bold`}>{user.name}</p>
                    </div>
                    <div className='flex items-center gap-5'>
                        <span className={`px-10  py-2 bg-white rounded-lg ${inter.className} text-[12px] text-[#002269] font-bold`}>{user.selectBankName}</span>
                        <span className={`px-5  py-2 bg-white rounded-lg ${inter.className} text-[12px] text-[#8091B5] font-bold`}>{user.id}</span>
                        <span className={`px-5  py-2 bg-white rounded-lg ${inter.className} text-[12px]`}>
                           {!active &&  <IoIosArrowDown className='text-[#0052FF] text-[16px]'/>}
                            {active && <IoIosArrowUp className='text-[#0052FF] text-[16px]'/>}
                        </span>
                    </div>
                </div>
            })}

            {active &&
              <div className='w-full p-2 bg-[#F5F7F9] rounded-lg flex items-center gap-5 mt-5 '>
                    <div onClick={()=>document.getElementById('my_modal_2').showModal()} className='h-[154px]  min-w-[280px] lg:min-w-[370px] py-4 px-5 rounded-[16px] bg-[#F9FAFB] my-5 border border-[#eef2f9]'>
                            <div className='flex items-center justify-between mb-3'>
                                <p className={`${inter.className} text-sm text-[#0052FF]`}>Не в работе</p>
                                <svg _ngcontent-ng-c1210880631="" className='w-5 h-5' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-ng-c1210880631="" d="M9.937.008c2.279-.023 4.429.01 6.637.022a.9.9 0 0 1 .4.076c.393.199.53.743.276 1.1a9.032 9.032 0 0 1-.382.387 4629.905 4629.905 0 0 0-3.427 3.365 2.973 2.973 0 0 1-.591.475c-.876.49-1.846.3-2.52-.44-.932-1.023-1.442-2.23-1.53-3.622C8.745.491 9.03.018 9.937.008ZM8.082 1.129c-.005 1.683-.042 3.367-.043 5.05 0 .863-.533 1.666-1.363 1.936-.275.09-.622.116-1.043.08a5.747 5.747 0 0 1-3.439-1.487c-.623-.56-.757-1.124-.133-1.745L6.808.238a.746.746 0 0 1 .995-.052c.327.256.28.557.28.943ZM19.107 2.168a842.697 842.697 0 0 1 4.53 4.57c.269.273.402.545.253.9-.134.321-.39.48-.765.474-1.697-.023-3.394-.044-5.091-.063-.396-.004-.689-.035-.877-.092a1.968 1.968 0 0 1-1.391-1.952c.036-1.427.517-2.677 1.442-3.748.362-.42.796-.76 1.369-.51.129.055.305.196.53.421ZM.003 13.981c-.012-2.225.014-4.45.015-6.675 0-.482.502-.808.951-.686.293.08.548.417.791.664a839.24 839.24 0 0 1 3.368 3.438c.846.871.71 2.178-.188 2.966-1.078.947-2.322 1.444-3.734 1.494-.505.018-.917-.107-1.116-.574-.056-.132-.085-.341-.087-.627ZM23.964 10.058c.017 2.249-.013 4.388-.017 6.58 0 .273-.107.48-.317.623-.561.38-.953-.044-1.351-.453a1964.78 1964.78 0 0 0-3.316-3.4 2.645 2.645 0 0 1-.433-.547c-.46-.841-.31-1.809.398-2.47 1.064-.994 2.332-1.52 3.804-1.581.517-.022.943.107 1.143.59.057.136.087.356.089.658ZM21.817 19.117c-1.495 1.511-3.017 3.004-4.531 4.498-.181.179-.33.287-.446.326-.478.159-.966-.208-.961-.724l.041-5.323c.01-1.257.857-2.143 2.13-2.11a5.803 5.803 0 0 1 3.605 1.402c.47.403.819.812.566 1.402-.06.14-.195.316-.404.529ZM1.847 15.905c1.951.005 3.437.02 4.457.044.793.018 1.55.594 1.797 1.356.082.253.11.566.086.94a5.737 5.737 0 0 1-1.422 3.467c-.674.777-1.215.826-1.932.1-1.491-1.51-2.983-3.02-4.476-4.528-.117-.118-.25-.22-.295-.386-.15-.543.152-.984.712-1.004.36-.014.786.01 1.073.01ZM14.155 23.991c-2.26.023-4.521-.005-6.782-.014-.755-.003-1.086-.854-.527-1.358l.139-.126c1.203-1.185 2.41-2.368 3.617-3.549.776-.758 1.723-.892 2.672-.287.167.106.383.33.648.67.75.962 1.165 2.074 1.245 3.337.045.702-.194 1.319-1.012 1.327Z" fill="#32A8FF"></path></svg>
                </div>
                    <p className={`${inter.className} text-sm text-[#002269] mb-2`}>user name</p>
                     <p className={`${inter.className} text-[20px] text-[#002269]`}>user Card Number</p>
                </div>

                <label htmlFor="my_modal_7"  className='btn h-[154px] min-w-[280px] lg:min-w-[370px] py-4 px-5 rounded-[16px] bg-[#F9FAFB] my-5 border border-[#eef2f9] flex flex-col justify-center items-center hover:bg-transparent'>
                <svg _ngcontent-ng-c1210880631="" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path _ngcontent-ng-c1210880631="" d="M19.5 21v-6m-3 3h6m0-8h-20m20 2V8.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C20.98 5 20.42 5 19.3 5H5.7c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C2.5 6.52 2.5 7.08 2.5 8.2v7.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C4.02 19 4.58 19 5.7 19h6.8" stroke="#0052FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                <p className={`${inter.className} text-[20px] font-semibold text-[#002269]`}>Добавить реквизит</p>
                <p className={`${inter.className} text-[12px] text-[#8091B5]`}>для данного профиля</p>
          </label>
              </div>


            }
             
             <dialog id="my_modal_2" className="modal">
               <div className="modal-box max-w-[400px]">
                <h3 className={`${inter.className} text-black text-center text-[18px]`}>Управление реквизитом</h3>
                <div className='h-[154px] min-w-[280px] lg:max-w-[360px] mx-auto py-4 px-5 rounded-[16px] bg-gradient-to-t bg-[#e6eeff] my-5 border border-[#eef2f9]'>
             <div className='flex items-center justify-between mb-3'>
               <p className={`${inter.className} text-sm text-[#0052FF]`}>Не в работе</p>
                <svg _ngcontent-ng-c1210880631="" className='w-5 h-5' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-ng-c1210880631="" d="M9.937.008c2.279-.023 4.429.01 6.637.022a.9.9 0 0 1 .4.076c.393.199.53.743.276 1.1a9.032 9.032 0 0 1-.382.387 4629.905 4629.905 0 0 0-3.427 3.365 2.973 2.973 0 0 1-.591.475c-.876.49-1.846.3-2.52-.44-.932-1.023-1.442-2.23-1.53-3.622C8.745.491 9.03.018 9.937.008ZM8.082 1.129c-.005 1.683-.042 3.367-.043 5.05 0 .863-.533 1.666-1.363 1.936-.275.09-.622.116-1.043.08a5.747 5.747 0 0 1-3.439-1.487c-.623-.56-.757-1.124-.133-1.745L6.808.238a.746.746 0 0 1 .995-.052c.327.256.28.557.28.943ZM19.107 2.168a842.697 842.697 0 0 1 4.53 4.57c.269.273.402.545.253.9-.134.321-.39.48-.765.474-1.697-.023-3.394-.044-5.091-.063-.396-.004-.689-.035-.877-.092a1.968 1.968 0 0 1-1.391-1.952c.036-1.427.517-2.677 1.442-3.748.362-.42.796-.76 1.369-.51.129.055.305.196.53.421ZM.003 13.981c-.012-2.225.014-4.45.015-6.675 0-.482.502-.808.951-.686.293.08.548.417.791.664a839.24 839.24 0 0 1 3.368 3.438c.846.871.71 2.178-.188 2.966-1.078.947-2.322 1.444-3.734 1.494-.505.018-.917-.107-1.116-.574-.056-.132-.085-.341-.087-.627ZM23.964 10.058c.017 2.249-.013 4.388-.017 6.58 0 .273-.107.48-.317.623-.561.38-.953-.044-1.351-.453a1964.78 1964.78 0 0 0-3.316-3.4 2.645 2.645 0 0 1-.433-.547c-.46-.841-.31-1.809.398-2.47 1.064-.994 2.332-1.52 3.804-1.581.517-.022.943.107 1.143.59.057.136.087.356.089.658ZM21.817 19.117c-1.495 1.511-3.017 3.004-4.531 4.498-.181.179-.33.287-.446.326-.478.159-.966-.208-.961-.724l.041-5.323c.01-1.257.857-2.143 2.13-2.11a5.803 5.803 0 0 1 3.605 1.402c.47.403.819.812.566 1.402-.06.14-.195.316-.404.529ZM1.847 15.905c1.951.005 3.437.02 4.457.044.793.018 1.55.594 1.797 1.356.082.253.11.566.086.94a5.737 5.737 0 0 1-1.422 3.467c-.674.777-1.215.826-1.932.1-1.491-1.51-2.983-3.02-4.476-4.528-.117-.118-.25-.22-.295-.386-.15-.543.152-.984.712-1.004.36-.014.786.01 1.073.01ZM14.155 23.991c-2.26.023-4.521-.005-6.782-.014-.755-.003-1.086-.854-.527-1.358l.139-.126c1.203-1.185 2.41-2.368 3.617-3.549.776-.758 1.723-.892 2.672-.287.167.106.383.33.648.67.75.962 1.165 2.074 1.245 3.337.045.702-.194 1.319-1.012 1.327Z" fill="#32A8FF"></path></svg>
             </div>
             <p className={`${inter.className} text-sm text-[#002269] mb-2`}>user name</p>
             <p className={`${inter.className} text-[20px] text-[#002269]`}>user Card Number</p>
             <p className={`${inter.className} text-sm text-[#8091B5]`}>Банк: VTB • Россия: RUB</p>
          </div>
          <button className='flex justify-center gap-2 w-full mx-auto rounded-lg items-center border h-12 p-2 mt-5'>
                <svg _ngcontent-ng-c1955464453="" className='w-4 h-4' viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-ng-c1955464453="" d="M12 4.5v-.6c0-.84 0-1.26-.164-1.581a1.5 1.5 0 0 0-.655-.656c-.32-.163-.74-.163-1.581-.163H8.4c-.84 0-1.26 0-1.581.163a1.5 1.5 0 0 0-.656.656C6 2.639 6 3.059 6 3.9v.6m1.5 4.125v3.75m3-3.75v3.75M2.25 4.5h13.5m-1.5 0v8.4c0 1.26 0 1.89-.245 2.371-.216.424-.56.768-.984.984-.48.245-1.11.245-2.371.245h-3.3c-1.26 0-1.89 0-2.371-.245a2.25 2.25 0 0 1-.984-.983C3.75 14.79 3.75 14.16 3.75 12.9V4.5" stroke="#FB6C6C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                <p>Удалить реквизит</p>
             </button>
                  </div>
                     <form method="dialog" className="modal-backdrop">
                  <button>close</button>
              </form>
            </dialog> 
            <input type="checkbox" id="my_modal_7" className="modal-toggle" />
              <div className="modal" role="dialog"> 
               <div className='min-w-[330px] md:min-w-[400px] bg-white p-4 px-5 rounded-md top-0 absolute'>
              <p className={`${inter.className} font-semibold text-[18px] text-black text-center mb-2`}>Добавление реквизита</p>
              <p className={`${inter.className} font-semibold text-sm text-[#8091B5] text-center mb-5`}>Заполните форму для добавления</p>

             <span className={`${inter.className} font-semibold text-sm text-[#8091B5] text-center mb-2`}>НАЗВАНИЕ РЕКВИЗИТА *</span>

            <div className="relative flex items-center border border-[#eef2f9] rounded-lg p-3 w-full bg-[#FBFCFE] shadow-sm mt-2">
              <svg _ngcontent-ng-c1123165154="" className='w-6 h-6 ' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-ng-c1123165154="" d="M3 20c2.336-2.477 5.507-4 9-4 3.493 0 6.664 1.523 9 4M16.5 7.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z" stroke="#0022FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            <input
              type="text"
              placeholder="Введите название"    
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 bg-transparent outline-none h-8 w-full ml-2 placeholder-[#8092B5] placeholder:text-lg"
            />
          </div>

          
            <p className={`${inter.className} text-[16px] my-3 text-[#FB6C6C]`}>Поле не заполнено</p>
            <span className={`${inter.className} font-semibold text-sm uppercase text-[#8091B5] text-center mb-2`}>Выберите необходимое</span>

            <div className="relative flex items-center border border-[#eef2f9] rounded-lg p-3 w-full bg-[#FBFCFE] shadow-sm mt-2">
              <input 
              type="checkbox"
              onChange={(prev)=>setIsCheckeds(!checkeds)}
              name="" id="" />
            <input
              type="text"
              placeholder={checkeds ? 'Будет сохранен счёт' : 'Будет сохранена карта'}    
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 bg-transparent outline-none h-8 w-full ml-3 placeholder-[#0022FF] placeholder:text-lg"
            />
          </div>
          {checkeds && <p className={`${inter.className} mt-4 font-semibold text-sm uppercase text-[#8091B5] mb-2`}>номер счёта*</p>}
          {!checkeds && <p className={`${inter.className} mt-4 font-semibold text-sm uppercase text-[#8091B5] mb-2`}>карта*</p>}

          <div className="relative flex items-center border border-[#eef2f9] rounded-lg p-3 w-full bg-[#FBFCFE] shadow-sm mt-2">
            <svg _ngcontent-ng-c1123165154="" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-ng-c1123165154="" d="M18.333 8.333H1.667m7.5 3.333H5M1.667 6.833v6.333c0 .934 0 1.4.181 1.757.16.314.415.569.729.729.356.181.823.181 1.756.181h11.334c.933 0 1.4 0 1.756-.181.314-.16.569-.415.729-.729.181-.356.181-.823.181-1.757V6.833c0-.933 0-1.4-.181-1.756a1.666 1.666 0 0 0-.729-.729c-.356-.181-.823-.181-1.756-.181H4.333c-.933 0-1.4 0-1.756.181-.314.16-.569.415-.729.729-.181.356-.181.823-.181 1.756Z" stroke="#0052FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            <input
              type="text"
              placeholder={checkeds ? 'XXXXXXXXXXXXXXXX':'0000000000000000'}    
              onChange={(e) => setValue(e.target.value)}
              className="flex-1 bg-transparent outline-none h-8 w-full ml-3 placeholder-[#8091B5] placeholder:text-lg"
            />
          </div>

           <p className={`${inter.className} mt-4 font-semibold text-[16px]  text-[#FB6C6C] mb-2`}> {checkeds ? 'Номер счёта:' : 'Номер карты:' } Поле не заполнено</p>
           
           <span className={`${inter.className} font-semibold text-sm uppercase text-[#8091B5] text-center mb-2`}>ДЕРЖАТЕЛЬ КАРТЫ *</span>

           <div className="relative flex items-center border border-[#eef2f9] rounded-lg p-3 w-full bg-[#FBFCFE] shadow-sm mt-2">
              <svg _ngcontent-ng-c1123165154="" className='w-6 h-6 ' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-ng-c1123165154="" d="M3 20c2.336-2.477 5.507-4 9-4 3.493 0 6.664 1.523 9 4M16.5 7.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z" stroke="#0022FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            <input
              type="text"
              placeholder="CARD HOLDER"    
              onChange={(e) => setValue(e.target.value)}
              className="flex-1 bg-transparent outline-none h-8 w-full ml-3 placeholder-[#8092B5] placeholder:text-lg"
            />
          </div>
          <p className={`${inter.className} text-[16px] my-3 text-[#FB6C6C]`}>Поле не заполнено</p>

          <div className='flex gap-1 items-center'>
            <input type="checkbox" className='cursor-pointer ' name="" id="" />
            <span className={`${inter.className} font-semibold cursor-pointer text-sm text-[#8091B5] text-center`}>Запустить реквизит в работу</span>
          </div>

          <button className={`w-full bg-[#E6EEFF] h-[40px] ${inter.className} text-[16px] text-[#0052FF] my-4 rounded-lg py-2`}>Добавить реквизит</button>
          </div>

          
        <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
        </div>
        </div>
    )
}

export default RequisitesPage