import React from 'react';
import { IRoutes } from "interfaces/routes";
const Home = React.lazy(() => import("pages/Home"));
import APP_ROUTES from "constants";


const { MAIN } = APP_ROUTES;
export const navRoutes = [
  {
    id: 0,

  }
]
export const publicRoutes: IRoutes[] = [
  {
    key: "home",
    path: MAIN,
    Component: Home,
  },
];
export const privateRoutes: IRoutes[] = []