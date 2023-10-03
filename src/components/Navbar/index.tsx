import { Link } from "react-router-dom";
import { Spiral as Hamburger } from "hamburger-react";
import { logo2 } from "assets";
import StyledNav from "./style";
import { navRoutes } from "routes/navroutes";
import LazyImage from "components/LazyImage";

export interface INav {
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar = ({ isSidebarOpen, setIsSidebarOpen }: INav) => {
  return (
    <StyledNav>
      <nav className="nav__container">
        <Link to="/" role="link">
          <div className="nav__logo">
            <LazyImage className="logo__img" src={logo2} alt="IT park logo" />
          </div>
        </Link>
        <ul className="nav__menu">
          {navRoutes.map(({ key, title, path }) => (
            <li className="menu__link" key={key}>
              <Link className="link" to={path}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <div className="bars" role="button" aria-expanded={false} tabIndex={0}>
          <Hamburger
            toggle={() => setIsSidebarOpen(!isSidebarOpen)}
            toggled={isSidebarOpen}
          />
        </div>
      </nav>
    </StyledNav>
  );
};

export default Navbar;
