import { ReactNode, useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";

import avatar from "../assets/avatar.jpg";
import Notification from "./Notification";
import Chat from "./Chat";
import AdminProfile from "./AdminProfile";
import { ContextType, useStateContext } from "../contexts/ContextProvider";

type NavButtonProps = {
  title: string;
  customFunc: () => void;
  icon: ReactNode;
  color: string;
  dotColor?: string;
};

const NavButton = ({
  title,
  customFunc,
  icon,
  color,
  dotColor,
}: NavButtonProps) => (
  <button
    type="button"
    onClick={customFunc}
    style={{ color }}
    className="relative text-xl rounded-full p-3 hover:bg-light-gray"
  >
    <span
      style={{ background: dotColor }}
      className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
    />
    {icon}
  </button>
);

const Navbar = () => {
  const {
    isMenuActive,
    setIsMenuActive,
    isClicked,
    setIsClicked,
    handleClick,
  } = useStateContext() as ContextType;
  return (
    <div className="flex justify-between p-2 md:mx-6 relative">
      <NavButton
        title="Menu"
        customFunc={() => setIsMenuActive((prev: boolean) => !prev)}
        color="black"
        icon={<AiOutlineMenu />}
      />
      <div className="flex">
      <NavButton
          title="Notifications"
          customFunc={() => handleClick("notification")}
          color="black"
          icon={<RiNotification3Line />}
          dotColor="#03c9d7"
        />
        <NavButton
          title="Chat"
          customFunc={() => handleClick("chat")}
          color="black"
          icon={<BsChatLeft />}
          dotColor="#03c9d7"
        />
        <div
          className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
          onClick={() => handleClick("adminProfile")}
        >
          <img src={avatar} alt="Avatar" className="rounded-full w-8 h-8" />
          <p>
            <span className="text-gray-400 text-14">Hi, </span>{" "}
            <span className="text-gray-400 font-bold ml-1 text-14">Admin</span>
          </p>
          <MdKeyboardArrowDown className="text-gray-400 text-14" />
        </div>

        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notification />}
        {isClicked.adminProfile && <AdminProfile />}
      </div>
    </div>
  );
};

export default Navbar;
