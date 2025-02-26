import React, { useState } from "react";
import "./Detail.css";

const ProductPage = () => {
  const [quantity, setQuantity] = useState("500g");
  const [showDropdown, setShowDropdown] = useState(false);

  const handleQuantityChange = (value) => {
    setQuantity(value);
    setShowDropdown(false);
  };

  return (
    <div className="container">
      <header className="navbar">
        <div className="logo">FoodieDelivery</div>
        <nav>
          <ul>
            <li>Menu</li>
            <li>Restaurants</li>
            <li>Offers</li>
          </ul>
        </nav>
        <div className="cart-icon">🛒</div>
      </header>
      <div className="product-section">
        <div className="product-gallery">
          <img src="burger.jpg" alt="Classic Cheese Burger" className="main-image" />
          <div className="thumbnail-gallery">
            <img src="burger.jpg" alt="Thumbnail 1" />
            <img src="burger.jpg" alt="Thumbnail 2" />
            <img src="burger.jpg" alt="Thumbnail 3" />
          </div>
        </div>
        <div className="product-info">
          <h1>Classic Cheese Burger</h1>
          <div className="rating">⭐⭐⭐⭐⭐ (128 reviews)</div>
          <p className="price">
            $12.99 <span className="old-price">$15.99</span> <span className="discount">Save 19%</span>
          </p>
          <p className="description">
            Our signature burger features a juicy 100% Angus beef patty, topped with melted cheddar cheese, fresh lettuce,
            tomatoes, and our special sauce. Served on a toasted brioche bun.
          </p>
          <div className="quantity-selector">
            <label>Quantity:</label>
            <div className="dropdown" onClick={() => setShowDropdown(!showDropdown)}>
              {quantity} ▼
              {showDropdown && (
                <ul className="dropdown-menu">
                  <li onClick={() => handleQuantityChange("250g")}>250g</li>
                  <li onClick={() => handleQuantityChange("500g")}>500g</li>
                  <li onClick={() => handleQuantityChange("1kg")}>1kg</li>
                </ul>
              )}
            </div>
          </div>
          <button className="add-to-cart">Add to Cart</button>
        </div>
      </div>
      <section className="reviews">
        <h2>Customer Reviews</h2>
        <div className="review">
          <strong>John Smith ⭐⭐⭐⭐⭐</strong>
          <p>Best burger I've had in a while! The patty was juicy and perfectly cooked. The special sauce really makes it stand out.</p>
        </div>
        <div className="review">
          <strong>Sarah Johnson ⭐⭐⭐⭐</strong>
          <p>Great quality ingredients and generous portions. Would definitely order again!</p>
        </div>
      </section>
      <footer className="footer">
        <p>&copy; 2025 FoodieDelivery. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ProductPage;
