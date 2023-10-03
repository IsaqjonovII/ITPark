import { useEffect } from "react";
import { Link } from "react-router-dom";
import { HiArrowUpRight } from "react-icons/hi2";
import APP_ROUTES from "constants";
import StyledEducation from "./style";
import { generateCourseTypes } from "static/courses";

const { EDUCATION } = APP_ROUTES;


const Education = () => {
  useEffect(() => {
    document.title = "ITPARK - Education";
  }, []);
  return (
    <StyledEducation>
      <div className="container">
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
      </div>
    </StyledEducation>
  );
};

export default Education;
``;
