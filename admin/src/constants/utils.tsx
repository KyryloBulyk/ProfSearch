import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiShoppingBag } from "react-icons/fi";
import { IoMdContacts } from "react-icons/io";
import { RiContactsLine } from "react-icons/ri";

export const links = [
  {
    title: "Dashboard",
    links: [
      {
        name: "home",
        icon: <FiShoppingBag />,
      },
    ],
  },

  {
    title: "Pages",
    links: [
      {
        name: "comments",
        icon: <AiOutlineShoppingCart />,
      },
      {
        name: "teachers",
        icon: <IoMdContacts />,
      },
      {
        name: "users",
        icon: <RiContactsLine />,
      },
    ],
  },
];
