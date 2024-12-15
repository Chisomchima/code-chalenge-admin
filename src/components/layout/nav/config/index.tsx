import { FaHome } from "react-icons/fa";
import { PiShieldLight } from "react-icons/pi";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import { PiUsersThree } from "react-icons/pi";
import { PiBracketsAngle } from "react-icons/pi";

export const navConfig = [
  {
    title: "Dash board",
    icon: <FaHome size={24} />,
    path: "/",
  },
  {
    title: "Challenges",
    icon: <PiBracketsAngle size={24} />,
    path: "/challenges",
  },
  {
    title: "Users",
    icon: <PiUsersThree size={24} />,
    path: "/users",
  },
  {
    title: "Community",
    icon: <HiOutlineChatBubbleLeftRight size={24} />,
    path: "/community",
  },
  {
    title: "Admins",
    icon: <PiShieldLight size={24} />,
    path: "/admins",
  },
];
