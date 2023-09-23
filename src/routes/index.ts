import React from 'react';
import { IRoutes } from "interfaces/routes";
const Home = React.lazy(() => import("pages/Home"));
const News = React.lazy(() => import("pages/News"));
const Careers = React.lazy(() => import("pages/News"));
const Residents = React.lazy(() => import("pages/News"));
const FAQ = React.lazy(() => import("pages/News"));
const Contact = React.lazy(() => import("pages/News"));
import APP_ROUTES from "constants";

const { MAIN, RESIDENTS_ROUTE, NEWS_ROUTE, FAQ_ROUTE, CAREERS_ROUTE, CONTACT_ROUTE } = APP_ROUTES;
export const appRoutes: IRoutes[] = [
  {
    key: "home",
    path: MAIN,
    Component: Home,
  },
  {
    key: "residents",
    path: RESIDENTS_ROUTE,
    Component: Residents,
    title: "Residents"
  },
  {
    key: "careers",
    path: CAREERS_ROUTE,
    Component: Careers,
    title: "Careers"
  },
  {
    key: "contact",
    path: CONTACT_ROUTE,
    Component: Contact,
    title: "Contact"
  },
  {
    key: "faq",
    path: FAQ_ROUTE,
    Component: FAQ,
    title: "FAQ"
  },
  {
    key: "news",
    path: NEWS_ROUTE,
    Component: News,
    title: "News"
  },
  
];