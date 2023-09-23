import React from "react";
import { IRoutes } from "interfaces/routes";
const Home = React.lazy(() => import("pages/Home"));
const News = React.lazy(() => import("pages/News"));
// const Careers = React.lazy(() => import("pages/Careers"));
const Residents = React.lazy(() => import("pages/Residents"));
const FAQ = React.lazy(() => import("pages/FAQ"));
const Contact = React.lazy(() => import("pages/Contact"));
const About = React.lazy(() => import("pages/About"));
import APP_ROUTES from "constants";

const {
  MAIN,
  ABOUT_ROUTE,
  RESIDENTS_ROUTE,
  NEWS_ROUTE,
  FAQ_ROUTE,
  // CAREERS_ROUTE,
  CONTACT_ROUTE,
} = APP_ROUTES;
export const appRoutes: IRoutes[] = [
  {
    key: "home",
    path: MAIN,
    Component: Home,
  },
  {
    key: "about",
    path: ABOUT_ROUTE,
    Component: About,
    title: "About"
  },
  {
    key: "residents",
    path: RESIDENTS_ROUTE,
    Component: Residents,
    title: "Residents",
  },
  {
    key: "news",
    path: NEWS_ROUTE,
    Component: News,
    title: "News",
  },
  {
    key: "contact",
    path: CONTACT_ROUTE,
    Component: Contact,
    title: "Contact",
  },
  {
    key: "faq",
    path: FAQ_ROUTE,
    Component: FAQ,
    title: "FAQ",
  },
];
