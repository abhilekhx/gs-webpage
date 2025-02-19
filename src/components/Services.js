import React from "react";
import {
  faHome,
  faPeopleGroup,
  faPause,
  faPuzzlePiece,
  faHandshake,
  faUserNurse,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Services = () => {
  return (
    <div id="services" className="services">
      <h1 className="py-5">Our Services</h1>
      <div className="py-1">
        <div className="container">
          <div className="row">
            <div className="one-row col-md-4 col-sm-6">
              <div className="box">
                <div className="circle">
                  <FontAwesomeIcon className="icon" icon={faHome} size="2x" />
                </div>
                <h3>Residential Habilitation</h3>
                <p>
                  We provide individuals with a comfortable home environment
                  with caring and experienced providers. Matched based on their
                  needs, interests, and goals, individuals become part of a
                  supportive family while pursuing growth and community
                  involvement. Our programs focus on fostering independence,
                  building meaningful relationships.
                </p>
                <p>
                  With Gentle Support, individuals thrive in a nurturing
                  environment designed to help them achieve their goals and
                  embrace their community.
                </p>
              </div>
            </div>
            <div className="one-row col-md-4 col-sm-6">
              <div className="box">
                <div className="circle">
                  <FontAwesomeIcon
                    className="icon"
                    icon={faPeopleGroup}
                    size="2x"
                  />
                </div>
                <h3>Community Participation</h3>
                <p>
                  We provide tailored Day Program aimed to help individuals
                  achieve their personal goals and integrate successfully into
                  the community. Their schedules are strucutured around
                  individual's preference and interests. Programs focus on skill
                  building, including employment support, volunteering,
                  vocational training, healthy lifestyle education, safety
                  skills and more.
                </p>
                <p>
                  With Gentle Support, individuals can foster meaningful
                  relationships and participation, empowering them to thrive
                  both personally and socially.
                </p>
              </div>
            </div>
            <div className="one-row col-md-4 col-sm-6">
              <div className="box">
                <div className="circle">
                  <FontAwesomeIcon className="icon" icon={faPause} size="2x" />
                </div>
                <h3>Respite</h3>
                <p>
                  We provide short-term care as Respite Services to give primary
                  caregivers temporary relief while ensuring the individual’s
                  needs continue to be met. The transition process is managed
                  carefully, maintaining the same plan and schedule as with
                  their primary caregiver.
                </p>
                <p>
                  With Gentle Support, caregivers can recharge while individuals
                  receive consistent, high-quality support in a familiar and
                  structured environment.
                </p>
              </div>
            </div>
            <div className="one-row col-md-4 col-sm-6">
              <div className="box">
                <div className="circle">
                  <FontAwesomeIcon
                    className="icon"
                    icon={faPuzzlePiece}
                    size="2x"
                  />
                </div>
                <h3>Community Integration</h3>
                <p>
                  We recognize community engagement as a vital part of an
                  individual's overall well-being, and our services are designed
                  to empower individuals by enhancing their independence,
                  promoting health, and fostering meaningful participation in
                  their communities.
                </p>
                <p>
                  With Gentle Support, every individual can enjoy a fulfilling
                  and inclusive life through carefully planned activity-based
                  interventions, ultimately breaking down barriers caused by
                  disabilities.
                </p>
              </div>
            </div>
            <div className="one-row col-md-4 col-sm-6">
              <div className="box">
                <div className="circle">
                  <FontAwesomeIcon
                    className="icon"
                    icon={faHandshake}
                    size="2x"
                  />
                </div>
                <h3>Supported Employment</h3>
                <p>
                  We provide employment servicees that help individuals achieve
                  employment goals and promote independence. Staff are trained
                  to oversee the employment planning process and possess
                  state-mandated competencies required for employment support.
                  Our services are designed in a way where individuals can
                  develop skills and achieve their career goals.
                </p>
                <p>
                  With Gentle Support, individuals are able to secure and
                  maintain jobs, develop skills and achieve career goals.
                </p>
              </div>
            </div>
            <div className="one-row col-md-4 col-sm-6">
              <div className="box">
                <div className="circle">
                  <FontAwesomeIcon
                    className="icon"
                    icon={faUserNurse}
                    size="2x"
                  />
                </div>
                <h3>Nursing</h3>
                <p>
                  We offer nurse trainer services in compliance with the He-M
                  1201 state regulations. Our nurse trainers work with staff on
                  individuals’ medical needs and health concerns and certify
                  them for administer medication. Staff can then provide proper
                  medication administration and timely healthcare interventions.
                </p>
                <p>
                  With Gentle Support, providers are capable of safely and
                  effectively administering medications to individuals in their
                  care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
