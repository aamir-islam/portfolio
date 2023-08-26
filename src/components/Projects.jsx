import React from "react";
import "./Projects.stylesheet.scss";
import Project from "./Project";
import project2 from "./images/project2.png";
import kccImg from "./images/project-2.jpg";
import project1 from "./images/project1.png";

const Projects = () => {
  return (
    <div className="projects">
      <h1 className="heading">Projects</h1>
      <div className="set">
        <Project
          projectImg={project1}
          projectDesc="I built this webpage for a doctor, SEO-friendly webpage with beautiful UI. Moreover, fluent in getting user queries and direct them on Gmail."
          projectLink="https://movie-booking-ts.vercel.app/"
          gitLink="https://github.com/aamir-islam/MovieBookingTS"
          techList={["react", "javascript", "css", "html"]}
        />
        <Project
          projectImg={project2}
          projectDesc="I built this webpage for a doctor, SEO-friendly webpage with beautiful UI. Moreover, fluent in getting user queries and direct them on Gmail."
          projectLink="https://todo-list-tau-gilt.vercel.app/"
          gitLink="https://github.com/aamir-islam/Todo-list"
          techList={["react", "javascript", "css", "html"]}
        />
        <Project
          projectImg={kccImg}
          projectDesc="a fully responsive web portel for a coaching institute, containing saveral pages and easy navigation. built using bootstap and PHP."
          projectLink="https://www.khalsacoachingcentre.com/"
          gitLink="https://github.com/aamir-islam/MovieBookingTS"
          techList={["javascript", "css", "html", "bootstrap"]}
        />
      </div>
    </div>
  );
};

export default Projects;
