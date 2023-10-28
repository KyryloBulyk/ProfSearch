import { Link, NavLink } from "react-router-dom";
import { MdOutlineCancel } from "react-icons/md";

import { links } from "../constants/utils";
import { useStateContext, ContextType } from "../contexts/ContextProvider";


const Sidebar = () => {
  const {isMenuActive, setIsMenuActive, screenSize } = useStateContext() as ContextType;

  const handleCloseSidebar = () => {
    if(isMenuActive && screenSize <= 900) {
      setIsMenuActive(false);
    }
  }

  const activeLink =
    "flex items-center gap-5 px-4 pt-3 pb-2.5 rounded-lg  dark:text-white  text-md m-2 bg-light-gray";
  const normalLink =
    "flex items-center gap-5 px-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";

  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {isMenuActive && (
        <>
          <div className="flex justify-between items-center">
            <Link
              to="/"
              onClick={() => handleCloseSidebar}
              className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900"
            >
              <img src="/img/logo.png" alt="logo" className="h-12 w-12" />
              <span>Prof Search</span>
            </Link>
            
            <button
              type="button"
              onClick={() => setIsMenuActive((prevActiveMenu: boolean) => !prevActiveMenu)}
              className="text-xl rounded-full p-3 mt-4 mr-2 hover:bg-light-gray block xs:hidden"
            >
              <MdOutlineCancel />
            </button>
          </div>
          <div className="mt-10">
            {links.map((item: any) => (
              <div key={item.title}>
                <p className="text-gray-400 m-3 mt-4 uppercase">{item.title}</p>
                {item.links.map((link: any) => (
                  <NavLink
                    to={`/${link.name}`}
                    key={link.name}
                    onClick={() => {handleCloseSidebar}}
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    {link.icon}
                    <span className="capitalize">{link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;