import React from "react";
import "./feature.css";
// import Hostel from "../Pages/Hostel/HostelList"

const features = [
  {
    id: 1,
    title:"Hostel Section",
    Description: "Explore a unified platform offering essential services tailored for students and employees effortlessly.",
    image: "https://res.cloudinary.com/doqzxuxb1/image/upload/v1739558732/Homy/ruebosotwiqfi6dj93gc.jpg",
    link:"/hostel"
  },
  {
    id: 2,
    title:"Meal Section",
    Description: "Nutritious and home-made meal plans designed to support the busy lifestyles of students and employees.",
    image: "https://res.cloudinary.com/doqzxuxb1/image/upload/v1739554026/Homy/y49eoed4tgl3pwxlir6m.png",
    link:"/meal"
  },
  {
    id: 3,
    title:"Community Section",
    Description: "Discover convenient, dependable transportation options crafted to simplify daily commutes for everyone.",
    image: "https://res.cloudinary.com/doqzxuxb1/image/upload/v1739558732/Homy/ypfuhbrdoeiw2mnad4aq.png",
    link:"/community"
  },
];

const FeatureSection = () => {
  return (
    <section className="feature-section">
      <h2 className="feature-title">Our Featured</h2>
      <div className="feature-container">
        {features.map((feature, index) => (
          <div className={`feature-card ${index % 2 === 0 ? "right" : "left"}`} key={feature.id}>
            <div className="feature-content">
              <span className="feature-number">{feature.id}</span>
              <h2>{feature.title}</h2>
              <p>{feature.Description}</p>
              <a href={feature.link} className="view-more">View More</a>
            </div>
            <div className="feature-image">
              <img src={feature.image} alt={`Feature ${feature.id}`} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;
