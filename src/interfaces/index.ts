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
export interface ICourseTypes {
  id: number;
  name: string;
  description?: string;
  Icon?: ReactElement | JSX.Element | any;
}
export interface ICourse extends ICourseTypes {
  price: string | number;
  duration: string | Date;
}
export interface INews {
  id: string | number;
  title: string;
  subtitle: string;
  date: string;
  img: string;
  detailed_description?: string;
}
