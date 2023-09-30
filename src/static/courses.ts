import { ICourse, ICourseTypes } from "interfaces";
import { FaServer, FaAndroid, FaPalette, FaRobot } from "react-icons/fa6";
import { PiDesktopTowerFill } from "react-icons/pi";
import { CgBrowser } from "react-icons/cg";
import { MdSlowMotionVideo } from "react-icons/md";
import { TbDeviceDesktopHeart } from "react-icons/tb";
export const courses_data: ICourse[] = [
  {
    id: 0,
    name: "Front-end",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    price: 300_000,
  },
];
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
