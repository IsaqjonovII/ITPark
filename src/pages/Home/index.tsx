import { useTranslation } from "react-i18next";
import StyledHome from "./style";
import ParticlesTSX from "components/Particles";

const Home = () => {
  const {t} = useTranslation()
  return (
    <StyledHome>
      <ParticlesTSX />
      <div className="home__content">
        <h1 className="main__title">{t("home_title")}</h1>
      </div>
    </StyledHome>
  );
};

export default Home;
