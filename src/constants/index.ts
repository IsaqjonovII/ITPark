export enum fontSize {
  sm = "0.875rem", // 14px
  md = "1rem",
  lg = "2rem",
  xl = "3rem",
  xxl = "4rem",
}
export enum fontFamily {
  kanit = "'Kanit', sans-serif",
  overpass = "'Overpass', sans-serif",
  roboto = "'Roboto', sans-serif",
}

export const APP_ROUTES = {
  MAIN: "/",
  NEWS: "/news",
  NEWS_INFO: "/news/:id",
  RESIDENTS: "/residents",
  RESIDENTS_INFO: "/residents/:id",
  ABOUT: "/about",
  CONTACT: "/contact",
  SERVICES: "/services",
  FAQ: "/faq",
  CAREERS: "/careers",
  BLOG: "/blog",
  ERROR_404: "/404",
  EDUCATION: "/education",
  STARTUPS: "/startups",
};

export default APP_ROUTES;
