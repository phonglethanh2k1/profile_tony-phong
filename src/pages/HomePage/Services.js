import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "./home.css";
import ScrollReveal from "scrollreveal";
const Services = () => {
  const servicesRef = useRef(null);
  useEffect(() => {
    const sr = ScrollReveal();
    sr.reveal(servicesRef.current, {
      reset: true,
      duration: 1000,
      distance: "80px",
      delay: 200,
      origin: "top",
    });
  }, []);
  return (
    <section className="services" id="services">
      <h2 className="heading" ref={servicesRef}>
        Our <span>Services</span>
      </h2>
      <div className="services-container">
        <div className="services-box">
          <motion.i
            animate={{
              rotate: [0, 0, 180, 180, 0],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.8, 1],
              repeat: Infinity,
              repeatDelay: 1,
            }}
            class="bx bx-code-alt"
          ></motion.i>
          <h3>Web Development</h3>
          <p>
            With a strong foundation in computer science, I'm passionate about
            web design and development, and interested in mobile app
            development. As I grow as a developer, I hope to write clean,
            readable code that can be used by others and leveraged to create
            beautiful software.
          </p>
          <a href="#" className="btn">
            Read More
          </a>
        </div>
        <div className="services-box">
          <motion.i
            animate={{
              rotate: [0, 0, 180, 180, 0],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.8, 1],
              repeat: Infinity,
              repeatDelay: 1,
            }}
            class="bx bxs-paint"
          ></motion.i>
          <h3>Graphic Design</h3>
          <p>
            Design isn't just what a product looks like and feels like on the
            outside. Design encompasses the internal functionality of a product
            as well as the overall user experience. I strive to design
            interfaces and experiences that people can enjoy on all digital
            mediums.
          </p>
          <a href="#" className="btn">
            Read More
          </a>
        </div>
        <div className="services-box">
          <motion.i
            animate={{
              rotate: [0, 0, 180, 180, 0],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.8, 1],
              repeat: Infinity,
              repeatDelay: 1,
            }}
            class="bx bx-bar-chart-alt"
          ></motion.i>
          <h3>Digital Marketing</h3>
          <p>
            Digital Marketing brings competitive opportunities to all businesses
            in the digital age. But not all businesses can deploy Digital
            Marketing effectively to achieve business goals. And one of the ways
            to get on the right track is to create a Digital Marketing plan
          </p>
          <a href="#" className="btn">
            Read More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
