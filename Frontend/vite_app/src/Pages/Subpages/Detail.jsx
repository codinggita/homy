import React, { useState } from "react";
import "./Detail.css"; // External CSS file
import { FaStar, FaShoppingCart } from "react-icons/fa";


const Productpage = () => {
  const [quantity, setQuantity] = useState(1);
    const [selectedWeight, setSelectedWeight] = useState("250gm");
    const [price, setPrice] = useState(100); // Base price for 250gm

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => quantity > 1 && setQuantity(quantity - 1);


  const handleWeightChange = (event) => {
    const weight = event.target.value;
    setSelectedWeight(weight);

    // Update price based on selected weight
    if (weight === "250gm") {
      setPrice(100);
    } else if (weight === "500gm") {
      setPrice(180);
    } else if (weight === "1kg") {
      setPrice(350);
    }
  };

  return (
    <div className="product-container">
      <div className="breadcrumb">
        Home &gt; Meals &gt; <span className="active">Methi Thepla</span>
      </div>

      <div className="product-content">
        {/* Left - Image */}
        <div className="product-image">
          <img
            src="https://res.cloudinary.com/doqzxuxb1/image/upload/v1740137496/Thepla-231x300_edl9q5.png"
            alt="Deluxe Cheeseburger"
          />
          {/* <div className="wishlist">&#10084;</div> */}
        </div>

        {/* Right - Details */}
        <div className="product-info">
          <h1>Methi Thepla</h1>
          <p className="reviews">342 reviews | 1250+ orders</p>

          <div className="price">
            <span className="current-price">Price: ₹{price}</span>
            {/* <span className="original-price">$12.99</span>
            <span className="discount">23% OFF</span> */}
          </div>

          <div className="delivery-info">
            <p>🚚 Delivery in 30-45 min</p>
            <p>✔️ Free delivery on orders over ₹499</p>
          </div>

          <div className="rating">
            <FaStar className="star-icon" /> <span>4.8</span>
          </div>

         
          <div className="quantitycart">
          <div className="quantity-selector">
            <button onClick={decreaseQuantity}>-</button>
            <span>{quantity}</span>
            <button onClick={increaseQuantity}>+</button>
          </div>
          <div className="weight">
          <label>Select Weight: </label>
      <select value={selectedWeight} onChange={handleWeightChange}>
        <option value="250gm">250gm</option>
        <option value="500gm">500gm</option>
        <option value="1kg">1kg</option>
      </select>
          </div>
          </div>
          <button className="add-to-cart">
            <FaShoppingCart className="cartd" /> Add to Cart
          </button>
          <button className="add-to-cart">
            Buy Now
          </button>
  
        </div>
      </div>

      {/* Tabs Section */}
      {/* <div className="product-tabs">
        <div className="tab active">Description</div>
        <div className="tab">Ingredients</div>
        <div className="tab">Nutrition Info</div>
        <div className="tab">Reviews (5)</div>
      </div> */}
    </div>
  );
};

export default Productpage;
