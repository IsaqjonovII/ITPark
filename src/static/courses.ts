import { ICourse, ICourseTypes } from "interfaces";
import { FaServer, FaAndroid, FaPalette, FaRobot } from "react-icons/fa6";
import { PiDesktopTowerFill } from "react-icons/pi";
import { CgBrowser } from "react-icons/cg";
import { MdSlowMotionVideo } from "react-icons/md";
import { TbDeviceDesktopHeart } from "react-icons/tb";

const types = [
  "edu_front",
  "edu_back",
  "edu_adr",
  "edu_gd",
  "edu_robo",
  "edu_cl",
  "edu_md",
  "edu_wd",
];
const icons = [
  CgBrowser,
  FaServer,
  FaAndroid,
  FaPalette,
  FaRobot,
  PiDesktopTowerFill,
  MdSlowMotionVideo,
  TbDeviceDesktopHeart,
];
export const generateCourseTypes = (): ICourseTypes[] =>
  types.map((type, index) => ({
    id: index,
    name: type,
    description: "Some text",
    Icon: icons[index],
  }));

type TCourseData = {
  id: number;
  courses: ICourse[];
};
export const eduCentersData: TCourseData[] = [
  {
    id: 0,
    courses: [
      {
        id: 0,
        name: "IT Center Revolution",
        price: 400_000,
        duration: "6 - 8",
      },
      {
        id: 1,
        name: "BPO School",
        price: 400_000,
        duration: "6 - 8",
      },
    ],
  },
  {
    id: 1,
    courses: [
      {
        id: 0,
        name: "IT Center Revolution",
        price: 400_000,
        duration: "8",
      },
      {
        id: 1,
        name: "BPO School",
        price: 400_000,
        duration: "8",
      },
    ],
  },
  {
    id: 2,
    courses: [
      {
        id: 0,
        name: "IT Center Revolution",
        price: 400_000,
        duration: "12 - 14",
      },
      {
        id: 1,
        name: "BPO School",
        price: 400_000,
        duration: "10 - 12",
      },
    ],
  },
  {
    id: 3,
    courses: [
      {
        id: 0,
        name: "IT Center Revolution",
        price: 200_000,
        duration: "1 month",
      },
      {
        id: 1,
        name: "BPO School",
        price: 200_000,
        duration: "1 month",
      },
    ],
  },
  {
    id: 4,
    courses: [
      {
        id: 0,
        name: "IT Center Revolution",
        price: 400_000,
        duration: "6",
      },
      {
        id: 1,
        name: "BPO School",
        price: 400_000,
        duration: "6",
      },
    ],
  },
  {
    id: 5,
    courses: [
      {
        id: 0,
        name: "IT Center Revolution",
        price: 600_000,
        duration: "8",
      },
      {
        id: 1,
        name: "BPO School",
        price: 600_000,
        duration: "8",
      },
    ],
  },
  {
    id: 6,
    courses: [
      {
        id: 0,
        name: "IT Center Revolution",
        price: 600_000,
        duration: "8",
      },
      {
        id: 1,
        name: "BPO School",
        price: 600_000,
        duration: "8",
      },
    ],
  },
];
