export enum fontSize {
    sm = '0.875rem', // 14px
    md = "1rem",
    lg = "2rem",
    xl = "3rem",
    xxl = "4rem"
}
export enum fontFamily {
    kanit = "'Kanit', sans-serif",
    overpass="'Overpass', sans-serif",
    roboto="'Roboto', sans-serif",
}

export const APP_ROUTES = {
    MAIN: "/",
    NEWS_ROUTE: "/news",
    NEWS_INFO_ROUTE: "/news/:id",
    RESIDENTS_ROUTE: "/residents",
    RESIDENTS_INFO_ROUTE: "/residents/:id",
    ABOUT_ROUTE: "/about",
    CONTACT_ROUTE: "/contact",
    SERVICES_ROUTE: "/services",
    FAQ_ROUTE: "/faq",
    CAREERS_ROUTE: "/careers",
    BLOG_ROUTE: "/blog",
    ERROR_404: "/404",
  };
  
  export default APP_ROUTES;
  