import { generateCourseTypes } from "static/courses";
import StyledEducation from "./style";

const Education = () => {
  return (
    <StyledEducation>
      <h1 className="edu__title">IT Education</h1>
      <br />

      <div className="courses">
        {generateCourseTypes().map(({ id, name, description }) => (
          <div className="course__card" key={id}>
            <p>{name}</p>
            <div className="overlay">
              <p>{description}</p>
            </div>
          </div>
        ))}
      </div>
    </StyledEducation>
  );
};

export default Education;
``