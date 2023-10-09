import { useEffect } from "react";
import StyledResidents from "./style";
import {
  FaBuilding,
  FaBuildingUser,
  FaListCheck,
  FaRegPenToSquare,
} from "react-icons/fa6";
import { useTranslation } from "react-i18next";

const Residents = () => {
  useEffect(() => {
    document.title = "ITPARK - Residents";
  }, []);
  const {t} = useTranslation();
  return (
    <StyledResidents>
      <section className="pros">
        <h3 className="pros__title">{t("residents_title")}</h3>

        <div className="pros__cards">
          <div className="card">
            <span className="indicator">7.5%</span>
            <p className="text">{t("in_tax")}</p>
          </div>
          <div className="card">
            <span className="indicator">0%</span>
            <p className="text">{t("cp_tax")}</p>
          </div>
          <div className="card">
            <span className="indicator">0%</span>
            <p className="text">{t("usp_taxt")}</p>
          </div>
          <div className="card">
            <span className="indicator">0%</span>
            <p className="text">{t("imp_tax")}</p>
          </div>
        </div>
      </section>
      <section className="testimonial">
        <div className="testimonial__cards">
          <div className="card">
            <FaRegPenToSquare />
            <span>{t("resident_clause")}</span>
          </div>
          <div className="card">
            <FaBuildingUser />
            <span>{t("resident_member")}</span>
          </div>
          <div className="card">
            <FaListCheck />
            <span>{t("resident_req")}</span>
          </div>
          <div className="card">
            <FaBuilding />
            <span>{t("resident_rent")}</span>
          </div>
        </div>
      </section>
    </StyledResidents>
  );
};
export default Residents;
