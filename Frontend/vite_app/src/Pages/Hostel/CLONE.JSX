import React, { useState, useEffect } from "react";
import "./searchbar.css";

const HostelList = () => {
  const [allHostels, setAllHostels] = useState([]); // Store all hostels
  const [displayedHostels, setDisplayedHostels] = useState([]); // Manage what is displayed
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchHostels();
  }, []);

  const fetchHostels = async () => {
    try {
      const response = await fetch("http://localhost:3000/hostels");
      const data = await response.json();

      // Flatten hostels and add area information
      const hostels = data.reduce((acc, area) => {
        return [...acc, ...area.hostels.map(hostel => ({ ...hostel, area: area.area }))];
      }, []);

      setAllHostels(hostels); // Store all hostels
      setDisplayedHostels(hostels.slice(-8).reverse()); // Show latest 8 by default
    } catch (error) {
      console.error("Error fetching hostels:", error);
    }
  };

  useEffect(() => {
    if (searchQuery.trim() === "") {
      // Show latest 8 hostels when there's no search input
      setDisplayedHostels(allHostels.slice(-8).reverse());
    } else {
      // Filter from all hostels when searching
      const filtered = allHostels.filter(
        (hostel) =>
          hostel.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          hostel.area.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setDisplayedHostels(filtered);
    }
  }, [searchQuery, allHostels]);

  return (
    <div className="container">
      <h2 className="title">Find The Best Hostels and PG's in your area.</h2>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search by hostel name or area..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-bar"
      />

      <div className="hostel-grid">
        {displayedHostels.length > 0 ? (
          displayedHostels.map((hostel, index) => (
            <div key={index} className="hostel-card">
              <div>
                <img src={hostel.image} alt={hostel.name} className="hostel-image" />
              </div>
              <div>
                <h3>{hostel.name}</h3>
                <p>
                  <strong>Location:</strong> {hostel.area}
                </p>
                {/* <p>
                  <strong>Address:</strong> {hostel.address}
                </p> */}
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
                  <a href={hostel.viewMoreUrl} className="view-more-btn">
                    View More
                  </a>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="no-results">No hostels found.</p>
        )}
      </div>
    </div>
  );
};

export default HostelList;