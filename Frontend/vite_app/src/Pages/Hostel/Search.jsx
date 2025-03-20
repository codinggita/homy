

// import React, { useState, useEffect } from "react";
// import "./searchbar.css";

// const HostelList = () => {
//   const [hostels, setHostels] = useState([]);

//   useEffect(() => {
//     fetchHostels(); // Fetch all hostels when the page loads
//   }, []);

//   const fetchHostels = async () => {
//     try {
//       const response = await fetch("http://localhost:3000/hostels"); // Ensure this fetches the schema data
//       const data = await response.json();

//       // Flatten the hostels array from different areas
//       const allHostels = data.reduce((acc, area) => {
//         return [...acc, ...area.hostels]; // Flatten the hostels from all areas
//       }, []);

//       setHostels(allHostels); // Set the flattened list of hostels
//     } catch (error) {
//       console.error("Error fetching hostels:", error);
//     }
//   };

//   return (
//     <div className="container">
//       <h2 className="title">Best Hostels</h2>
//       <div className="hostel-grid">
//         {hostels.length > 0 ? (
//           hostels.map((hostel, index) => (
//             <div key={index} className="hostel-card">
//               <div>
//               <img
//                 src={hostel.image}
//                 alt={hostel.name}
//                 className="hostel-image"
//               />
//               </div>
// <div>
// <h3>{hostel.name}</h3>
//               <p>
//                 <strong>Location:</strong> {hostel.area || "Unknown Area"}
//               </p>
//               <p>
//                 <strong>Price:</strong> ₹{hostel.price} per month
//               </p>
//               <p>
//                 <strong>Ratings:</strong> ⭐ {hostel.rating}
//               </p>
//               <p>
//                 <strong>Occupancy:</strong> {hostel.occupancy} people
//               </p>
//               <div className="buttons">
//                 <a href={hostel.visitUrl} className="visit-btn">
//                   Visit
//                 </a>
//                 <a href={hostel.viewMoreUrl} className="view-more-btn">
//                   View More
//                 </a>
//               </div>
// </div>

//             </div>
//           ))
//         ) : (
//           <p className="no-results">No hostels available.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default HostelList;



// import React, { useState, useEffect } from "react";
// import "./searchbar.css";

// const HostelList = () => {
//   const [hostels, setHostels] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");

//   useEffect(() => {
//     fetchHostels();
//   }, []);

//   const fetchHostels = async () => {
//     try {
//       const response = await fetch("http://localhost:3000/hostels");
//       const data = await response.json();

//       const allHostels = data.reduce((acc, area) => {
//         return [...acc, ...area.hostels];
//       }, []);

//       setHostels(allHostels);
//     } catch (error) {
//       console.error("Error fetching hostels:", error);
//     }
//   };

//   // Filter hostels based on search query (by name or area)
//   const filteredHostels = hostels.filter(
//     (hostel) =>
//       hostel.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       (hostel.area && hostel.area.toLowerCase().includes(searchQuery.toLowerCase()))
//   );

//   return (
//     <div className="container">
//       <h2 className="title">Best Hostels</h2>

//       {/* Search Bar */}
//       <input
//         type="text"
//         placeholder="Search by hostel name or area..."
//         value={searchQuery}
//         onChange={(e) => setSearchQuery(e.target.value)}
//         className="search-bar"
//       />

//       <div className="hostel-grid">
//         {filteredHostels.length > 0 ? (
//           filteredHostels.map((hostel, index) => (
//             <div key={index} className="hostel-card">
//               <div>
//                 <img src={hostel.image} alt={hostel.name} className="hostel-image" />
//               </div>
//               <div>
//                 <h3>{hostel.name}</h3>
//                 <p>
//                   <strong>Location:</strong> {hostel.area || "Unknown Area"}{console.log(hostel.area)}
//                 </p>
//                 <p>
//                   <strong>Price:</strong> ₹{hostel.price} per month
//                 </p>
//                 <p>
//                   <strong>Ratings:</strong> ⭐ {hostel.rating}
//                 </p>
//                 <p>
//                   <strong>Occupancy:</strong> {hostel.occupancy} people
//                 </p>
//                 <div className="buttons">
//                   <a href={hostel.visitUrl} className="visit-btn">
//                     Visit
//                   </a>
//                   <a href={hostel.viewMoreUrl} className="view-more-btn">
//                     View More
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p className="no-results">No hostels found.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default HostelList;



import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa"; // Import search icon
import "./searchbar.css";

