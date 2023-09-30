import { INavRoutes } from "interfaces/routes";
import APP_ROUTES from "constants";

const {
  ABOUT,
  RESIDENTS,
  NEWS,
  FAQ,
  CONTACT,
  STARTUPS,
  EDUCATION,
} = APP_ROUTES;

export const navRoutes: INavRoutes[] = [
  {
    key: "startups",
    path: STARTUPS,
    title: "Startups",
  },
  {
    key: "education",
    path: EDUCATION,
    title: "Education",
  },
  {
    key: "residents",
    path: RESIDENTS,
    title: "Residents",
  },
  {
    key: "about",
    path: ABOUT,
    title: "About",
  },
  {
    key: "news",
    path: NEWS,
    title: "News",
  },
  {
    key: "faq",
    path: FAQ,
    title: "FAQ",
  },
  {
    key: "contact",
    path: CONTACT,
    title: "Contact",
  }
];
