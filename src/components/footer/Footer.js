import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-text">
        <p>Copyright &copy; 2023 by Tony Phong | All Right Reserved.</p>
      </div>
      <div className="footer-iconTop">
        <a href="#home">
          <i class="bx bx-up-arrow-alt"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
