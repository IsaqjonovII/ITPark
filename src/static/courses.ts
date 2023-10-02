import { ICourse, ICourseTypes } from "interfaces";
import { FaServer, FaAndroid, FaPalette, FaRobot } from "react-icons/fa6";
import { PiDesktopTowerFill } from "react-icons/pi";
import { CgBrowser } from "react-icons/cg";
import { MdSlowMotionVideo } from "react-icons/md";
import { TbDeviceDesktopHeart } from "react-icons/tb";

const types = [
  "Front-end",
  "Back-end",
  "Android",
  "Graphic design",
  "Robototechnics",
  "Computer Literacy",
  "Motion Design",
  "Web Design",
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
        duration: "6 - 8 months",
      },
      {
        id: 1,
        name: "BPO School",
        price: 400_000,
        duration: "6 - 8 months",
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
        duration: "8 months",
      },
      {
        id: 1,
        name: "BPO School",
        price: 400_000,
        duration: "8 months",
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
        duration: "12 - 14 months",
      },
      {
        id: 1,
        name: "BPO School",
        price: 400_000,
        duration: "10 - 12 months",
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
        duration: "6 months",
      },
      {
        id: 1,
        name: "BPO School",
        price: 400_000,
        duration: "6 months",
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
        duration: "8 months",
      },
      {
        id: 1,
        name: "BPO School",
        price: 600_000,
        duration: "8 months",
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
        duration: "8 months",
      },
      {
        id: 1,
        name: "BPO School",
        price: 600_000,
        duration: "8 months",
      },
    ],
  },
];
