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

const eduCenters = ["IT Center Revolution", "BPO School", "Yosh Avlod"];

export const generateCourses = (): ICourse[] =>
  eduCenters.map((eduName, index) => ({
    id: index,
    name: eduName,
    price: 400_000,
    period: "6 months",
  }));
// No. edu centers  price  period
