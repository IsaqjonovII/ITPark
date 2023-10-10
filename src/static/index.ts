import {
  FaSackDollar,
  FaPills,
  FaCartShopping,
  FaUserGraduate,
  FaSeedling,
} from "react-icons/fa6";
import { IoGameControllerSharp } from "react-icons/io5";

import { INews, IStartupData } from "interfaces";

export const startups_data: IStartupData[] = [
  {
    id: "1",
    name: "Fintech",
    description:
      "A startup providing innovative financial technology solutions.",
    type: "s_fintech",
    Icon: FaSackDollar,
  },
  {
    id: "2",
    name: "MedTech",
    description:
      "A startup dedicated to revolutionizing healthcare technology.",
    type: "s_medtech",
    Icon: FaPills,
  },
  {
    id: "3",
    name: "AgroTech",
    description:
      "A startup focused on modernizing agriculture through technology.",
    type: "s_agrotech",
    Icon: FaSeedling,
  },

  {
    id: "5",
    name: "E-Commerce",
    description: "A startup driving innovation in the e-commerce industry.",
    type: "s_ecommerce",
    Icon: FaCartShopping,
  },
  {
    id: "8",
    name: "Online Education",
    description: "A startup providing cutting-edge online education solutions.",
    type: "s_onlineedu",
    Icon: FaUserGraduate,
  },
  {
    id: "9",
    name: "GameDev",
    description: "A startup focused on game development and innovation.",
    type: "s_gamedev",
    Icon: IoGameControllerSharp,
  },
];
export const newsData: INews[] = [
  {
    id: 0,
    title: "Big ass house",
    subtitle: "That's fcuking crazy you know?! Whoohoa",
    img:
      "https://it-park.uz/storage/images/news/normal/PMZkYOqGXpeslcSiDyT8NKJeBQ4P2ERfOIcYeKZP.png",
    date: "08-06-2023",
  },
  {
    id: 1,
    title: "CodeFest winners",
    subtitle: "We're excited to share that we're so happy",
    img:
      "https://it-park.uz/storage/images/news/normal/PMZkYOqGXpeslcSiDyT8NKJeBQ4P2ERfOIcYeKZP.png",
    date: "08-06-2023",
  },
  {
    id: 2,
    title: "CodeFest winners",
    subtitle: "We're excited to share that we're so happy",
    img:
      "https://it-park.uz/storage/images/news/normal/PMZkYOqGXpeslcSiDyT8NKJeBQ4P2ERfOIcYeKZP.png",
    date: "08-06-2023",
  },
];
