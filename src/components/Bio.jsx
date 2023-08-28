import React, { useState } from "react";
import "./Bio.stylesheet.scss";
import Tilt from "react-tilt";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faPersonDigging,
  faUserGraduate,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
import myAvatar from "./images/myavtar.png";

function Bio() {
  const [toggle, setToggle] = useState(false);
  const location = useLocation();

  return (
    <>
      <div className="links">
        <Link to="/" className="bio Tilt">
          <div>
            <div className="myImg Tilt-inner">
              <img src={myAvatar} alt="my-avatar" />
            </div>
            <h4>Aamir Islam</h4>
            <small>Front-End | React js developer</small>
          </div>
        </Link>

        <div className={toggle ? "toggle-routes routes" : "routes"}>
          <Tilt className="bio-in-routes Tilt" options={{ max: 70 }}>
            <div className="myImg Tilt-inner">
              <img src={myAvatar} alt="my-avatar" />
            </div>
            <h2>Aamir</h2>
            <small>
              React js developer
              <br />
              UI developer
              <br />
              front end developer
            </small>
          </Tilt>
          <ul className="nav" onClick={() => setToggle(false)}>
            <Link to="/experience">
              <li
                className={
                  location.pathname.includes("experience") ? "active" : ""
                }
              >
                <FontAwesomeIcon icon={faBriefcase} />
                <span className="text">Experience</span>
              </li>
            </Link>
            <Link to="/skills">
              <li
                className={location.pathname.includes("skills") ? "active" : ""}
              >
                <FontAwesomeIcon icon={faCode} />
                <span className="text">Skills</span>
              </li>
            </Link>
            <Link to="/projects">
              <li
                className={
                  location.pathname.includes("projects") ? "active" : ""
                }
              >
                <FontAwesomeIcon icon={faPersonDigging} />
                <span className="text">Projects</span>
              </li>
            </Link>
            <Link to="Education">
              <li
                className={
                  location.pathname.includes("Education") ? "active" : ""
                }
              >
                <FontAwesomeIcon icon={faUserGraduate} />
                <span className="text">Education</span>
              </li>
            </Link>
          </ul>
        </div>

        <div
          className={toggle ? "burger toggle" : "burger"}
          onClick={() => setToggle(!toggle)}
        >
          <div className="line" id="line1"></div>
          <div className="line" id="line2"></div>
          <div className="line" id="line3"></div>
        </div>
      </div>

      <div className="links_for_mobile">
        <Link to="/" className="bio Tilt">
          <div className="myImg">
            <img src={myAvatar} alt="my-avatar" />
          </div>
        </Link>
        <div className="drawerBtn"></div>
        <div className="otherPagesLinks">
          <ul className="nav" onClick={() => setToggle(false)}>
            <Link to="/experience">
              <li
                className={
                  location.pathname.includes("experience") ? "active" : ""
                }
              >
                <FontAwesomeIcon icon={faBriefcase} />
                <span className="text">Experience</span>
              </li>
            </Link>
            <Link to="/skills">
              <li
                className={location.pathname.includes("skills") ? "active" : ""}
              >
                <FontAwesomeIcon icon={faCode} />
                <span className="text">Skills</span>
              </li>
            </Link>
            <Link to="/projects">
              <li
                className={
                  location.pathname.includes("projects") ? "active" : ""
                }
              >
                <FontAwesomeIcon icon={faPersonDigging} />
                <span className="text">Projects</span>
              </li>
            </Link>
            <Link to="Education">
              <li
                className={
                  location.pathname.includes("Education") ? "active" : ""
                }
              >
                <FontAwesomeIcon icon={faUserGraduate} />
                <span className="text">Education</span>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Bio;
