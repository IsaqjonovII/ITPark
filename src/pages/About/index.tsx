import LazyImage from "components/LazyImage";
import StyledAbout from "./style";
import { banner, logo } from "assets";

const About = () => {
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

          <p className="about__text">
            On July 24, 2019 the first IT Park in the Republic of Uzbekistan
            opened its doors in Tashkent. In a given short amount of time, IT
            Park has already brought its first fruits in the form of 28 new
            startups, created dozens of projects in the field of information
            technology, as well as trainings, workshops and meetings to
            encourage the youth of our country, their interest in this area and
            develop computer literacy among the population.
          </p>

          <p className="about__text">
            IT Park is a complex of facilities, buildings and structures
            designed to ensure the startup and market access, an
            extraterritorial free economic zone for IT companies, including
            integration with scientific and educational organizations. It is a
            place where active and talented people in the field IT will have a
            real chance to transform their ideas into real business projects
            through accounting, legal, marketing and educational support.
          </p>
        </div>
      </main>
    </StyledAbout>
  );
};
export default About;
