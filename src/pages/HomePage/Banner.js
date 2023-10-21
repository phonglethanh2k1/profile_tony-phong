import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "./home.css";
import Img from "../../assets/images/phong2.png";
import ScrollReveal from "scrollreveal";
import Typed from "typed.js";
const Banner = () => {
  const spanRef = useRef(null);
  const bannerTextRef = useRef(null);
  const bannerImgRef = useRef(null);
  const h1Ref = useRef(null);
  useEffect(() => {
    const sr = ScrollReveal();
    sr.reveal(bannerTextRef.current, {
      reset: true,
      duration: 1000,
      distance: "80px",
      delay: 200,
      origin: "top",
    });
    sr.reveal(bannerImgRef.current, {
      reset: true,
      duration: 1000,
      distance: "80px",
      delay: 200,
      origin: "bottom",
    });
    sr.reveal(h1Ref.current, {
      reset: true,
      distance: "80px",
      delay: 200,
      origin: "left",
    });
  }, []);
  useEffect(() => {
    const typed = new Typed(spanRef.current, {
      strings: ["Frontend Developer", "Fullstack Developer", "Dev ReactJs"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
    <section className="home" id="home">
      <div className="home-content" ref={bannerTextRef}>
        <h3>Hello, I'm me</h3>
        <h1 ref={h1Ref}>Tony Phong</h1>
        <h3
          style={{
            maxWidth: "70%",
          }}
        >
          And I'm a <span ref={spanRef}></span>
          <p>
            Developer focusing on Web Frontend. As an intuitive and experiential
            person, you can create products that help you create a great user
            experience.
          </p>
          <div className="social-media">
            <a href="https://www.facebook.com/profile.php?id=100009730098747">
              <i class="bx bxl-facebook"></i>
            </a>
            <a href="">
              <i class="bx bxl-twitter"></i>
            </a>
            <a href="">
              <i class="bx bxl-instagram-alt"></i>
            </a>
            <a href="">
              <i class="bx bxl-linkedin"></i>
            </a>
          </div>
          <a className="btn" href="cv-phonglt.pdf" download="cv-phonglt.pdf">
            Download CV
          </a>
        </h3>
      </div>
      <div className="home-img" ref={bannerImgRef}>
        <img src={Img} alt="" />
      </div>
    </section>
  );
};

export default Banner;
