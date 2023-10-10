import React from "react";
import ImgProjectOne from "../../assets/images/portfolio1.jpg";
import ImgProjectTow from "../../assets/images/portfolio2.jpg";
import ImgProjectThree from "../../assets/images/portfolio3.jpg";
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
            <h4>Web Design</h4>
            <p>1</p>
            <a href="#">
              <i class="bx bx-link-external"></i>
            </a>
          </div>
        </div>
        <div className="portfolio-box">
          <img src={ImgProjectOne} alt="" />
          <div className="portfolio-layer">
            <h4>Web Design</h4>
            <p>1</p>
            <a href="#">
              <i class="bx bx-link-external"></i>
            </a>
          </div>
        </div>
        <div className="portfolio-box">
          <img src={ImgProjectOne} alt="" />
          <div className="portfolio-layer">
            <h4>Web Design</h4>
            <p>1</p>
            <a href="#">
              <i class="bx bx-link-external"></i>
            </a>
          </div>
        </div>
        <div className="portfolio-box">
          <img src={ImgProjectOne} alt="" />
          <div className="portfolio-layer">
            <h4>Web Design</h4>
            <p>1</p>
            <a href="#">
              <i class="bx bx-link-external"></i>
            </a>
          </div>
        </div>
        <div className="portfolio-box">
          <img src={ImgProjectOne} alt="" />
          <div className="portfolio-layer">
            <h4>Web Design</h4>
            <p>1</p>
            <a href="#">
              <i class="bx bx-link-external"></i>
            </a>
          </div>
        </div>
        <div className="portfolio-box">
          <img src={ImgProjectOne} alt="" />
          <div className="portfolio-layer">
            <h4>Web Design</h4>
            <p>1</p>
            <a href="#">
              <i class="bx bx-link-external"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
