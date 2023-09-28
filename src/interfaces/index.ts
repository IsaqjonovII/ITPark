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
export interface ICourse {
  id: number | string;
  name: string;
  description: string;
  price?: string | number;
  Icon?: ReactElement | JSX.Element;
}
