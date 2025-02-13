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
    icon: <GoHome />,
    href: "/home",
  },
  {
    text: "Сделки",
    icon: <RxCounterClockwiseClock />,
    href: "/deals",
  },
  {
    text: "Выплаты",
    icon: <PiHandWithdrawThin />,
    href: "/withdrawals",
  },
  {
    text: "Споры",
    icon: <AiOutlineExclamationCircle />,
    href: "/disputes",
  },
  {
    text: "Профили",
    icon: <HiUsers />,
    href: "/bank-profiles",
  },
  {
    text: "Реквизиты",
    icon: <BiSolidWallet />
    ,
    href: "/requisites",
  },
  {
    text: "Устройства",
    icon: <GiAerialSignal />
    ,
    href: "/devices",
  },
  {
    text: "Финансы",
    icon: <BiSolidWallet />,
    href: "/finances",
  },
  {
    text: "Сообщения",
    icon: <LuMessageCircleMore />    ,
    href: "/messages",
  },
];
