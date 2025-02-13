import { AiOutlineExclamationCircle } from "react-icons/ai";
import { BiSolidWallet } from "react-icons/bi";
import { GoHome } from "react-icons/go";
import { HiUsers } from "react-icons/hi2";
import { PiHandWithdrawThin } from "react-icons/pi";
import { RxCounterClockwiseClock } from "react-icons/rx";
import {GiAerialSignal} from "react-icons/gi";
import {LuMessageCircleMore} from "react-icons/lu"
export const routes = [
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
