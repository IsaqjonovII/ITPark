import { startups_data } from "static";
import StyledStartups from "./style";
import IconCard from "components/Card/Icon";
import { useEffect } from "react";

const Startups = () => {
  useEffect(() => {
      document.title = "ITPARK - Startups"
  }, [])
  return (
    <StyledStartups>
      <div className="startup__categories">
        <h1 className="startup__title">Startups Directions</h1>
        <div className="categories__wrp">
          {startups_data.map((data) => (
            <IconCard key={data.id} {...data} />
          ))}
        </div>
      </div>
    </StyledStartups>
  );
};

export default Startups;
