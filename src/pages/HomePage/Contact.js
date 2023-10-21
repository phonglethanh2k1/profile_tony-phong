import React from "react";
import "./home.css";
const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2 className="heading">
        Contact <span>Me!s</span>
      </h2>
      <form action="#">
        <div className="input-box">
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email Address" />
        </div>
        <div className="input-box">
          <input type="number" placeholder="Mobile Number" />
          <input type="text" placeholder="Email Subject" />
        </div>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Your Message"
        />
        <a href="mailto:phonglethanh2k1@gmail.com" className="btn">
          Send Message
        </a>
        .
      </form>
    </section>
  );
};

export default Contact;
