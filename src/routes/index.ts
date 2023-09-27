import { lazy } from "react";
import APP_ROUTES from "constants";
import { IRoutes } from "interfaces/routes";
const Home = lazy(() => import("pages/Home"));
const News = lazy(() => import("pages/News"));
const Residents = lazy(() => import("pages/Residents"));
const Faq = lazy(() => import("pages/FAQ"));
const Contact = lazy(() => import("pages/Contact"));
const About = lazy(() => import("pages/About"));
const Startups = lazy(() => import("pages/Startups"));
const Education = lazy(() => import("pages/Education"));
const StartupInfo = lazy(() => import("pages/Startups/Info"));

const {
  MAIN,
  ABOUT,
  RESIDENTS,
  NEWS,
  FAQ,
  CONTACT,
  STARTUPS,
  EDUCATION,
  STARTUP_INFO,
} = APP_ROUTES;

export const appRoutes: IRoutes[] = [
  {
    key: "home",
    path: MAIN,
    Component: Home,
  },
  {
    key: "startups",
    path: STARTUPS,
    Component: Startups,
  },
  {
    key: "education",
    path: EDUCATION,
    Component: Education,
  },
  {
    key: "residents",
    path: RESIDENTS,
    Component: Residents,
  },
  {
    key: "about",
    path: ABOUT,
    Component: About,
  },
  {
    key: "news",
    path: NEWS,
    Component: News,
  },
  {
    key: "faq",
    path: FAQ,
    Component: Faq,
  },
  {
    key: "contact",
    path: CONTACT,
    Component: Contact,
  },
  {
    key: "startup__info",
    path: STARTUP_INFO,
    Component: StartupInfo,
  },
];
