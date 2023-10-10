import LazyImage from "components/LazyImage";
import StyledAbout from "./style";
import { banner, logo } from "assets";
import { useTranslation } from "react-i18next";

const About = () => {
  const {t} = useTranslation();
  return (
    <StyledAbout>
      <main className="main" role="main">
        <LazyImage
          className="banner__img"
          src={banner}
          alt="IT Park outside image"
        />
        <div>
          <div className="logo__wrp">
            <LazyImage className="logo" src={logo} alt="IT Park logo" />
            <h1>
              IT Park <br /> <span>Tashkent region</span>{" "}
            </h1>
          </div>

          <p className="about__text">{t("about_text1")}</p>

          <p className="about__text">{t("about_text2")}</p>
        </div>
      </main>
      <section className="section">
        <h1 className="section__title">{t("about_history")}</h1>

        <p className="about__text">{t("about_text3")}</p>
      </section>
    </StyledAbout>
  );
};
export default About;
