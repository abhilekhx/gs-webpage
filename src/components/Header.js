import React from "react";
import { ReactTyped } from "react-typed";
import headerImg from "../hands-circle.jpg";

const Header = () => {
  return (
    <div id="home" className="header-wrapper">
      <div className="header-text">
        <h1>supporting growth, independence and inclusion</h1>
        <ReactTyped
          className="typed-text"
          strings={[
            "Residential Habilitation Services",
            "Community Participation Services",
            "Respite Services",
            "Community Integration Services",
          ]}
          loop={true}
          typeSpeed={40}
        />
      </div>
      <div className="image-banner">
        <img src={headerImg} alt="circle" />
      </div>
    </div>
  );
};

export default Header;
