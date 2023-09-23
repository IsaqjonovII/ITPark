import { ITParkLogo } from "assets";
import StyledNav from "./style";
import { appRoutes } from "routes";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <StyledNav>
      <nav className="nav__container">
        <div className="nav__logo">
          <img className="logo__img" src={ITParkLogo} alt="" />
          <h1 className="logo__text">
            IT Park <br /> <span>Tashkent region</span>{" "}
          </h1>
        </div>
        <ul className="nav__menu">
          {appRoutes.map(({ key, title, path }) => (
            <li className="menu__link" key={key}>
              <Link className="link" to={path}>{title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </StyledNav>
  );
};

export default Navbar;
