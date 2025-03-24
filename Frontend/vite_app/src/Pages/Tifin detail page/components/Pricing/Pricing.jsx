import React from "react";
import { Check } from "lucide-react";
import "./Pricing.css"; // Import external CSS

const plans = [
  {
    name: "Basic Plan",
    price: 1499,
    duration: "month",
    features: [
      "Daily fresh meals",
      "Choose between veg/non-veg",
      "Free delivery",
      "Basic meal customization",
    ],
  },
  {
    name: "Premium Plan",
    price: 2499,
    duration: "month",
    features: [
      "All Basic Plan features",
      "Premium menu options",
      "Weekend special meals",
      "Priority delivery",
      "Full meal customization",
    ],
    popular: true,
  },
  {
    name: "Family Plan",
    price: 3999,
    duration: "month",
    features: [
      "All Premium Plan features",
      "4 person servings",
      "Special occasion meals",
      "Dedicated support",
      "Flexible delivery timing",
    ],
  },
];

export default function Pricing() {
  return (
    <section className="pricing-section">
      <div className="container-pricing">
        <div className="text-center">
          <h2 className="title">Subscription Plans</h2>
          <p className="subtitle">Choose the perfect plan for your needs</p>
        </div>

        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div key={index} className={`pricing-card ${plan.popular ? "popular" : ""}`}>
              {plan.popular && <div className="popular-badge">Most Popular</div>}
              <div className="card-content">
                <h3 className="plan-name">{plan.name}</h3>
                <div className="price">
                  <span className="amount">₹{plan.price}</span>
                  <span className="duration">/{plan.duration}</span>
                </div>
                <ul className="features">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="feature-item-pricing">
                      <Check className="icon" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="subscribe-btn">Subscribe Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
