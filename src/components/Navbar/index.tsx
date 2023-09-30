import { LOGO } from "assets";
import StyledNav from "./style";
import { navRoutes } from "routes/navroutes";
import { Link } from "react-router-dom";
import { Spiral as Hamburger } from "hamburger-react";

export interface INav {
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar = ({ isSidebarOpen, setIsSidebarOpen }: INav) => {
  return (
    <StyledNav>
      <nav className="nav__container">
        <Link to="/">
          <div className="nav__logo">
            <img className="logo__img" src={LOGO} alt="" />
            <h1 className="logo__text">
              IT Park <br /> <span>Tashkent region</span>{" "}
            </h1>
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
        <div className="bars">
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
