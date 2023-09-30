import StyledHome from "./style";
import ParticlesTSX from "components/Particles";

const Home = () => {
  return (
    <StyledHome>
      <ParticlesTSX />
      <div className="home__content">
        <h1 className="main__title">
          Embark on the <br /> <span>IT Journey</span> with Us{" "}
        </h1>
      </div>
    </StyledHome>
  );
};

export default Home;
