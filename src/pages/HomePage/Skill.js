import React, { useEffect, useRef } from "react";
import "./home.css";
import ScrollReveal from "scrollreveal";
import ImgHtml from "../../assets/images/icon-html.png";
import ImgCss from "../../assets/images/icon-css.png";
import ImgJs from "../../assets/images/icon-js.png";
import ImgTailwind from "../../assets/images/icon-tailwind.png";
import ImgGit from "../../assets/images/icon-git.png";
import ImgGithub from "../../assets/images/icon-github-hab.png";
import ImgReact from "../../assets/images/icon-react.png";
import ImgMui from "../../assets/images/icon-mui.png";
const Skill = () => {
  const skillTextRef = useRef(null);
  const usedRef = useRef(null);
  const skillRef = useRef(null);
  useEffect(() => {
    const sr = ScrollReveal();
    sr.reveal(skillTextRef.current, {
      reset: true,
      duration: 1000,
      distance: "100px",
      delay: 200,
      origin: "top",
    });
    sr.reveal(usedRef.current, {
      reset: true,
      duration: 1000,
      distance: "200px",
      delay: 200,
      origin: "right",
    });
    sr.reveal(skillRef.current, {
      reset: true,
      duration: 1000,
      distance: "200px",
      delay: 200,
      origin: "left",
    });
  }, []);
  return (
    <section id="skills" className="skills">
      <div className="skills-content">
        <h2 className="heading" ref={skillTextRef}>
          My <span>Skills</span>
        </h2>
        <h6 className="heading-h6">Technical and profesional</h6>
      </div>
      <div className="skill-main">
        <div className="skill-left" ref={skillRef}>
          <h3>
            Technical <span>Skills</span>
          </h3>
          <div className="skill-bar">
            <div className="info">
              <p>HTML5</p>
              <p>72%</p>
            </div>
            <div className="bar">
              <span className="html"></span>
            </div>
          </div>
          <div className="skill-bar">
            <div className="info">
              <p>Figma</p>
              <p>90%</p>
            </div>
            <div className="bar">
              <span className="figma"></span>
            </div>
          </div>
          <div className="skill-bar">
            <div className="info">
              <p>Javascript</p>
              <p>80%</p>
            </div>
            <div className="bar">
              <span className="javascript"></span>
            </div>
          </div>
          <div className="skill-bar">
            <div className="info">
              <p>CSS3/Sass</p>
              <p>65%</p>
            </div>
            <div className="bar">
              <span className="css"></span>
            </div>
          </div>
        </div>
        <div className="text-right" ref={usedRef}>
          <h3>
            Technology <span>Used</span>
          </h3>
          <div className="profesional ">
            <div className="text-right-img">
              <img src={ImgHtml} alt="" />
              <h3 className="">HTML</h3>
            </div>
            <div className="text-right-img">
              <img src={ImgCss} alt="" />
              <h3 className="">CSS3/Sass</h3>
            </div>
            <div className="text-right-img">
              <img src={ImgJs} alt="" />
              <h3 className="">Javascript</h3>
            </div>
            <div className="text-right-img">
              <img src={ImgTailwind} alt="" />
              <h3 className="">Tailwind</h3>
            </div>
            <div className="text-right-img">
              <img src={ImgGit} alt="" />
              <h3 className="">Git</h3>
            </div>
            <div className="text-right-img">
              <img src={ImgGithub} alt="" />
              <h3 className="">Github</h3>
            </div>
            <div className="text-right-img">
              <img src={ImgReact} alt="" />
              <h3 className="">ReactJs</h3>
            </div>
            <div className="text-right-img">
              <img src={ImgMui} alt="" />
              <h3 className="">Material</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
