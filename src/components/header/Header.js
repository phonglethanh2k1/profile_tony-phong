import React, { useEffect, useRef, useState } from "react";
import "./header.css";
import styles from "../../styles/styles.css";
import { motion, Variants } from "framer-motion";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  const menuToggle = () => {
    console.log("aaaa");
    return menuRef.current.classList.toggle("active");
  };
  return (
    <header className={`header ${scrolled ? "sticky_header" : ""}`}>
      <a href="#" className="logo">
        TonyPhong@lt
      </a>
      <i
        class="bx bx-menu"
        id="menu-icon"
        ref={menuRef}
        onClick={menuToggle}
      ></i>
      <nav className="navbar" ref={menuRef} onClick={menuToggle}>
        <a href="#home" className="active">
          Home
        </a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
