import React from "react";
import TiffinHero from "./components/Tiffinhero/Tiffin_Hero.jsx";
import MealPlan from "./components/MealPlan/MealPlan.jsx";
import "./tifin.css";

const Tiffin_main = () => {
  const mealPlans = [
    {
      title: "Classic Vegetarian",
      price: 149,
      description: "A perfect blend of nutritious vegetables, dal, and roti. Includes salad and dessert.",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800",
      rating: 4.8,
      duration: "Lunch",
      servings: 1
    },
    {
      title: "Premium Non-Veg",
      price: 199,
      description: "Delicious non-vegetarian meals with a perfect balance of proteins and nutrients.",
      image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&q=80&w=800",
      rating: 4.9,
      duration: "Dinner",
      servings: 1
    },
    {
      title: "Diet Special",
      price: 179,
      description: "Low-calorie, high-protein meals perfect for fitness enthusiasts.",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800",
      rating: 4.7,
      duration: "Both",
      servings: 1
    },
    {
      title: "Pure veg",
      price: 199,
      description: "Low-calorie, high-protein meals perfect for fitness enthusiasts.",
      image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&q=80&w=800",
      rating: 4.7,
      duration: "Both",
      servings: 1
    }
  ];
  return (
    <div className="app-container">
      <TiffinHero />
      <div className="meal-section">
        <div className="section-header">
          <h2>Our Popular Meal Plans</h2>
          <p>Choose from our wide variety of healthy and delicious meal plans</p>
        </div>

        <div className="meal-grid">
          {mealPlans.map((plan, index) => (
            <MealPlan key={index} {...plan} />
          ))}
        </div>
      </div>

    </div>
  );
};

export default Tiffin_main;
