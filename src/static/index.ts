import {
  FaSackDollar,
  FaPills,
  FaBuildingColumns,
  FaCartShopping,
  FaSitemap,
  FaCarRear,
  FaUserGraduate,
  FaSeedling,
} from "react-icons/fa6";
import { IoGameControllerSharp } from "react-icons/io5";

import { IStartupData, IStartupTypes } from "interfaces";

export const startups_data: IStartupData[] = [
  {
    id: "1",
    name: "Fintech",
    description:
      "A startup providing innovative financial technology solutions.",
    type: "Fintech",
    Icon: FaSackDollar,
  },
  {
    id: "2",
    name: "MediTech",
    description:
      "A startup dedicated to revolutionizing healthcare technology.",
    type: "Medtech",
    Icon: FaPills,
  },
  {
    id: "3",
    name: "AgroTech",
    description:
      "A startup focused on modernizing agriculture through technology.",
    type: "Agrotech",
    Icon: FaSeedling,
  },
  {
    id: "4",
    name: "GovTech",
    description:
      "A startup working towards transforming government services using technology.",
    type: "E-Gov",
    Icon: FaBuildingColumns,
  },
  {
    id: "5",
    name: "E-Commerce",
    description: "A startup driving innovation in the e-commerce industry.",
    type: "E-Commerce",
    Icon: FaCartShopping,
  },
  {
    id: "6",
    name: "IoT",
    description:
      "A startup specializing in Internet of Things (IoT) technology.",
    type: "IoT",
    Icon: FaSitemap,
  },
  {
    id: "7",
    name: "AutoTech",
    description:
      "A startup revolutionizing the automotive technology industry.",
    type: "Autotech",
    Icon: FaCarRear,
  },
  {
    id: "8",
    name: "Online Education",
    description: "A startup providing cutting-edge online education solutions.",
    type: "Online Education",
    Icon: FaUserGraduate,
  },
  {
    id: "9",
    name: "GameDev",
    description: "A startup focused on game development and innovation.",
    type: "GameDev",
    Icon: IoGameControllerSharp,
  },
];

export const startup_types: IStartupTypes[] = [
  {
    id: "1",
    title: "Finance",
    type: "finance",
  },
  {
    id: "2",
    title: "Medtech",
    type: "medtech",
  },
  {
    id: "3",
    title: "Agrotech",
    type: "agrotech",
  },
  {
    id: "4",
    title: "E-Gov",
    type: "e-gov",
  },
  {
    id: "5",
    title: "E-Commerce",
    type: "e-commerce",
  },
  {
    id: "6",
    title: "IoT",
    type: "IoT",
  },
  {
    id: "7",
    title: "Autotech",
    type: "autotech",
  },
  {
    id: "8",
    title: "Online Education",
    type: "online education",
  },
  {
    id: "9",
    title: "Game Dev",
    type: "game dev",
  },
];
