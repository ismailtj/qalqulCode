import { FaList } from "react-icons/fa";
import { BiUserPlus } from "react-icons/bi";
import { BsInfoLg } from "react-icons/bs";
import { RiLoginBoxLine, RiLogoutBoxLine } from "react-icons/ri";

export const SideBarMenu = [
  {
    name: "Log-in",
    link: "/login",
    icon: (size) => <RiLoginBoxLine size={size} />,
    ifLogin: false,
  },
  {
    name: "Log-out",
    link: "/logout",
    icon: (size) => <RiLogoutBoxLine size={size} />,
    ifLogin: true,
  },
  {
    name: "register",
    link: "/reg",
    icon: (size) => <BiUserPlus size={size} />,
    ifLogin: false,
  },
  {
    name: "Rooms",
    link: "/rooms",
    icon: (size) => <FaList size={size} />,
    ifLogin: true,
  },
  {
    name: "About",
    link: "/",
    icon: (size) => <BsInfoLg size={size} />,
    ifLogin: "always",
  },
];
