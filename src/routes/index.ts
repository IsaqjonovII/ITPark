import { IRoutes } from "../interface/routes";
import Home from "../pages/Home";

export const publicRoutes: IRoutes[] = [
  {
    path: "/",
    Component: Home,
  },
];
