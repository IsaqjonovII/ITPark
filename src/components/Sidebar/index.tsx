import { Link } from "react-router-dom";
import StyledSidebar from "./style";
import { INav } from "components/Navbar";
import { navRoutes } from "routes/navroutes";

const Sidebar = ({ setIsSidebarOpen }: INav) => {
  return (
    <StyledSidebar>
      {navRoutes.map(({ key, title, path }) => (
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
