import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const AccommodationAndFood = () => {
  const navigate = useNavigate();

  // Sample data for Hostels and Meals
  const hostels = [

    { image: "https://res.cloudinary.com/doqzxuxb1/image/upload/v1739558732/Homy/ecw4wi38ivh3srbci21i.png", title: "PG And Hostel 1" },
    { image: "https://res.cloudinary.com/doqzxuxb1/image/upload/v1739558734/Homy/zqd8s1vp0rhmaansn2xi.png", title: "PG And Hostel 2" },
    { image: "https://res.cloudinary.com/doqzxuxb1/image/upload/v1739558733/Homy/kehiu5dzvrd44foohz8s.jpg", title: "PG And Hostel 3" },
  ];

  const foods = [
    { image: "https://res.cloudinary.com/doqzxuxb1/image/upload/v1739558732/Homy/oryi3be9zpde6veby8yj.png", title: "Home Made Food 1" },
    { image: "https://res.cloudinary.com/doqzxuxb1/image/upload/v1739558732/Homy/v1eo8n2mzkxalpegsjd2.png", title: "Home Made Food 2" },
    { image: "https://res.cloudinary.com/doqzxuxb1/image/upload/v1739558732/Homy/mjitfejhe7f1xggfqd6d.png", title: "Home Made Food 3" },
  ];

  // Internal Card Component
  const Card1 = ({ image, title }) => {
    return (
      <div className="card">
        <img src={image} alt={title} className="card-image" />
        <h3 className="card-title">{title}</h3>
        <button className="card-button" onClick={() => navigate("/hostel")}>
          View More
        </button>
      </div>
    );
  };



  const Card2 = ({ image, title }) => {
    return (
      <div className="card">
        <img src={image} alt={title} className="card-image" />
        <h3 className="card-title">{title}</h3>
        <button className="card-button" onClick={() => navigate("/meal")}>
          View More
        </button>
      </div>
    );
  };

  return (
    <div className="box-container">
      {/* Hostel Section */}
      <div className="content-box">
        <h2 className="section-title">Find The Best Hostel and PG in Your Area</h2>
        <div className="card-container">
          {hostels.map((hostel, index) => (
            <Card1 key={index} image={hostel.image} title={hostel.title} />
          ))}
        </div>

      </div>

      {/* Food Section */}
      <div className="content-box">
        <h2 className="section-title">Find The Best Home Made Food in Your Area</h2>
        <div className="card-container">
          {foods.map((food, index) => (
            <Card2 key={index} image={food.image} title={food.title} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccommodationAndFood;

