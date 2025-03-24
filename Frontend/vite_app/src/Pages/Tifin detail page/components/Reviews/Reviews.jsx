import React from "react";
import { Star } from "lucide-react";
import "./Reviews.css"; // Import the external CSS file

const reviews = [
  {
    name: "Priya Singh",
    rating: 5,
    comment:
      "The food quality is excellent and delivery is always on time. Love their vegetarian options!",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
  },
  {
    name: "Rahul Sharma",
    rating: 4,
    comment:
      "Great variety in the menu and the portion sizes are perfect. Highly recommended!",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
  },
  {
    name: "Anita Patel",
    rating: 5,
    comment:
      "Been using their service for 3 months now. The food is consistently good and healthy.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200",
  },
];

// Calculate overall rating
const averageRating = (
  reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
).toFixed(1);

export default function Reviews() {
  return (
    <section className="reviews-section">
      <div className="container-review">
        {/* Header */}
        <div className="header">
          <h2 className="title">Customer Reviews</h2>
          <p className="subtitle">See what our happy customers have to say</p>
        </div>

        {/* Overall Review Section */}


        {/* Reviews Grid */}
        <div className="reviews-grid">
          {reviews.map((review, index) => (
            <div key={index} className="review-card">
              <div className="review-header">
                <img src={review.image} alt={review.name} className="review-img" />
                <div className="review-info">
                  <h3 className="review-name">{review.name}</h3>
                  <div className="star-rating">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`star-icon ${
                          i < review.rating ? "filled" : ""
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="review-comment">{review.comment}</p>
            </div>
          ))}
        </div>

        <div className="overall-review">
            <span>Overall Review</span>
          <div className="overall-ratings">
            <span className="rating-number">{averageRating}</span>
            <div className="star-rating">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`star-icon ${
                    i < Math.round(averageRating) ? "filled" : ""
                  }`}
                />
              ))}
            </div>
            <p>(Based on {reviews.length} reviews)</p>
          </div>
          <button className="add-review-btn">Add Your Review</button>
        </div>
      </div>
    </section>
  );
}
