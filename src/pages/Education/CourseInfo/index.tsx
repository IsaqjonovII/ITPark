import { useParams } from "react-router-dom";
import StyledCourseInfo from "./style";
import NoData from "components/NoData";
import { eduCentersData } from "static/courses";

type paramsId = {
  id: string;
};

const CourseInfo = () => {
  const { id } = useParams<paramsId>();

  return (
    <StyledCourseInfo>
      {!eduCentersData[Number(id)]?.courses.length ? (
        <NoData />
      ) : (
        <div className="table__wrp">
          <div className="thead">
            <div className="th">No.</div>
            <div className="th">Education Center</div>
            <div className="th">Price</div>
            <div className="th">Duration</div>
          </div>

          <div className="tbody">
            {eduCentersData[Number(id)]?.courses.map(
              ({ id, name, duration, price }) => (
                <div className="tr" key={id}>
                  <div className="td">{++id}</div>
                  <div className="td">{name}</div>
                  <div className="td">{price} so'm</div>
                  <div className="td">{duration.toString()}</div>
                </div>
              )
            )}
          </div>
        </div>
      )}
    </StyledCourseInfo>
  );
};

export default CourseInfo;
