import { AiOutlineExclamationCircle } from "react-icons/ai";
import { BiSolidWallet } from "react-icons/bi";
import { GoHome } from "react-icons/go";
import { HiUsers } from "react-icons/hi2";
import { PiHandWithdrawThin } from "react-icons/pi";
import { RxCounterClockwiseClock } from "react-icons/rx";
import {GiAerialSignal} from "react-icons/gi";
import {LuMessageCircleMore} from "react-icons/lu"
import { IoIosSettings } from "react-icons/io";
export const routes = [
  {
    text: "Управления",
    icon: <IoIosSettings className="text-[#0052ff]" />,
    href: "/admin"

  },
  {
    text: "Главная",
    icon: <GoHome className="text-[#0052ff]" />,
    href: "/home",
  },
  {
    text: "Сделки",
    icon: <RxCounterClockwiseClock className="text-[#0052ff]" />,
    href: "/deals",
  },
  {
    text: "Выплаты",
    icon: <PiHandWithdrawThin className="text-[#0052ff]" />,
    href: "/withdrawals",
  },
  {
    text: "Споры",
    icon: <AiOutlineExclamationCircle className="text-[#0052ff]" />,
    href: "/disputes",
  },
  {
    text: "Профили",
    icon: <HiUsers className="text-[#0052ff]" />,
    href: "/bank-profiles",
  },
  {
    text: "Реквизиты",
    icon: <BiSolidWallet className="text-[#0052ff]" />
    ,
    href: "/requisites",
  },
  {
    text: "Устройства",
    icon: <GiAerialSignal  className="text-[#0052ff]" />
    ,
    href: "/devices",
  },
  {
    text: "Финансы",
    icon: <BiSolidWallet className="text-[#0052ff]" />,
    href: "/finances",
  },
  {
    text: "Сообщения",
    icon: <LuMessageCircleMore className="text-[#0052ff]" />    ,
    href: "/messages",
  },
];

export const options=[
  {
    title:'Gazprombank',
    text:'gazprombank',
    url:'https://trademo.top/assets/banks/gazprom.svg'
  },
  {
    title:'VTB',
    text:'vtb',
    url:'https://trademo.top/assets/banks/vtb.svg'
  },
  {
    title:'Ozon Bank',
    text:'ozon',
    url:'https://trademo.top/assets/banks/ozon.svg'
  },
  {
    title:'Alfa Bank',
    text:'alfa',
    url:'https://trademo.top/assets/banks/alfa.svg'
  },
  {
    title:'Sber',
    text:'sberbank',
    url:'https://trademo.top/assets/banks/sber.svg'
  },
  {
    title:'Raiffeisen',
    text:'raiffeisen',
    url:'https://trademo.top/assets/banks/raiffeisen.svg'
  },
  {
    title:'Tinkoff',
    text:'tinkoff',
    url:'https://trademo.top/assets/banks/tinkoff.svg'
  },
  {
    title:'RosBank',
    text:'rosBank',
    url:'https://trademo.top/assets/banks/rosbank.svg'
  },
  {
    title:'OTP Bank',
    text:'otp',
    url:'https://trademo.top/assets/banks/otp_bank.svg'
  },
  {
    title:'Promsvyazbank',
    text:'psb',
    url:'https://trademo.top/assets/banks/psb.svg'
  },
  {
    title:'Uralsib',
    text:'uralsib',
    url:'https://trademo.top/assets/banks/uralsib.svg'
  },
  {
    title:'Akbars',
    text:'akbars',
    url:'https://trademo.top/assets/banks/akbars.svg'
  },
  {
    title:'Primsocbank',
    text:'pskb',
    url:'https://findssnet.io/bank/logo/pskb.svg'
  },
  {
    title:'Yandex Pay',
    text:'yandexpay',
    url:'https://trademo.top/assets/banks/yandexpay.svg'
  },
  {
    title:'Sovkombank',
    text:'sovkombank',
    url:'https://trademo.top/assets/banks/sovkombank.svg'
  },
  {
    title:'Zenit',
    text:'zenit',
    url:'https://trademo.top/assets/banks/zenit.svg'
  },
  {
    title:'Cifra Bank',
    text:'cifra',
    url:'https://trademo.top/assets/banks/cifra.svg'
  },
  {
    title:'УРБиР',
    text:'urbir',
    url:'https://trademo.top/assets/banks/urbir.svg'
  },
  {
    title:'ЧБРР',
    text:'chbrr',
    url:'https://trademo.top/assets/banks/chbrr.svg'
  },
  {
    title:'Russian Standard',
    text:'russtand',
    url:'https://trademo.top/assets/banks/russtand.svg'
  },
  {
    title:'Russian Bank',
    text:'bankrus',
    url:'https://trademo.top/assets/banks/bankrus.svg'
  },
]