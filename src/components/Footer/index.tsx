import LazyImage from "components/LazyImage";
import StyledFooter from "./style";
import { logo } from "assets";
import { Link } from "react-router-dom";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaPhone,
  FaTelegram,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <StyledFooter>
      <div className="footer__logo">
        <LazyImage className="logo" src={logo} alt="IT Park logo" />
        <h1>
          IT Park <br /> <span>Tashkent region</span>{" "}
        </h1>
      </div>

      <div className="footer__links">
        <Link
          className="footer__link"
          target="_blank"
          to="tel:+998946730230"
          rel="noreferror noopener"
        >
          <FaPhone />
        </Link>
        <Link
          className="footer__link"
          target="_blank"
          to="https://t.me/Toshkent_viloyati_IT"
          rel="noreferror noopener"
        >
          <FaTelegram />
        </Link>
        <Link
          className="footer__link"
          target="_blank"
          to="https://instagram.com/itpark_tashkentregion"
          rel="noreferror noopener"
        >
          <FaInstagram />
        </Link>
        <Link
          className="footer__link"
          target="_blank"
          to="https://www.facebook.com/profile.php?id=100089283555793&mibextid=LQQJ4d"
          rel="noreferror noopener"
        >
          <FaFacebook />
        </Link>
        <Link
          className="footer__link"
          target="_blank"
          to="mailto:isaqjonoviii@gmail.com"
        >
          <FaEnvelope />
        </Link>
      </div>
    </StyledFooter>
  );
};

export default Footer;
