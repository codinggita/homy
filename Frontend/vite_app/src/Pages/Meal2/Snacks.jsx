import React from "react";
import './Snacks.css'
import { FaLocationDot } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import StarRating from '../../Components/Stars.jsx'


const MealCard = ({ meal }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    // Convert meal name to a URL-friendly format
    const mealNameSlug = encodeURIComponent(meal.name.toLowerCase().replace(/\s+/g, "-"));
    navigate(`/meal/${mealNameSlug}`); // Navigate using the meal name
  };

  return (
    <div className="mealcard" onClick={handleNavigate} style={{ cursor: "pointer" }}>
      <img
        src={
          meal.image ||
          "https://res.cloudinary.com/doqzxuxb1/image/upload/v1740137496/Thepla-231x300_edl9q5.png"
        }
        alt={meal.name}
        className="snackimg"
      />
      <div className="maindesc">
        <h1>{meal.name}</h1>

        {/* Star rating component */}
        <StarRating rating={parseFloat(meal.avgRating)} />

        <div className="Pricing">
          <span>₹{meal.price}</span>
          <div className="Quantity">
            <button onClick={(e) => e.stopPropagation()} className="sub">
              −
            </button>
            <span>1</span>
            <button onClick={(e) => e.stopPropagation()} className="add">
              +
            </button>
          </div>
        </div>
        <div className="buy">
          <button onClick={(e) => e.stopPropagation()}>Buy Now</button>
          <button onClick={(e) => e.stopPropagation()}>Add To Cart</button>
        </div>
      </div>
    </div>
  );
};







const Snacks = () => {
  const [meals, setMeals] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredMeals, setFilteredMeals] = useState([]);

  useEffect(() => {
    fetchMeals();
  }, []);

  const fetchMeals = async () => {
    try {
      const response = await fetch("http://localhost:5000/meals");
      const data = await response.json();
      setMeals(data); // Updating the meals state
      setFilteredMeals(data);
    } catch (error) {
      console.error("Error fetching the data:", error);
    }
  };

  // Here when we have to do search on clicking button we do this
  const handleSearch = () => {
    if (searchQuery.trim() === "") {
      setFilteredMeals(meals); // If search input is empty, show all meals
      return;
    }
  
    const results = meals.filter((meal) =>
      meal.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredMeals(results);
  };

// Here If we want that when search querry is empty all the data shown automatically we do this
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredMeals(meals); // Reset meals when input is cleared
    }
  }, [searchQuery, meals]); // Watch for changes

  return (
    <>
      <section className="Header">
        <h1>Discover Delicious Homemade Food Near You</h1>
        <p>Experience the taste of authentic home-cooked meals delivered to your doorstep</p>
        <div className="search-container">
          <span className="location-icon">
            <FaLocationDot />
          </span>
          <input
            type="text"
            className="search-box"
            placeholder="Search Best Homemade food and snacks in your area"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="search-button" onClick={handleSearch}>Search</button>
        </div>
      </section>

      <section className="mainsnacks">
        <h1>Find The Best Homemade Snacks and Food</h1>
        <section className="snackssection">
          <div className="snacks-container">
            {filteredMeals.length > 0 ? (
              filteredMeals.map((meal) => <MealCard key={meal.id} meal={meal} />)
            ) : (
              <p>Loading snacks...</p>
            )}
          </div>
        </section>
      </section>
    </>
  );
};

export default Snacks;
