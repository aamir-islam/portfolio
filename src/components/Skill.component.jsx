import React, { useState, useEffect } from "react";

const SkillComponent = (props) => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (percentage < props.percentage) {
        setPercentage((prevPercentage) => prevPercentage + 1);
      }
    }, 10);

    return () => clearInterval(interval);
  }, [percentage, props.percentage]);

  const labelStr =
    percentage < 30 ? "beginner" : percentage < 70 ? "intermediate" : "Perfect";

  return (
    <div className="skill">
      <img src={props.img} alt="react" />

      <div className="skillName">
        <h4>{props.name}</h4>
        <div className="progressBar">
          <div className="fullLimit">
            <div className="limit" style={{ width: `${percentage}%` }}></div>
          </div>
        </div>
      </div>
      {percentage === props.percentage && (
        <div className={`skill-badge percentage-${labelStr}`}>{labelStr}</div>
      )}
    </div>
  );
};

export default SkillComponent;
