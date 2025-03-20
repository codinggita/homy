import React, { useState } from "react";
import { Star, Clock, Users } from "lucide-react";
// import TiffinDetail from "./TiffinDetail";
import "./MealPlan.css"; // Importing external CSS

export default function MealPlan({ title, price, description, image, rating, duration, servings }) {
  const [showDetail, setShowDetail] = useState(false);

  return (
    <>
      <div className="meal-plan-card" onClick={() => setShowDetail(true)}>
        <div className="meal-plan-image-container">
          <img src={image} alt={title} className="meal-plan-image" />
          <div className="meal-plan-rating">
            <Star className="icon star-icon" />
            <span>{rating}</span>
          </div>
        </div>

        <div className="meal-plan-content">
          <h3 className="meal-plan-title">{title}</h3>
          <p className="meal-plan-description">{description}</p>

          <div className="meal-plan-details">
            <div className="meal-plan-info">
              <Clock className="icon" />
              <span>{duration}</span>
            </div>
            <div className="meal-plan-info">
              <Users className="icon" />
              <span>{servings} servings</span>
            </div>
          </div>

          <div className="meal-plan-footer">
            <span className="meal-plan-price">₹{price}</span>
            <button
              className="meal-plan-button"
              onClick={(e) => {
                e.stopPropagation();
                setShowDetail(true);
              }}
            >
              Order Now
            </button>
          </div>
        </div>
      </div>

      {showDetail && <TiffinDetail onClose={() => setShowDetail(false)} />}
    </>
  );
}
