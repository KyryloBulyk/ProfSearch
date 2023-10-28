import { FaUsers } from "react-icons/fa";
import { RiNotification3Line } from "react-icons/ri";
import { MdClass } from "react-icons/md";

import { FiShoppingBag } from "react-icons/fi";
import { IoMdContacts } from "react-icons/io";
import { RiContactsLine } from "react-icons/ri";
import { BsChatLeft } from "react-icons/bs";
import { ITeacher } from "src/types";

import { faker } from '@faker-js/faker';

export function createRandomTeacher(): ITeacher {
  const number: number = 30;
  const name = faker.person.firstName().toString();
  const surname = faker.person.lastName().toString();
  return {
  _id: faker.datatype.number(number),
  name,
  surname,
  title: "Ing",
  photoUrl: faker.image.avatar(),
  room: faker.datatype.number(1000).toString(),
  building: "TUKE",
  department: faker.location.streetAddress().toString(),
  email: `${name.toLowerCase()}.${surname.toLowerCase()}@tuke.sk`,
  linkedIn: undefined,
  instagram: undefined,
  description_UA: "Опис",
  description_SK: "Opys",
  };
}

export const TEACHERS = faker.helpers.multiple(createRandomTeacher, {
  count: 30,
});

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
        icon: <RiNotification3Line />,
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

export interface IState {
  chat: boolean;
  notification: boolean;
  adminProfile: boolean;
}

export const initialState = {
  chat: false,
  notification: false,
  adminProfile: false,
};

export const trafficData = [
  {
    icon: <FaUsers />,
    amount: "2034",
    percentage: "+45%",
    title: "Customers",
    iconColor: "#03C9D7",
    iconBg: "#E5FAFB",
    pcColor: "green-600",
  },
  {
    icon: <MdClass />,
    amount: "4,396",
    percentage: "+13%",
    title: "Teachers",
    iconColor: "rgb(254, 201, 15)",
    iconBg: "rgb(255, 244, 229)",
    pcColor: "green-600",
  },
  {
    icon: <BsChatLeft />,
    amount: "569",
    percentage: "+38%",
    title: "Comments",
    iconColor: "rgb(228, 106, 118)",
    iconBg: "rgb(255, 244, 229)",

    pcColor: "green-600",
  },
];
