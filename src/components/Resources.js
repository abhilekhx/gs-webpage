import React from "react";
import ResourcesCarousel from "./ResourcesCarousel";

const Resources = () => {
  return (
    <>
      <div className="resources">
        <h1 className="py-5">Resources</h1>
        <div className="carousel-wrapper py-1 container">
          <div className="resources-content">
            <ResourcesCarousel />
          </div>
        </div>
      </div>
    </>
  );
};

export default Resources;
