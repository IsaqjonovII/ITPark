import React from "react";

export interface IRoutes {
  key: string | number;
  path: string;
  Component: React.ReactNode | any;
}
export interface INavRoutes {
  key: string;
  path: string;
  title: string;
}
