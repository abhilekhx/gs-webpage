import React from "react";
import aboutUsImg from "../about-us.jpg";

const AboutUs = () => {
  return (
    <div id="about-us" className="about-us-wrapper">
      <h1 className="py-5">About Us</h1>
      <div className="m-auto row container py-5">
        <div className="col-lg-6 col-xm-12">
          <div className="about-us-text">
            <p>
              At Gentle Support, we are dedicated to empowering individuals with
              Developmental Disabilities and Acquired Brain Disorders to lead
              fulfilling, independent lives. Through personalized services, we
              focus on fostering growth, inclusion, and meaningful community
              connections.
            </p>
            <p>
              Our person-centered approach ensures that every individual’s
              unique needs, interests, and goals guide the support we provide.
              Whether through skill development, community participation, or
              tailored care plans, we strive to create opportunities that
              enhance independence and quality of life.
            </p>
            <p>
              With a commitment to compassion, professionalism, and compliance
              with state standards, Gentle Support is your trusted partner in
              building brighter, more inclusive futures.
            </p>
          </div>
        </div>
        <div className="photo-wrap col-lg-6 col-xm-12">
          <img
            className="about-us-img"
            src={aboutUsImg}
            alt="Gentle Support team working together in NH to provide the best home health care agency services to people with Developmental Disabilities and Acquired Brain Disorder."
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
