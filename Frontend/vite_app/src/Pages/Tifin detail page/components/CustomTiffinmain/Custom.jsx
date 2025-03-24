import React from "react";
import { Utensils, Clock, Leaf, Flame } from "lucide-react";
import "./CustomTiffin.css";

const mealTypes = [
  { icon: <Leaf className="icon" />, name: "Vegetarian" },
  { icon: <Utensils className="icon" />, name: "Non-Vegetarian" },
  { icon: <Clock className="icon" />, name: "Jain" },
  { icon: <Flame className="icon" />, name: "Diet-Friendly" }
];

const dishes = [
  { name: "Dal Tadka", type: "veg", calories: 180 },
  { name: "Mixed Veg", type: "veg", calories: 150 },
  { name: "Paneer Butter Masala", type: "veg", calories: 250 },
  { name: "Chicken Curry", type: "non-veg", calories: 280 },
  { name: "Fish Curry", type: "non-veg", calories: 220 }
];

export default function CustomTiffin() {
  return (
    <section className="custom-tiffin">
      <div className="container-custom ">
        <div className="title-section">
          <h2>Create Your Custom Tiffin</h2>
          <p>Select your preferred dishes and create your perfect meal plan</p>
        </div>

        <div className="grid">
          <div className="box">
            <h3>Choose Your Meal Type</h3>
            <div className="meal-types">
              {mealTypes.map((type, index) => (
                <button key={index} className="meal-button">
                  {type.icon}
                  <span>{type.name}</span>
                </button>
              ))}
            </div>

            <div className="dishes-section">
              <h3>Select Your Dishes</h3>
              <div className="dish-list">
                {dishes.map((dish, index) => (
                  <div key={index} className="dish-item">
                    <div>
                      <h4>{dish.name}</h4>
                      <p>{dish.calories} calories</p>
                    </div>
                    <button className="add-button">Add</button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="box">
            <h3>Your Custom Tiffin</h3>
            <div className="selection-box">
              <h4>Selected Items</h4>
              <p>No items selected yet</p>
            </div>

            <div className="selection-box">
              <h4>Subscription Duration</h4>
              <select>
                <option>Daily</option>
                <option>Weekly</option>
                <option>Monthly</option>
              </select>
            </div>

            <div className="selection-box">
              <h4>Delivery Time</h4>
              <div className="time-options">
                <button>Lunch</button>
                <button>Dinner</button>
              </div>
            </div>

            <button className="checkout-button">Proceed to Checkout</button>
          </div>
        </div>
      </div>
    </section>
  );
}
