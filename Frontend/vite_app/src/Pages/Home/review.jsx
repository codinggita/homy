import React from "react";
import "./review.css";

const reviews = [
  {
    id: 1,
    name: "John Doe",
    review: "Homy made my daily routine so much easier! Highly recommended.",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Sarah Williams",
    review: "The best platform for students and employees. Super helpful!",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 3,
    name: "Michael Smith",
    review: "Excellent service and a great community to be a part of!",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
];

const CustomerReviews = () => {
  return (
    <section className="review-section">
      <h2 className="review-title">🌟 Hear from Our Happy Customers! 🌟</h2>
      <div className="review-container">
        {reviews.map((customer) => (
          <div key={customer.id} className="review-card">
            <div className="image-container">
              <img src={customer.image} alt={customer.name} className="customer-img" />
            </div>
            <h3 className="customer-name">{customer.name}</h3>
            <p className="customer-review">"{customer.review}"</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
