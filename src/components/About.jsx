import React, { useState } from "react";
import "./About.stylesheet.scss";
import pdf from "../Resume.pdf";

function About() {
  const [pdfToggle, setPdfToggle] = useState(false);

  return (
    <div className="aboutPage set">
      <div className={pdfToggle ? "myIntro myIntroToggle" : "myIntro"}>
        <div className="intro">
          <h2 className="head">
            Hi, I'm Aamir <div className="wave_hand">👋</div>
          </h2>
          <ul>
            <li>
              <span className="emoji">👨‍💼</span> Frontend Developer with over 2+
              years of professional experience in Web Designing and Front-end
              Development.
            </li>
            <li>
              <span className="emoji">🧰</span> Tech stack: HTML(5), Css(3),
              Sass, JavaScript, Typescript, Reactjs, Redux, Material UI,
              Redux-thunk, Redux-saga, RTK queries, styled-components, Nodejs,
              Jest, react-testing-library, Git & GitHub.
            </li>
            <li>
              <span className="emoji">👷‍♂️</span> Strong experience with Cross
              Browser Compatibility issues and Optimization for web, including
              CSS Sprites and best practices
            </li>
            <li>
              <span className="emoji">🚅</span> Experts in responsive Web
              Design, analysing and fixing UI bugs quickly.
            </li>
            <li>
              <span className="emoji">🔌</span> Proficiency in code optimization
              to improve performance.
            </li>
          </ul>

          <button onClick={() => setPdfToggle(true)}>
            My Resume{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              fill="currentColor"
              className="bi bi-download"
              viewBox="0 0 16 16"
            >
              <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
              <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
            </svg>
          </button>
        </div>
      </div>

      <div className="myResume">
        <embed
          type="application/pdf"
          src={pdf}
          className={pdfToggle ? "embedToggle" : ""}
        ></embed>
        <button
          className={pdfToggle ? "buttonToggle" : ""}
          onClick={() => setPdfToggle(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-left-circle-fill"
            viewBox="0 0 16 16"
          >
            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
          </svg>
          back
        </button>
      </div>
    </div>
  );
}

export default About;
