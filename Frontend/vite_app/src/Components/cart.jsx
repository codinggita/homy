import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "./cartSlice.jsx";
import "./Cart.css"; // Import external CSS file

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  console.log("🛒 Cart Items in UI:", cartItems); // ✅ Debugging  

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <div key={`${item.id}-${item.weight}`} className="cart-item">
            <img src={item.image} alt={item.name} className="cart-image" />
            
            <div className="cart-details">
              <h3>{item.name}</h3>
              <p><strong>Weight:</strong> {item.weight}</p>
              <p><strong>Price:</strong> ₹{item.price}</p>

              <div className="cart-quantity">
                <strong>Quantity:</strong>
                <button 
                  onClick={() => dispatch(updateQuantity({ id: item.id, weight: item.weight, quantity: item.quantity - 1 }))}
                  disabled={item.quantity <= 1}
                  className="quantity-btn"
                >-</button>
                
                <span>{item.quantity}</span>

                <button 
                  onClick={() => dispatch(updateQuantity({ id: item.id, weight: item.weight, quantity: item.quantity + 1 }))}
                  className="quantity-btn"
                >+</button>
              </div>
            </div>

            <button 
              onClick={() => dispatch(removeFromCart({ id: item.id, weight: item.weight }))}
              className="remove-btn"
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
