import React from "react";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row ">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="text-center my-1">
              <p>15 Evelyn St, Hooksett, NH 03077</p>
            </div>
            <div className="d-flex justify-content-center align-items-center my-1">
              <FontAwesomeIcon
                className="icon my-1 px-1"
                icon={faPhone}
                size="1x"
              />
              <a href="tel:682-559-3989" target="_blank" rel="noreferrer">
                +1(682)559-3989
              </a>
            </div>
            <div className="d-flex justify-content-center align-items-center my-1">
              <FontAwesomeIcon
                className="icon my-1 px-1"
                icon={faPhone}
                size="1x"
              />
              <a href="tel:682-205-0497" target="_blank" rel="noreferrer">
                +1(682)205-0497
              </a>
            </div>
            <div className="d-flex justify-content-center align-items-center my-1">
              <FontAwesomeIcon
                className="icon my-1 px-1"
                icon={faEnvelope}
                size="1x"
              />
              <a
                href="mailto:gntlspprt@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                gntlspprt@gmail.com
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-2 col-sm-6">
            <div className="row">
              <div className="col text-center my-2">
                <a className="footer-nav" href="#home">
                  Home
                </a>
                <br />
                <a className="footer-nav" href="#about-us">
                  About Us
                </a>
                <br />
                <a className="footer-nav" href="#services">
                  Services
                </a>
                <br />
                <a className="footer-nav" href="#contact-us">
                  Contact Us
                </a>
                <br />
                <a className="footer-nav" href="#resources">
                  Resources
                </a>
                <br />
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
            <div className="d-flex justify-content-center">
              <SocialIcon
                href="https://www.facebook.com/profile.php?id=61571030336883"
                target="_blank"
                url="www.facebook.com"
                className="footer-social"
              />
              <SocialIcon
                href="https://www.instagram.com/gentlesupportnh/"
                target="_blank"
                url="www.instagram.com"
                className="footer-social"
              />
              <SocialIcon
                href="https://www.linkedin.com/company/gentle-support/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_companies%3B38lRvTAeST%2BbpkXAbk72GA%3D%3D"
                target="_blank"
                url="www.linkedin.com"
                className="footer-social"
              />
            </div>
            <p className="pt-3 text-center">
              Copyright&copy;
              {new Date().getFullYear()}&nbsp;Gentle Support | All Rights
              Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
