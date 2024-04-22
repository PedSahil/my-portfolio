import React from "react";
import "./navbar.css";
import { useDarkMode } from "../contexts/DarkModeContext";

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className="nav">
      <p className="title">Portfolio.</p>
      <div className="links">
        <a className="link" href="#about">
          About.
        </a>
        <a className="link" href="#skills">
          Skills.
        </a>
        <a className="link" href="#work">
          Work.
        </a>
        <a className="link" href="">
          Home.
        </a>
        <a className="link" href="#contact">
          Contact.
        </a>
      </div>
      <span>
        <img
          onClick={toggleDarkMode}
          className="dark"
          src={darkMode?'/src/assets/moon.png':'/src/assets/sun.png'}
          alt=""
        />
      </span>
    </div>
  );
};

export default Navbar;
