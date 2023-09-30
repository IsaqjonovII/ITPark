import { generateCourseTypes } from "static/courses";
import StyledEducation from "./style";
import { HiArrowUpRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
import APP_ROUTES from "constants";

const { EDUCATION } = APP_ROUTES;
const Education = () => {
  return (
    <StyledEducation>
      <h1 className="edu__title">IT Education</h1>
      <br />

      <div className="courses">
        {generateCourseTypes().map(({ id, name, description, Icon }) => (
          <Link
            key={id}
            to={`${EDUCATION}/courses/${id}`}
            className="course__card"
          >
            <div className="card__wrp">
              <p className="course__title">{name}</p>

              <div className="course__icons">
                <Icon className="course__icon" />
                <HiArrowUpRight className="arrow__icon" />
              </div>

              <div className="overlay">
                <p>{description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </StyledEducation>
  );
};

export default Education;
``;
