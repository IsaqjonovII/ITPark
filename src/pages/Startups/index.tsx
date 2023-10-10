import { useEffect } from "react";
import StyledStartups from "./style";
import { startups_data } from "static";
import IconCard from "components/Card/Icon";
import { t } from "i18next";

const Startups = () => {
  useEffect(() => {
      document.title = "ITPARK - Startups"
  }, [])
  return (
    <StyledStartups>
      <div className="startup__categories">
        <h1 className="startup__title">{t("s_directions")}</h1>
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
