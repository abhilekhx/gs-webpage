import React from "react";
import { ReactTyped } from "react-typed";
import banner from "../hands-circle.jpg";

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="header-text">
        <h1>supporting growth, independence and inclusion</h1>
        <ReactTyped
          className="typed-text"
          strings={[
            "Community Participation Services",
            "Residential Habilitation Services",
            "Community Integration Services",
            "Respite Services",
          ]}
          loop={true}
          typeSpeed={40}
        />
      </div>
      <div className="image-banner"></div>
    </div>
  );
};

export default Header;
