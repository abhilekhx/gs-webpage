/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import logo from "../logo.png";
// REACT FONT AWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <div className="nav-content container">
        <a className="navbar-brand" href="#">
          <img className="logo" src={logo} alt="logo"></img>
          <span className="brandName">Gentle Support</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} style={{ color: "#003333" }} />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
              <Link
                smooth={false}
                to="home"
                offset={-110}
                className="nav-link"
                href="#"
              >
                Home
              </Link>
            </li>
            <li className="nav-item active">
              <Link
                smooth={false}
                to="about-us"
                offset={-110}
                className="nav-link"
                href="#"
              >
                About Us
              </Link>
            </li>
            <li className="nav-item active">
              <Link
                smooth={false}
                to="services"
                offset={-110}
                className="nav-link"
                href="#"
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth={false}
                to="contact-us"
                offset={-110}
                className="nav-link"
                href="#"
              >
                Contact Us
              </Link>
            </li>
            <li className="nav-item active">
              <Link
                smooth={false}
                to="resources"
                offset={-110}
                className="nav-link"
                href="#"
              >
                Resources
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
