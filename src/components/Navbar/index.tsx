import { ITParkLogo } from "assets";
import StyledNav from "./style";

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
        <ul>
          {}
        </ul>
      </nav>
    </StyledNav>
  );
};

export default Navbar;
