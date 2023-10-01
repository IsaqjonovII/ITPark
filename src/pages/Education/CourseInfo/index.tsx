import { generateCourses } from "static/courses";
import StyledCourseInfo from "./style";

const CourseInfo = () => {
  return (
    <StyledCourseInfo>
      <div className="table__wrp">
        <div className="thead">
          <div className="th">No.</div>
          <div className="th">Education Center</div>
          <div className="th">Price</div>
          <div className="th">Duration</div>
        </div>

        <div className="tbody">
          {generateCourses().map(({ id, name, period, price }) => (
            <div className="tr" key={id}>
              <div className="td">{++id}</div>
              <div className="td">{name}</div>
              <div className="td">{price} so'm</div>
              <div className="td">{period.toString()}</div>
            </div>
          ))}
        </div>
      </div>
    </StyledCourseInfo>
  );
};

export default CourseInfo;
