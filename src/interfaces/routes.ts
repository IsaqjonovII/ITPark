import React from "react";

export interface IRoutes {
  key: string | number;
  path: string;
  Component: React.JSXElementConstructor<React.FC> | React.ComponentType<any>;
  title?: string;
}
