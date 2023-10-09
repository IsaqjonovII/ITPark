import { Link } from "react-router-dom";
import { Spiral as Hamburger } from "hamburger-react";
import { logo2 } from "assets";
import StyledNav from "./style";
import { navRoutes } from "routes/navroutes";
import LazyImage from "components/LazyImage";
import { useTranslation } from "react-i18next";

export interface INav {
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar = ({ isSidebarOpen, setIsSidebarOpen }: INav) => {
  const { t, i18n } = useTranslation();

  const changeLng = (e: any) => {
    i18n.changeLanguage(e.target.value ?? "uz");
  };
  return (
    <StyledNav>
      <nav className="nav__container">
        <Link to="/" role="link">
          <div className="nav__logo">
            <LazyImage className="logo__img" src={logo2} alt="IT park logo" />
          </div>
        </Link>
        <ul className="nav__menu">
          {navRoutes.map(({ key, path }) => (
            <li className="menu__link" key={key}>
              <Link className="link" to={path}>
                {t(key)}
              </Link>
            </li>
          ))}
          <li className="lang">
            <select className="lang__select" onChange={changeLng}>
              <option value="uz">O'zb</option>
              <option value="en">Eng</option>
              <option value="ru">O'ris</option>
            </select>
          </li>
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
