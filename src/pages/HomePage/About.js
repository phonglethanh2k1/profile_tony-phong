import React, { useEffect, useRef } from "react";
import ImgAbout from "../../assets/images/phong3.png";
import ScrollReveal from "scrollreveal";
import "./home.css";
const About = () => {
  const aboutTextRef = useRef(null);
  const aboutImg = useRef(null);
  useEffect(() => {
    const sr = ScrollReveal();
    sr.reveal(aboutTextRef.current, {
      reset: true,
      duration: 1000,
      distance: "80px",
      delay: 200,
      origin: "top",
    });
    sr.reveal(aboutImg.current, {
      reset: true,
      duration: 1000,
      distance: "80px",
      delay: 200,
      origin: "bottom",
    });
  }, []);
  return (
    <section className="about" id="about">
      <div className="about-img" ref={aboutImg}>
        <img src={ImgAbout} alt="" style={{ width: "100%" }} />
      </div>
      <div className="about-content" ref={aboutTextRef}>
        <h2 className="heading">
          About <span>Me</span>
        </h2>
        <h3>Frontend Developer</h3>
        <p>
          Desire to become a fullstack programmer and work in the field of
          Frontend programmer, looking for experience, so that I can continue to
          gain and develop my professional life. as a capable and enthusiastic
          person, with ability to focus on work and equipment, proven
          communication, problem solving, responsible and proactive, I enjoy
          losing people and super weapons constantly.
        </p>
        <a href="#" className="btn">
          Read More
        </a>
      </div>
    </section>
  );
};

export default About;
