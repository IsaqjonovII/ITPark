import APP_ROUTES from "constants";
import { IStartupData } from "interfaces";
import { Link } from "react-router-dom";

const { STARTUPS } = APP_ROUTES;
const IconCard = ({ id, name, Icon }: IStartupData) => {
  return (
    <>
      <Link key={id} to={`${STARTUPS}/${id}`} className="category__card">
        <Icon />
        <p>{name}</p>
      </Link>
    </>
  );
};

export default IconCard;
