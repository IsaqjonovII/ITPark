import { Link } from "react-router-dom";
import APP_ROUTES from "constants";
import { IStartupData } from "interfaces";
import { useTranslation } from "react-i18next";

const { STARTUPS } = APP_ROUTES;
const IconCard = ({ id, Icon, type }: IStartupData) => {
  const {t} = useTranslation();
  return (
    <>
      <Link key={id} to={`${STARTUPS}/${id}`} className="category__card">
        <Icon />
        <p>{t(type)}</p>
      </Link>
    </>
  );
};

export default IconCard;
