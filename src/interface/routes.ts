import React from "react";

export interface IRoutes {
  path: string;
  Component: React.JSXElementConstructor<React.FC>;
}
