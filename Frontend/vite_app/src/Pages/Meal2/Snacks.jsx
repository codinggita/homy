import React from "react";
import './Snacks.css'
import { FaLocationDot } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import StarRating from '../../Components/Stars.jsx'


const MealCard = ({ meal }) => {
  const navigate = useNavigate();
  const [count, setCount] = useState(1);

  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count > 1 ? count - 1 : 1);

  return (
    <div className="mealcard">
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
            <button onClick={decreaseCount} className="sub">
              −
            </button>
            <span>{count}</span>
            <button onClick={increaseCount} className="add">
              +
            </button>
          </div>
        </div>
        <div className="buy">
          <button onClick={() => navigate("/")}>Buy Now</button>
          <button onClick={() => navigate("/")}>Add To Cart</button>
        </div>
      </div>
    </div>
  );
};





const Snacks = () => {
  const [meals, setMeals] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchMeals();
  }, []);

  const fetchMeals = async () => {
    try {
      const response = await fetch("http://localhost:5000/meals");
      const data = await response.json();
      setMeals(data); // Updating the meals state
    } catch (error) {
      console.error("Error fetching the data:", error);
    }
  };

  const FilteredMeals = meals.filter((meal) =>
    meal.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
          <button className="search-button">Search</button>
        </div>
      </section>

      <section className="mainsnacks">
        <h1>Find The Best Homemade Snacks and Food</h1>
        <section className="snackssection">
          <div className="snacks-container">
            {FilteredMeals.length > 0 ? (
              FilteredMeals.map((meal) => <MealCard key={meal.id} meal={meal} />)
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
