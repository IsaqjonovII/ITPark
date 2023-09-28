import { ICourse, ICourseTypes } from "interfaces";
import { FaServer } from "react-icons/fa6";
import { CgBrowser } from "react-icons/cg";

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
const icons = [FaServer, CgBrowser];
export const generateCourseTypes = (): ICourseTypes[] =>
  types.map((type, index) => ({
    id: index,
    name: type,
    description: "Some text",
    Icon: icons[index],
  }));
