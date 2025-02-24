import React from 'react'
import { Inter } from 'next/font/google';
export const inter = Inter({
    weight: ['400'],
    subsets: ['latin'],
  });
function DevicePage() {
  return (
    <div> 
      <div className='flex justify-between w-full items-center'>
                <p className={`${inter.className} text-[24px] md:text-[32px] text-[#002269] leading-6 mb-7`}>Устройства</p>
                <button className='btn bg-[#e6eeff] md:bg-[#FBFCFE] border border-[#eef2f9] flex items-center gap-[10px] py-[6px] md:py-2.5 px-[10px] md:px-5 rounded-[6px] mb-4 z-10'>
                    <svg _ngcontent-ng-c2941981905="" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className='mt-[1px] w-4 h-4 md:w-5 md:h-5'><path _ngcontent-ng-c2941981905="" d="M12.182 4.318a4.5 4.5 0 0 1 0 6.364m-6.364 0a4.5 4.5 0 0 1 0-6.364m-2.121 8.485a7.5 7.5 0 0 1 0-10.606m10.606 0a7.5 7.5 0 0 1 0 10.606M9 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm0 0v6.75" stroke="#0052FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                    <span className='text-[#0052ff] md:text-[#002269] leading-2 text-[12px] font-medium md:text-sm'>Добавить устройство
                    </span>
                    </button>
                      <ul
                    tabIndex={0}
                    className={`dropdown-content menu p-2 shadow bg-[#FBFCFE] hover:bg-[#fafbff] rounded-box w-52 ${
                      isOpen ? "block" : "hidden"
                    }`}
                  >
                    <li className='flex gap-2 items-center'>
                         <svg _ngcontent-ng-c2661008953="" width='15' height='15' viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-ng-c2661008953="" d="M4.875 4.875h.008m8.242 0h.008m-8.258 8.25h.008M9.75 9.75h.008m3.367 3.375h.008m-.383 2.625h3v-3m-5.25-.375v3.375m5.25-5.25h-3.375m-.675-3h2.85c.42 0 .63 0 .79-.082a.75.75 0 0 0 .328-.328c.082-.16.082-.37.082-.79V3.45c0-.42 0-.63-.082-.79a.75.75 0 0 0-.327-.328c-.16-.082-.371-.082-.791-.082H11.7c-.42 0-.63 0-.79.082a.75.75 0 0 0-.328.328c-.082.16-.082.37-.082.79V6.3c0 .42 0 .63.082.79a.75.75 0 0 0 .327.328c.16.082.371.082.791.082Zm-8.25 0H6.3c.42 0 .63 0 .79-.082a.75.75 0 0 0 .328-.328c.082-.16.082-.37.082-.79V3.45c0-.42 0-.63-.082-.79a.75.75 0 0 0-.328-.328c-.16-.082-.37-.082-.79-.082H3.45c-.42 0-.63 0-.79.082a.75.75 0 0 0-.328.328c-.082.16-.082.37-.082.79V6.3c0 .42 0 .63.082.79a.75.75 0 0 0 .328.328c.16.082.37.082.79.082Zm0 8.25H6.3c.42 0 .63 0 .79-.082a.75.75 0 0 0 .328-.327c.082-.16.082-.371.082-.791V11.7c0-.42 0-.63-.082-.79a.75.75 0 0 0-.328-.328c-.16-.082-.37-.082-.79-.082H3.45c-.42 0-.63 0-.79.082a.75.75 0 0 0-.328.327c-.082.16-.082.371-.082.791v2.85c0 .42 0 .63.082.79a.75.75 0 0 0 .328.328c.16.082.37.082.79.082Z" stroke="#0052FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                         <span className={`${inter.className} text-[#002269] text-sm `}>Показать QR-код</span>
                    </li>
                    <li className='flex gap-2 items-center'>
                      <svg className='w-5 h-5' _ngcontent-ng-c2661008953="" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-ng-c2661008953="" d="M11 4H6.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C2 6.28 2 7.12 2 8.8v8.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C4.28 22 5.12 22 6.8 22h8.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C20 19.72 20 18.88 20 17.2V13M8 16h1.675c.489 0 .733 0 .963-.055.204-.05.4-.13.579-.24.201-.123.374-.296.72-.642L21.5 5.5a2.121 2.121 0 0 0-3-3l-9.563 9.563c-.346.346-.519.519-.642.72a2 2 0 0 0-.24.579c-.055.23-.055.474-.055.963V16Z" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                         <span className={`${inter.className} text-[#002269] text-sm `}>Показать QR-код</span>
                    </li>
                    <li>
                      <a className="text-red-500 flex items-center gap-2">🗑 Удалить устройство</a>
                    </li>
                  </ul>
                </div>
              </div>
             </div>
      
      <div className='flex justify-between mt-10 w-full'>
          <div className=''>
              <svg _ngcontent-ng-c2661008953="" className='absolute z-0' height='592' width='296' viewBox="0 0 300 600" fill="none" xmlns="http://www.w3.org/2000/svg" class="styles_deviceImage__NMpHC"><path _ngcontent-ng-c2661008953="" fill-rule="evenodd" clip-rule="evenodd" d="M32 4h234c15.464 0 28 12.536 28 28v536c0 15.464-12.536 28-28 28H32c-15.464 0-28-12.536-28-28V32C4 16.536 16.536 4 32 4ZM1 32C1 14.88 14.88 1 32 1h234c17.121 0 31 13.88 31 31v189.354c-.622.705-1 1.632-1 2.646v67c0 1.014.378 1.941 1 2.646V568c0 17.121-13.879 31-31 31H32c-17.12 0-31-13.879-31-31V32Z" fill="#343443"></path><path _ngcontent-ng-c2661008953="" fill-rule="evenodd" clip-rule="evenodd" d="M32 1h234c17.121 0 31 13.88 31 31v189.354a4.032 4.032 0 0 1 1-.819V32c0-17.673-14.327-32-32-32H32C14.327 0 0 14.327 0 32v536c0 17.673 14.327 32 32 32h234c17.673 0 32-14.327 32-32V294.465a4.032 4.032 0 0 1-1-.819V568c0 17.121-13.879 31-31 31H32c-17.12 0-31-13.879-31-31V32C1 14.88 14.88 1 32 1Z" fill="#1A1A27"></path><rect _ngcontent-ng-c2661008953="" x="5.5" y="5.5" width="287" height="589" rx="26.5" stroke="#1A1A27" stroke-width="3"></rect><rect _ngcontent-ng-c2661008953="" x="8" y="8" width="282" height="584" rx="24" stroke="#222232" stroke-width="2"></rect><rect _ngcontent-ng-c2661008953="" x="12.5" y="12.5" width="273" height="575" rx="19.5" stroke="#F0F4FC" stroke-width="7"></rect><rect _ngcontent-ng-c2661008953="" x="16" y="16" width="266" height="568" rx="16" fill="#F9FBFF"></rect><path _ngcontent-ng-c2661008953="" d="M298 120h.5a1.5 1.5 0 0 1 1.5 1.5v77a1.5 1.5 0 0 1-1.5 1.5h-.5v-80Z" fill="url(#device-body_svg__a)"></path><path _ngcontent-ng-c2661008953="" d="M296 230h.5a1.5 1.5 0 0 1 1.5 1.5v52a1.5 1.5 0 0 1-1.5 1.5h-.5v-55Z" fill="url(#device-body_svg__b)"></path><defs _ngcontent-ng-c2661008953=""><linearGradient _ngcontent-ng-c2661008953="" id="device-body_svg__a" x1="300" y1="120.571" x2="298" y2="120.571" gradientUnits="userSpaceOnUse"><stop _ngcontent-ng-c2661008953="" stop-color="#343443"></stop><stop _ngcontent-ng-c2661008953="" offset="1" stop-color="#272733"></stop></linearGradient><linearGradient _ngcontent-ng-c2661008953="" id="device-body_svg__b" x1="298" y1="230.393" x2="296" y2="230.393" gradientUnits="userSpaceOnUse"><stop _ngcontent-ng-c2661008953="" stop-color="#343443"></stop><stop _ngcontent-ng-c2661008953="" offset="1" stop-color="#272733"></stop></linearGradient></defs></svg>

               <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 '>
              <svg _ngcontent-ng-c2661008953="" className='w-8 h-8' viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-ng-c2661008953="" d="M11.328 7.266a.79.79 0 0 1 .669.249.787.787 0 0 1 .21.766.895.895 0 0 1-.259.445 12.61 12.61 0 0 0-2.246 3.125 12.41 12.41 0 0 0-1.304 4.594c-.06.703-.06 1.407 0 2.11a12.27 12.27 0 0 0 1.88 5.62c.488.772 1.05 1.479 1.69 2.119.22.224.31.468.273.733-.044.344-.227.572-.546.683-.307.106-.573.063-.8-.131a.826.826 0 0 1-.058-.052 13.543 13.543 0 0 1-2.248-2.913c-1.394-2.402-2.024-5.008-1.89-7.817.118-2.467.833-4.74 2.144-6.821A12.628 12.628 0 0 1 10.729 7.6a.562.562 0 0 0 .052-.059.733.733 0 0 1 .547-.276ZM30.118 7.265c.34-.057.626.062.859.356.016.02.033.04.052.059a14.206 14.206 0 0 1 3.21 5.289c.582 1.714.823 3.491.722 5.332a13.654 13.654 0 0 1-1.816 6.191A14.8 14.8 0 0 1 31.05 27.3c-.121.13-.239.24-.351.332-.32.191-.633.175-.938-.05a.8.8 0 0 1-.327-.57.822.822 0 0 1 .25-.689 12.704 12.704 0 0 0 1.918-2.495 12.308 12.308 0 0 0 1.7-5.703 12.332 12.332 0 0 0-1.119-5.835 12.549 12.549 0 0 0-2.541-3.654.777.777 0 0 1-.169-.804.76.76 0 0 1 .645-.567Z" fill="#0052FF"></path><path _ngcontent-ng-c2661008953="" d="M14.317 10.195a.754.754 0 0 1 .493.152c.16.098.27.242.327.434.094.33.005.632-.269.903-.268.26-.529.566-.781.918a8.208 8.208 0 0 0-1.587 4.8 8.066 8.066 0 0 0 1.343 4.634c.327.506.715.984 1.164 1.437.018.018.035.039.049.06.193.295.192.594-.002.896-.21.334-.509.453-.894.356-.177-.045-.345-.157-.503-.337a10.381 10.381 0 0 1-2.211-3.51 9.21 9.21 0 0 1-.567-2.481c-.182-1.956.165-3.784 1.04-5.484a10.303 10.303 0 0 1 1.792-2.485.899.899 0 0 1 .606-.293ZM27.893 10.423a10.098 10.098 0 0 1 2.102 3.078 9.886 9.886 0 0 1 .825 3.471 9.801 9.801 0 0 1-.786 4.449 9.848 9.848 0 0 1-1.975 2.989.938.938 0 0 0-.052.058c-.22.267-.484.377-.796.332a.744.744 0 0 1-.42-.206.767.767 0 0 1-.288-.669c.014-.26.135-.485.365-.673a.626.626 0 0 0 .057-.053 8.22 8.22 0 0 0 2.078-4.04 7.56 7.56 0 0 0 .157-1.464 8.438 8.438 0 0 0-.528-3.125c-.417-1.08-1.056-2.075-1.918-2.984-.226-.236-.283-.511-.171-.825a.766.766 0 0 1 .625-.546.757.757 0 0 1 .725.208Z" fill="#0052FF"></path><path _ngcontent-ng-c2661008953="" d="M17.798 13.316a.93.93 0 0 1 .288.395.807.807 0 0 1-.188.823 4.194 4.194 0 0 0-1.199 3.513 4.027 4.027 0 0 0 1.113 2.324c.114.119.199.242.254.371a.761.761 0 0 1-.063.699.803.803 0 0 1-.718.415.732.732 0 0 1-.523-.181 5.333 5.333 0 0 1-.849-1.045A5.899 5.899 0 0 1 15 17.285c.02-.854.227-1.656.62-2.407a5.928 5.928 0 0 1 1.055-1.465.924.924 0 0 1 .395-.249c.282-.058.524-.008.728.152ZM25.034 13.462c.537.59.942 1.226 1.216 1.91.296.71.432 1.466.41 2.265a6.02 6.02 0 0 1-1.304 3.54c-.172.22-.35.402-.532.542-.319.205-.633.194-.942-.035a.837.837 0 0 1-.328-.57.744.744 0 0 1 .122-.543c.132-.183.269-.347.412-.49a.486.486 0 0 0 .052-.058c.64-.826.92-1.771.84-2.835-.075-1.007-.483-1.894-1.226-2.661a.733.733 0 0 1-.2-.386.809.809 0 0 1 .18-.718.724.724 0 0 1 .406-.259c.343-.08.641.02.894.298Z" fill="#0052FF"></path><path _ngcontent-ng-c2661008953="" d="M22.075 16.401c.34.373.476.811.405 1.314a1.553 1.553 0 0 1-.637 1.07.105.105 0 0 0-.041.113c1.016 4.826 2.027 9.624 3.034 14.395.006.031.026.047.057.047.605-.002 1.194-.002 1.767 0a.81.81 0 0 1 .708.386.728.728 0 0 1 .108.625c-.083.348-.292.556-.625.625-.158.032-.345.04-.562.024-3.803-.005-7.577-.007-11.324-.005a.538.538 0 0 1-.077-.005c-.356-.047-.584-.24-.684-.58-.095-.324-.024-.6.214-.831a.77.77 0 0 1 .562-.24 98.016 98.016 0 0 1 1.75 0c.061 0 .099-.03.111-.09.933-4.387 1.854-8.753 2.763-13.098.09-.43.182-.853.275-1.27a.049.049 0 0 0-.018-.054c-.412-.325-.64-.716-.682-1.17-.046-.558.134-1.021.543-1.392a1.62 1.62 0 0 1 .844-.406c.598-.086 1.1.095 1.509.542Zm-2.08 9.981c-.478 2.248-.964 4.55-1.459 6.906-.006.032.007.047.039.047 1.498.006 2.995.007 4.493.005.049 0 .068-.024.058-.072-.756-3.596-1.513-7.19-2.272-10.783-.02-.091-.038-.091-.057 0a320.779 320.779 0 0 1-.802 3.897Z" fill="#0052FF"></path></svg>
              <p></p>
             </div>
             
          </div>

          <div className='left-auto w-[65%]'> 
            <div className='p-5 mb-5 w-full  border border-[#eef2f9] rounded-[16px] bg-[#FBFCFE] flex items-center gap-2 h-[104px]'>
              <svg _ngcontent-ng-c2661008953="" className='w-8 h-8' viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-ng-c2661008953="" d="M6 8.75h.005M4.1 11h3.8c.56 0 .84 0 1.054-.109a1 1 0 0 0 .437-.437C9.5 10.24 9.5 9.96 9.5 9.4V2.6c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437C8.74 1 8.46 1 7.9 1H4.1c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C2.5 1.76 2.5 2.04 2.5 2.6v6.8c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437C3.26 11 3.54 11 4.1 11Zm2.15-2.25a.25.25 0 1 1-.5 0 .25.25 0 0 1 .5 0Z" stroke="#0052ff" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></path></svg>
              <div className='ml-5'>
                <p className={`${inter.className} font-medium text-[#8091B5] text-[18px] `}>Название устройства</p>
                <p className={`${inter.className} text-[#002269] text-[900] text-[22px] `}>24123423</p>
              </div>
            </div>
             <div className='p-5 mb-5 w-full  border border-[#eef2f9] rounded-[16px] bg-[#FBFCFE] flex items-center gap-2 h-[104px]'>
            <svg _ngcontent-ng-c2661008953="" className='w-8 h-8' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-ng-c2661008953="" d="M4 6.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C6.28 2 7.12 2 8.8 2h3.212c.733 0 1.1 0 1.446.083.306.073.598.195.867.36.303.185.562.444 1.08.963l3.19 3.188c.518.519.777.778.963 1.081a3 3 0 0 1 .36.867c.082.346.082.712.082 1.446V17.2c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C17.72 22 16.88 22 15.2 22H8.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C4 19.72 4 18.88 4 17.2V6.8Z" stroke="#0052FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path _ngcontent-ng-c2661008953="" d="M8 13.8c0-.28 0-.42.055-.527a.5.5 0 0 1 .218-.218C8.38 13 8.52 13 8.8 13h6.4c.28 0 .42 0 .527.055a.5.5 0 0 1 .218.218c.055.107.055.247.055.527v3.4c0 .28 0 .42-.055.527a.5.5 0 0 1-.218.218C15.62 18 15.48 18 15.2 18H8.8c-.28 0-.42 0-.527-.055a.5.5 0 0 1-.218-.218C8 17.62 8 17.48 8 17.2v-3.4Z" stroke="#0052FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
              <div className='ml-5'>
                <p className={`${inter.className} font-medium text-[#8091B5] text-[18px] `}>Номер SIM</p>
              </div>
            </div>
            <div className='p-5 mb-5 w-full  border border-[#eef2f9] rounded-[16px] bg-[#FBFCFE]  items-center gap-2 h-[133px]'>
            <svg _ngcontent-ng-c2661008953="" className='w-6 h-6 mb-2' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-ng-c2661008953="" d="m15 9-6 6m0-6 6 6m7-3c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z" stroke="#0052ff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
              <div>
                <p className={`${inter.className} text-[#002269] text-[900] text-[16px] `}>Не в работе</p>
                <p className={`${inter.className} font-medium text-[#8091B5] text-[14px] `}>Устройство не в работе</p>
                
              </div>
            </div>
            <div className='p-5 mb-5 w-full  border border-[#eef2f9] rounded-[16px] bg-[#FBFCFE]  items-center gap-2 h-[133px]'>
              <svg _ngcontent-ng-c2661008953="" className='w-6 h-6 mb-2' viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g _ngcontent-ng-c2661008953="" clip-path="url(#wifi_svg__a)"><path _ngcontent-ng-c2661008953="" d="M12.5 19.5h.01M23.306 8.7A15.942 15.942 0 0 0 12.5 4.5c-4.166 0-7.96 1.592-10.807 4.2m3.539 3.543A10.958 10.958 0 0 1 12.5 9.5c2.786 0 5.33 1.036 7.268 2.743m-3.57 3.532A5.974 5.974 0 0 0 12.5 14.5c-1.416 0-2.718.49-3.745 1.312" stroke="#0052FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></g><defs _ngcontent-ng-c2661008953=""><clipPath _ngcontent-ng-c2661008953="" id="wifi_svg__a"><path _ngcontent-ng-c2661008953="" fill="#fff" transform="translate(.5)" d="M0 0h24v24H0z"></path></clipPath></defs></svg>
              <div>
                <p className={`${inter.className} text-[#002269] text-[900] text-[16px] `}>Нет данных</p>
                <p className={`${inter.className} font-medium text-[#8091B5] text-[14px] `}>Нет данных о скорости</p>
                
              </div>
            </div>

            <div className='p-5 mb-5 w-full  border border-[#eef2f9] rounded-[16px] bg-[#FBFCFE]  items-center gap-2 h-[133px]'>
              <p className={`${inter.className} text-[#002269] text-[900] text-[18px] mb-6 `}>Данные об устройстве</p>
              <div>
                <div>
                  <svg _ngcontent-ng-c2661008953="" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><g _ngcontent-ng-c2661008953="" clip-path="url(#settings-02_svg__a)" stroke="#0052FF" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path _ngcontent-ng-c2661008953="" d="m4.698 9.686.292.657a1.106 1.106 0 0 0 2.022 0l.292-.657a1.213 1.213 0 0 1 1.235-.712l.715.076a1.106 1.106 0 0 0 1.011-1.751l-.423-.582A1.214 1.214 0 0 1 9.612 6c0-.257.081-.507.232-.714l.424-.582a1.105 1.105 0 0 0-1.012-1.751l-.715.076a1.213 1.213 0 0 1-1.235-.714l-.294-.658a1.106 1.106 0 0 0-2.022 0l-.292.657a1.213 1.213 0 0 1-1.235.715l-.718-.076a1.106 1.106 0 0 0-1.01 1.75l.423.583a1.214 1.214 0 0 1 0 1.428l-.424.582a1.106 1.106 0 0 0 1.011 1.751l.715-.076a1.217 1.217 0 0 1 1.238.715Z"></path><path _ngcontent-ng-c2661008953="" d="M6 7.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path></g><defs _ngcontent-ng-c2661008953=""><clipPath _ngcontent-ng-c2661008953="" id="settings-02_svg__a"><path _ngcontent-ng-c2661008953="" fill="#fff" d="M0 0h12v12H0z"></path></clipPath></defs></svg>
                    <p>Модель</p>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default DevicePage
