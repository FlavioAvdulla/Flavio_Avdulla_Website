import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const [mobileMenu, setMobileMenu] = useState(false);
  const [iconColor, setIconColor] = useState(false);

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
    setIconColor(!iconColor);
  };

  return (
    <nav className="navbar">
      <i
        className={`fa-solid fa-bars ${iconColor ? "active-icon" : ""}`}
        alt=""
        onClick={toggleMenu}
      ></i>
      <ul className={`navbar-menu ${mobileMenu ? "open" : "closed"}`}>
        <li>
          <a>HOME</a>
        </li>
        <li>
          <a>PROJECTS</a>
        </li>
        <li>
          <a>ABOUT ME</a>
        </li>
        <li>
          <a>CONTACTS</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
