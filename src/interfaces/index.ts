import React from "react";

export interface IStartupData {
  id: string | number;
  name: string;
  description: string;
  type: string;
  Icon?: React.Component | any;
}
export interface IStartupTypes {
  id: string | number;
  type: string;
}
