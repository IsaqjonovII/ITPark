import { ReactElement } from "react";

export interface IStartupData {
  id: string | number;
  name: string;
  description: string;
  type: string;
  Icon?: ReactElement | JSX.Element | any;
}
export interface IStartupTypes {
  id: string | number;
  title: string;
  type: string;
}
