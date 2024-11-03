import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(true);
  const [iconColor, setIconColor] = useState(false);

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
    setIconColor(!iconColor);
  };

  return (
    <nav className="navbar">
      <i
        className={`fa-solid fa-bars ${iconColor ? "active-icon" : ""}`}
        onClick={toggleMenu}
      ></i>
      <ul className={`navbar-menu ${mobileMenu ? "open" : "closed"}`}>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/Projects">PROJECTS</Link>
        </li>
        <li>
          <Link to="/About">ABOUT ME</Link>
        </li>
        <li>
          <Link to="/Contacts">CONTACTS</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
