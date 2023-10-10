import React from "react";

import About from "./About";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Banner from "./Banner";
import Skill from "./Skill";
const Home = () => {
  return (
    <React.Fragment>
      <Banner />
      <About />
      <Services />
      <Skill />
      <Portfolio />
      <Contact />
    </React.Fragment>
  );
};

export default Home;
