import { startups_data } from "mocks";
import StyledStartups from "./style";
import { Link } from "react-router-dom";
import APP_ROUTES from "constants";

const { STARTUPS } = APP_ROUTES;
const Startups = () => {
  return (
    <StyledStartups>
      <div className="startup__categories">
        <h1 className="startup__title">Startups Directions</h1>
        <div className="categories__wrp">
          {startups_data.map(({ id, name, Icon }) => (
            <Link key={id} to={`${STARTUPS}/${id}`} className="category__card">
              <Icon />
              <p>{name}</p>
            </Link>
          ))}
        </div>
      </div>
    </StyledStartups>
  );
};

export default Startups;
