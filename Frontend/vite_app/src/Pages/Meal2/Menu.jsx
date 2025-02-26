import React from "react";
import "./Menu.css";

const menuItems = [
  {
    id: 1,
    name: "Butter Chicken",
    price: "₹110",
    rating: 4.8,
    image: "https://res.cloudinary.com/doqzxuxb1/image/upload/v1740562917/Homy/lukaqneltmvrpjguckjv.png",
  },
  {
    id: 2,
    name: "Palak Paneer",
    price: "₹100",
    rating: 4.7,
    image: "https://res.cloudinary.com/doqzxuxb1/image/upload/v1740562917/Homy/jkih0crfmngarttmooze.png",
  },
  {
    id: 3,
    name: "Special Biryani",
    price: "₹120",
    rating: 4.9,
    image: "https://res.cloudinary.com/doqzxuxb1/image/upload/v1740562917/Homy/c1gtgqvmm8ofnedn0qq9.png",
  },
  {
    id: 4,
    name: "Dal Makhani",
    price: "₹120",
    rating: 4.6,
    image: "https://res.cloudinary.com/doqzxuxb1/image/upload/v1740562917/Homy/accivducqaqozw5fxggx.png",
  },
];

const Menu = () => {
  return (
    <div className="menu-container">
      <h2>Our Best Menu</h2>
      <div className="menu-items">
        {menuItems.map((item) => (
          <div key={item.id} className="menu-card">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <div className="pr">
            <p className="price">{item.price}</p>
            <p className="rating">⭐ {item.rating}</p>
            </div>
            <button className="subscribe-btn">View More</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
