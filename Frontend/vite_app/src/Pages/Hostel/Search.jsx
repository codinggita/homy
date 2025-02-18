import React, { useState, useEffect } from "react";
import "./searchbar.css";

const HostelList = () => {
  const [hostels, setHostels] = useState([]);

  useEffect(() => {
    fetchHostels(); // Fetch all hostels when the page loads
  }, []);

  const fetchHostels = async () => {
    try {
      const response = await fetch("http://localhost:3000/hostels"); // Ensure this fetches the schema data
      const data = await response.json();

      // Flatten the hostels array from different areas
      const allHostels = data.reduce((acc, area) => {
        return [...acc, ...area.hostels]; // Flatten the hostels from all areas
      }, []);

      setHostels(allHostels); // Set the flattened list of hostels
    } catch (error) {
      console.error("Error fetching hostels:", error);
    }
  };

  return (
    <div className="container">
      <h2 className="title">Best Hostels</h2>
      <div className="hostel-grid">
        {hostels.length > 0 ? (
          hostels.map((hostel, index) => (
            <div key={index} className="hostel-card">
              <div>
              <img
                src={hostel.image}
                alt={hostel.name}
                className="hostel-image"
              />
              </div>
<div>
<h3>{hostel.name}</h3>
              <p>
                <strong>Location:</strong> {hostel.area || "Unknown Area"}
              </p>
              <p>
                <strong>Price:</strong> ₹{hostel.price} per month
              </p>
              <p>
                <strong>Ratings:</strong> ⭐ {hostel.rating}
              </p>
              <p>
                <strong>Occupancy:</strong> {hostel.occupancy} people
              </p>
              <div className="buttons">
                <a href={hostel.visitUrl} className="visit-btn">
                  Visit
                </a>
                <a href={hostel.viewMoreUrl} className="view-more-btn">
                  View More
                </a>
              </div>
</div>

            </div>
          ))
        ) : (
          <p className="no-results">No hostels available.</p>
        )}
      </div>
    </div>
  );
};

export default HostelList;