const HostelList = () => {
  const [allHostels, setAllHostels] = useState([]);
  const [displayedHostels, setDisplayedHostels] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [recommendations, setRecommendations] = useState([]);
  const [showRecommendations, setShowRecommendations] = useState(false);

  // Filters
  const [selectedLocality, setSelectedLocality] = useState("");
  const [selectedRent, setSelectedRent] = useState("");
  const [selectedOccupancy, setSelectedOccupancy] = useState("");

  useEffect(() => {
    fetchHostels();
  }, []);

  const fetchHostels = async () => {
    try {
      const response = await fetch("http://localhost:3000/hostels");
      const data = await response.json();

      const hostels = data.reduce((acc, area) => {
        return [...acc, ...area.hostels.map(hostel => ({ ...hostel, area: area.area }))];
      }, []);

      setAllHostels(hostels);
      setDisplayedHostels(hostels.slice(-8).reverse());
    } catch (error) {
      console.error("Error fetching hostels:", error);
    }
  };

  // Live Recommendations
  useEffect(() => {
    if (searchQuery.trim()) {
      const filtered = allHostels.filter(
        (hostel) =>
          hostel.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          hostel.area.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setRecommendations(filtered.slice(0, 5)); // Show top 5 recommendations
      setShowRecommendations(true);
    } else {
      setRecommendations([]);
      setShowRecommendations(false);
    }
  }, [searchQuery, allHostels]);

  // Function to handle recommendation click
  const handleRecommendationClick = (recommendation) => {
    setSearchQuery(recommendation.name);
    setShowRecommendations(false); // Hide recommendation list
    handleSearch(); // Trigger search
  };

  // Function to filter hostels when search is triggered
  const handleSearch = () => {
    let filteredHostels = allHostels;

    if (searchQuery.trim()) {
      filteredHostels = filteredHostels.filter(
        (hostel) =>
          hostel.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          hostel.area.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedLocality) {
      filteredHostels = filteredHostels.filter((hostel) => hostel.area === selectedLocality);
    }

    if (selectedRent) {
      const [min, max] = selectedRent.split("-").map(Number);
      filteredHostels = filteredHostels.filter((hostel) => hostel.price >= min && hostel.price <= max);
    }

    if (selectedOccupancy) {
      filteredHostels = filteredHostels.filter((hostel) => hostel.occupancy === Number(selectedOccupancy));
    }

    setDisplayedHostels(filteredHostels);
    setShowRecommendations(false); // Hide recommendations after search
  };

  return (
    <div className="container">
      <h2 className="title">Find The Best Hostels and PG's in Your Area.</h2>

      {/* Search Bar with Icon and Reset Button */}
  <div className="search-container-wrapper">
  <div className="search-container">
    <input
      type="text"
      placeholder="Search by hostel name or area..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      onClick={() => setShowRecommendations(searchQuery.trim() !== "")}
      className="search-bar"
    />
    <FaSearch className="search-icon" onClick={handleSearch} />
    
    {showRecommendations && recommendations.length > 0 && (
      <ul className="recommendation-list">
        {recommendations.map((hostel, index) => (
          <li key={index} onClick={() => handleRecommendationClick(hostel)}>
            {hostel.name} - {hostel.area}
          </li>
        ))}
      </ul>
    )}
  </div>
  
  <button
    onClick={() => {
      setSelectedLocality("");
      setSelectedRent("");
      setSelectedOccupancy("");
      setSearchQuery("");
      setDisplayedHostels(allHostels.slice(-8).reverse());
    }}
    className="reset-btn"
  >
    Reset
  </button>
</div>

      {/* Filters Section */}
      <div className="filters">
        <div className="filter-component">
          <select value={selectedLocality} onChange={(e) => setSelectedLocality(e.target.value)} className="filter-select">
            <option value="">Select Locality</option>
            {[...new Set(allHostels.map((hostel) => hostel.area))].map((area, index) => (
              <option key={index} value={area}>{area}</option>
            ))}
          </select>

          <select value={selectedRent} onChange={(e) => setSelectedRent(e.target.value)} className="filter-select">
            <option value="">Select Rent</option>
            <option value="3000-5000">₹4000 - ₹5000</option>
            <option value="5000-7000">₹5000 - ₹7000</option>
            <option value="7000-10000">₹7000 - ₹10000</option>
            <option value="10000-12000">₹10000 - ₹12000</option>
            <option value="12000-15000">₹12000 - ₹15000</option>
          </select>

          <select value={selectedOccupancy} onChange={(e) => setSelectedOccupancy(e.target.value)} className="filter-select">
            <option value="">Select Occupancy</option>
            {[...Array(10)].map((_, i) => (
              <option key={i + 1} value={i + 1}>{i + 1} People</option>
            ))}
          </select>
        </div>
      </div>

      {/* Hostels Grid */}
      <div className="hostel-grid">
        {displayedHostels.length === 0 ? (
          <p className="no-results">No hostels found.</p>
        ) : (
          displayedHostels.map((hostel, index) => (
            <div key={index} className="hostel-card">
              <img src={hostel.image} alt={hostel.name} className="hostel-image" />
              <h3>{hostel.name}</h3>
              <p><strong>Location:</strong> {hostel.area}</p>
              <p><strong>Price:</strong> ₹{hostel.price} per month</p>
              <p><strong>Ratings:</strong> ⭐ {hostel.rating}</p>
              <p><strong>Occupancy:</strong> {hostel.occupancy} people</p>
              <button className="details-btn">View Details</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default HostelList;