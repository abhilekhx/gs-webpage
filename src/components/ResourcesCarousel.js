import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const resources = [
  {
    image: "https://nhcsoc.org/wp-content/uploads/2022/05/dhhs-logo-color.jpg",
    title: "Bureau of Developmental Services (BDS)",
    description:
      "The NH developmental services system offers individuals with developmental disabilities and acquired brain disorders a wide range of supports and services within their own communities.",
    link: "https://www.dhhs.nh.gov/programs-services/disability-care/developmental-services",
  },
  {
    image:
      "https://www.tricountytransit.org/images/cards%20on%20blanket.jpg?crc=130205145",
    title: "NH Medicaid",
    description:
      "Works to ensure that eligible adults and children have access to needed health care services by enrolling and paying providers to deliver covered services to eligible recipients.",
    link: "https://www.dhhs.nh.gov/programs-services/medicaid",
  },
  {
    image:
      "https://www.dhhs.nh.gov/sites/g/files/ehbemt476/files/callout-card-images/adult-disabled.jpg",
    title: "Developmental Disabilities (DD)",
    description:
      "The NH developmental services system offers adult individuals with developmental disabilities a wide range of supports and services within their own communities.",
    link: "https://www.dhhs.nh.gov/programs-services/disability-care/developmental-disabilities-services",
  },
  {
    image:
      "https://www.dhhs.nh.gov/sites/g/files/ehbemt476/files/callout-card-images/brain.jpg",
    title: "Acquired Brain Disorders (ABD)",
    description:
      "Acquired Brain Disorders (ABD) Services offer individuals with acquired brain disorders and traumatic brain injuries a wide range of supports and services within their own communities.",
    link: "https://www.dhhs.nh.gov/programs-services/disability-care/acquired-brain-disorders",
  },
  {
    image:
      "https://www.nh-connections.org/wp-content/uploads/2020/11/NH-Easy.jpg",
    title: "NH Easy - Apply for Assistance",
    description:
      "Learn how to apply for assistance, check eligibility, track your application status, and more by visiting NH EASY Gateway to Services.",
    link: "https://www.dhhs.nh.gov/apply-assistance",
  },
  {
    image:
      "https://drcnh.wpenginepowered.com/wp-content/uploads/2018/11/logo.png",
    title: "Disability Rights Center - NH",
    description:
      "Disability Rights Center - NH protects, advances, and strengthens the legal rights and advocacy interests of all people with disabilities.",
    link: "https://drcnh.org/",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4CSqedB9X7sPAWQ9rBHzXOkt1w23QPlUN4g&s",
    title: "Division for Children, Youth and Families (DCYF)",
    description:
      "The Division for Children, Youth and Families (DCYF) manages protective programs on behalf of New Hampshire's children and youth and their families.",
    link: "https://www.dhhs.nh.gov/programs-services/child-protection-juvenile-justice",
  },
  {
    image:
      "https://img.freepik.com/premium-vector/new-hampshire-square-state-map-with-long-shadow_601298-1408.jpg",
    title: "Area Agencies of NH",
    description:
      "An Area Agency provides either directly or through subcontractors, an array of services for individuals who have a developmental disability or acquired brain disorder.",
    link: "https://www.dhhs.nh.gov/programs-services/disability-care/area-agencies",
  },
  {
    image: "https://www.ada.gov/assets/images/doj-logo.png",
    title: "Americans with Disabilities Act (ADA)",
    description:
      "The Americans with Disabilities Act (ADA) protects people with disabilities from discrimination.",
    link: "https://www.ada.gov/",
  },
  {
    image:
      "https://images.squarespace-cdn.com/content/v1/5d764e1af1e4874227829694/5fa4685f-351f-4972-a197-bb93bbc348cf/camp-allen-official-logo-COLOR-TRANS-20191107.jpg?format=1500w",
    title: "Camp Allen",
    description:
      "Camp Allen provides opportunities for friendship, growth and fun for children and adults with developmental and/or physical disabilities in an outdoor environment.",
    link: "https://www.campallennh.org/",
  },
];

const ResourcesCarousel = () => {
  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={4000}
    >
      {resources.map((resource, index) => (
        <div className="resource-card" key={index}>
          <img src={resource.image} alt={resource.title} />
          <h3 className="py-3">{resource.title}</h3>
          <p>{resource.description}</p>
          <a href={resource.link} target="_blank" rel="noopener noreferrer">
            Learn More
          </a>
        </div>
      ))}
    </Carousel>
  );
};
export default ResourcesCarousel;
