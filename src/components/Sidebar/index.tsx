import { Link } from "react-router-dom";
import StyledSidebar from "./style";
import { appRoutes } from "routes";
import { INav } from "components/Navbar";

const Sidebar = ({ setIsSidebarOpen }: INav) => {
  return (
    <StyledSidebar>
      {appRoutes.map(({ key, title, path }) => (
        <li
          className="sidebar__link"
          key={key}
          onClick={() => setIsSidebarOpen(false)}
        >
          <Link className="link" to={path}>
            {title}
          </Link>
        </li>
      ))}
    </StyledSidebar>
  );
};

export default Sidebar;
