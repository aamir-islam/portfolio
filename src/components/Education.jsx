import "./Education.stylesheet.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGraduate } from "@fortawesome/free-solid-svg-icons";
import educationData from "./education";

const EducationCard = ({
  i,
  title,
  date,
  course,
  location,
  link,
  collegeName,
}) => {
  return (
    <div
      className={`timeline__event  animated fadeInUp delay-3s timeline__event--type${i}`}
    >
      <div className="timeline__event__icon ">
        <FontAwesomeIcon icon={faUserGraduate} />
      </div>
      <div className="timeline__event__date">
        {course}
        <br />
        {` ${date} `}
      </div>
      <div className="timeline__event__content ">
        <div className="timeline__event__title">{title}</div>
        <div className="timeline__event__subtitle">@{collegeName}</div>
        <div className="timeline__event__description">
          <div className="timeline__event__description_subhead">
            College Details
          </div>
          <p>Address : {location}</p>
          <p>Affiliation: {link}</p>
        </div>
      </div>
    </div>
  );
};

const Education = () => {
  return (
    <div className="timeline-container">
      <h1 className="heading">Education</h1>
      <div className="set">
        <div className="timeline">
          {educationData.map((exp, i) => (
            <EducationCard
              key={i}
              i={`${i + 1}`}
              title={exp.courseTitle}
              course={exp.courseName}
              date={exp.timeSpan}
              collegeName={exp.collegeName}
              location={exp.location}
              link={exp.affiliation}
              responsibilities={exp.Responsibilities.join(" &#183; ")}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Education;
