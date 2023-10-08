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
      <section className="section">
        <h1 className="section__title">History of creation of IT Park</h1>

        <p className="about__text">
          During the first visit of the President of the Republic of Uzbekistan
          Shavkat Mirziyoyev to the Republic of India, which was held from
          September 30 to October 2, 2018, Uzbek and Indian Parties agreed to
          expand cooperation in the field of IT. The Uzbek side, together with
          the information and technology companies of India, expressed interest
          in creating an Information Technology Park in Uzbekistan on basis of
          their best practices in software development and accelerating
          startups. Thus, it can be noted that IT Park was created on the
          initiative of the President of the Republic of Uzbekistan to improve
          the startup ecosystem and startup projects and their implementation in
          our country.
        </p>
      </section>
    </StyledAbout>
  );
};
export default About;
