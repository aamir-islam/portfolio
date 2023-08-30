import React from "react";
import "./Skills.stylesheet.scss";
import reactImg from "./images/react.png";
import reduxImg from "./images/redux.png";
import jsImg from "./images/js.png";
import scImg from "./images/styled.png";
import gitImg from "./images/git.png";
import sassImg from "./images/sass.png";
import SkillComponent from "./Skill.component";
import TypescriptImg from "./images/typescript.png";
import jestImg from "./images/jest.png";

function Skills() {
  return (
    <div className="skills">
      <h1 className="heading">Skills</h1>

      <div className="set">
        <SkillComponent percentage={99} img={jsImg} name="javascript" />
        <SkillComponent percentage={95} img={TypescriptImg} name="Typescript" />
        <SkillComponent percentage={95} img={reactImg} name="react js" />
        <SkillComponent percentage={90} img={reduxImg} name="redux" />
        <SkillComponent percentage={80} img={scImg} name="styled components" />
        <SkillComponent
          percentage={99}
          img={sassImg}
          name="SASS - CSS pre processer"
        />
        <SkillComponent percentage={69} img={jestImg} name="Jest" />
        <SkillComponent percentage={86} img={gitImg} name="git" />
      </div>
    </div>
  );
}

export default Skills;
