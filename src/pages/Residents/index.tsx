import { useEffect } from "react";
import StyledResidents from "./style";
import { FaBuilding, FaBuildingUser, FaListCheck, FaRegPenToSquare } from "react-icons/fa6";

const Residents = () => {
  useEffect(() => {
    document.title = "ITPARK - Residents";
  }, []);
  return (
    <StyledResidents>
      <section className="pros">
        <h3 className="pros__title">
          Residents of IT Park are IT companies and IT training centers, which
          can receive a number of significant advantages. These include:
        </h3>

        <div className="pros__cards">
          <div className="card">
            <span className="indicator">7.5%</span>
            <p className="text">Income tax</p>
          </div>
          <div className="card">
            <span className="indicator">0%</span>
            <p className="text">Corporate tax</p>
          </div>
          <div className="card">
            <span className="indicator">0%</span>
            <p className="text">Unified Social Payments</p>
          </div>
          <div className="card">
            <span className="indicator">0%</span>
            <p className="text">
              Custom payments when <br /> importing goods for <br /> own needs
            </p>
          </div>
        </div>
      </section>
      <section className="testimonial">
        <div className="testimonial__cards">
          <div className="card">
            <FaRegPenToSquare />
            <span>Residency Clause</span>
          </div>
          <div className="card">
          <FaBuildingUser />
            <span>Become Resident</span>
          </div>
          <div className="card">
          <FaListCheck />
            <span>Requirements for <br /> Residents</span>
          </div>
          <div className="card">
            <FaBuilding />
            <span>Rent Office</span>
          </div>
        </div>
      </section>
    </StyledResidents>
  );
};
export default Residents;
