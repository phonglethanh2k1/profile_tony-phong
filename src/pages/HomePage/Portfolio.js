import React from "react";
import ImgProjectOne from "../../assets/images/project2.png";
import ImgProjectTow from "../../assets/images/carina.png";
import ImgProjectThree from "../../assets/images/project3.png";
import "./home.css";
const Portfolio = () => {
  return (
    <section className="portfolio" id="portfolio">
      <h2 className="heading">
        Latest <span>Project</span>
      </h2>
      <div className="portfolio-container">
        <div className="portfolio-box">
          <img src={ImgProjectOne} alt="" />
          <div className="portfolio-layer">
            <h4>TodoList App</h4>
            <p>
              TodoList App is a powerful task management application that helps
              users easily plan and track personal work progress. The user
              interface is friendly and easy to use, suitable .
            </p>
            <a href="https://react-app-hooks-todo.surge.sh/">
              <i class="bx bx-link-external"></i>
            </a>
          </div>
        </div>
        <div className="portfolio-box">
          <img src={ImgProjectTow} alt="" />
          <div className="portfolio-layer">
            <h4>Carina</h4>
            <p>
              Project Carira is a home child care service with the goal of
              providing a safe environment and quality care for children while
              parents or guardians are not present. Carira is not only a quiet
              babysitting team.
            </p>
            <a href="https://carina.org/">
              <i class="bx bx-link-external"></i>
            </a>
          </div>
        </div>
        <div className="portfolio-box">
          <img src={ImgProjectThree} alt="" />
          <div className="portfolio-layer">
            <h4>Multimart</h4>
            <p>
              The "MultiMart" project is a multitasking e-commerce platform
              where users can experience and shop from many different product
              categories. MultiMart provides a user-friendly interface and
              diverse features.
            </p>
            <a href="http://stingy-tomatoet.maltimart.surge.sh/">
              <i class="bx bx-link-external"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
