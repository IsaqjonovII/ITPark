import React from "react";
import APP_ROUTES from "constants";
import { IRoutes } from "interfaces/routes";
const Home = React.lazy(() => import("pages/Home"));
const News = React.lazy(() => import("pages/News"));
// const Careers = React.lazy(() => import("pages/Careers"));
const Residents = React.lazy(() => import("pages/Residents"));
const Faq = React.lazy(() => import("pages/FAQ"));
const Contact = React.lazy(() => import("pages/Contact"));
const About = React.lazy(() => import("pages/About"));
const Startups = React.lazy(() => import("pages/Startups"));
const Education = React.lazy(() => import("pages/Education"));

const {
  MAIN,
  ABOUT,
  RESIDENTS,
  NEWS,
  FAQ,
  // CAREERS_ROUTE,
  CONTACT,
  STARTUPS,
  EDUCATION,
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
    title: "Start-Ups",
  },
  {
    key: "education",
    path: EDUCATION,
    Component: Education,
    title: "Education",
  },
  {
    key: "residents",
    path: RESIDENTS,
    Component: Residents,
    title: "Residents",
  },
  {
    key: "about",
    path: ABOUT,
    Component: About,
    title: "About",
  },
  {
    key: "news",
    path: NEWS,
    Component: News,
    title: "News",
  },
    {
      key: "faq",
      path: FAQ,
      Component: Faq,
      title: "FAQ",
    },
  {
    key: "contact",
    path: CONTACT,  
    Component: Contact,
    title: "Contact",
  },
];
