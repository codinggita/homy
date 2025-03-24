import React from "react";
import { ChefHat, Clock, Truck } from "lucide-react";
import "./TiffinHero.css";

export default function TiffinHero() {
  return (
    <div className="tiffin-hero">
      <div className="tiffin-content">
        <div className="text-center">
          <h1>
            <span>Fresh & Healthy Tiffin</span>
            <span className="highlight">Delivered to Your Doorstep</span>
          </h1>
          <p>
            Experience the taste of home-cooked meals with our premium tiffin
            service. Healthy, delicious, and delivered right to you.
          </p>

          <div className="tiffin-features">
            <div className="feature">
              <ChefHat className="icon" />
              <span>Expert Chefs</span>
            </div>
            <div className="feature">
              <Clock className="icon" />
              <span>On-time Delivery</span>
            </div>
            <div className="feature">
              <Truck className="icon" />
              <span>Free Delivery</span>
            </div>
          </div>
        </div>
      </div>

      <div className="wave-divider">
        <svg viewBox="0 0 1440 48" fill="currentColor" preserveAspectRatio="none">
          <path d="M0 48h1440V0C1440 0 1140 48 720 48C300 48 0 0 0 0v48z" />
        </svg>
      </div>
    </div>
  );
}
