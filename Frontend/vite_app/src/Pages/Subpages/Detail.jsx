// import React, { useEffect, useState } from "react";
// import "./Detail.css"; // External CSS file
// import { FaStar, FaShoppingCart } from "react-icons/fa";
// import { useParams } from "react-router-dom";

// const Productpage = () => {
//   const { id } = useParams();
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchMealDetails = async () => {
//         try {
//             const response = await fetch(`http://localhost:5000/meals/${id}`);
//             if (!response.ok) {
//                 throw new Error("Meal not found");
//             }
//             const data = await response.json();
//             setMeal(data);
//         } catch (err) {
//             setError(err.message);
//         } finally {
//             setLoading(false);
//         }
//     };

//     fetchMealDetails();
// }, [id]);

// if (loading) return <p>Loading meal details...</p>;
// if (error) return <p>Error: {error}</p>;



//   const [quantity, setQuantity] = useState(1);
//     const [selectedWeight, setSelectedWeight] = useState("250gm");
//     const [price, setPrice] = useState(100); // Base price for 250gm

//   const increaseQuantity = () => setQuantity(quantity + 1);
//   const decreaseQuantity = () => quantity > 1 && setQuantity(quantity - 1);


//   const handleWeightChange = (event) => {
//     const weight = event.target.value;
//     setSelectedWeight(weight);

//     // Update price based on selected weight
//     if (weight === "250gm") {
//       setPrice(100);
//     } else if (weight === "500gm") {
//       setPrice(180);
//     } else if (weight === "1kg") {
//       setPrice(350);
//     }
//   };

//   return (
//     <div className="product-container">
//       <div className="breadcrumb">
//         Home &gt; Meals &gt; <span className="active">Nylon Sev</span>
//       </div>

//       <div className="product-content">
//         {/* Left - Image */}
//         <div className="product-image">
//           <img
//             src="https://res.cloudinary.com/doqzxuxb1/image/upload/v1740137495/Mix-Farshan-251x300_pyw19f.png"
//             alt="Deluxe Cheeseburger"
//           />
//           {/* <div className="wishlist">&#10084;</div> */}
//         </div>

//         {/* Right - Details */}
//         <div className="product-info">
//           <h1>Nylon Sev</h1>
//           <p className="reviews">342 reviews | 1250+ orders</p>

//           <div className="price">
//             <span className="current-price">Price: ₹{price}</span>
//             {/* <span className="original-price">$12.99</span>
//             <span className="discount">23% OFF</span> */}
//           </div>

//           <div className="delivery-info">
//             <p>🚚 Delivery in 30-45 min</p>
//             <p>✔️ Free delivery on orders over ₹499</p>
//           </div>

//           <div className="rating">
//             <FaStar className="star-icon" /> <span>4.8</span>
//           </div>

         
//           <div className="quantitycart">
//           <div className="quantity-selector">
//             <button onClick={decreaseQuantity}>-</button>
//             <span>{quantity}</span>
//             <button onClick={increaseQuantity}>+</button>
//           </div>
//           <div className="weight">
//           <label>Select Weight: </label>
//       <select value={selectedWeight} onChange={handleWeightChange}>
//         <option value="250gm">250gm</option>
//         <option value="500gm">500gm</option>
//         <option value="1kg">1kg</option>
//       </select>
//           </div>
//           </div>
//           <button className="add-to-cart">
//             <FaShoppingCart className="cartd" /> Add to Cart
//           </button>
//           <button className="add-to-cart">
//             Buy Now
//           </button>
  
//         </div>
//       </div>

//       {/* Tabs Section */}
//       {/* <div className="product-tabs">
//         <div className="tab active">Description</div>
//         <div className="tab">Ingredients</div>
//         <div className="tab">Nutrition Info</div>
//         <div className="tab">Reviews (5)</div>
//       </div> */}
//     </div>
//   );
// };

// export default Productpage;


// import React from "react";
// import { useParams } from "react-router-dom";

// const foodData = {
//   1: { name: "Pizza", description: "Delicious cheesy pizza with toppings" },
//   2: { name: "Burger", description: "Juicy burger with fresh veggies and sauces" },
//   3: { name: "Pasta", description: "Italian pasta with creamy sauce and herbs" },
// };

// function Productpage() {
//   const { id } = useParams();  // Get food ID from the URL
//   const food = foodData[id];   // Find food details using ID

//   if (!food) {
//     return <h2>Food not found</h2>;
//   }

//   return (
//     <div>
//       <h1>{food.name}</h1>
//       <p>{food.description}</p>
//     </div>
//   );
// }

// export default Productpage;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MealDetails = () => {
    const { id } = useParams(); // Get meal ID from URL
    const [meal, setMeal] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMealDetails = async () => {
            try {
                console.log("Fetching meal with ID:", id); // Debugging
                const response = await fetch(`http://localhost:5000/meals/${id}`);
                if (!response.ok) {
                    throw new Error("Meal not found");
                }
                const data = await response.json();
                console.log("Fetched meal details:", data); // Debugging
                setMeal(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchMealDetails();
    }, [id]);

    if (loading) return <p>Loading meal details...</p>;
    if (error) return <p>Error: {error}</p>;

    if (!meal) return <p>No meal found!</p>; // Prevent blank screen

    return (
        <div>
            <h2>{meal.name}</h2>
            <img src={meal.image} alt={meal.name} />
            <p>Category: {meal.category}</p>
            <p>Price: ₹{meal.price}</p>
            <p>{meal.description}</p>
            <p>Available Quantity: {meal.quantity}</p>
            <p>Ratings: {meal.ratings.join(", ")}</p>
        </div>
    );
};

export default MealDetails;
